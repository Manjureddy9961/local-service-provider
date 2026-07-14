import React, { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { providers } from '../data/mockData.js'
import ProviderCard from '../components/ProviderCard.jsx'
import FilterSidebar from '../components/FilterSidebar.jsx'
import Pagination from '../components/Pagination.jsx'

const PAGE_SIZE = 4

export default function ProviderListing() {
  const [params] = useSearchParams()
  const [filters, setFilters] = useState({
    category: params.get('category') || null,
    minRating: 0,
    sort: 'rating',
  })
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    let list = providers.filter((p) =>
      (!filters.category || p.category === filters.category) &&
      p.rating >= filters.minRating
    )
    if (filters.sort === 'price_low') list = [...list].sort((a, b) => a.price - b.price)
    if (filters.sort === 'price_high') list = [...list].sort((a, b) => b.price - a.price)
    if (filters.sort === 'experience') list = [...list].sort((a, b) => b.experience - a.experience)
    if (filters.sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating)
    return list
  }, [filters])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <div className="main">
      <div className="container">
        <div className="eyebrow">Directory</div>
        <h2 style={{ marginBottom: 20 }}>Find a provider</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: 28 }}>
          <FilterSidebar filters={filters} setFilters={(fn) => { setFilters(fn); setPage(1) }} />
          <div>
            <p className="muted" style={{ fontSize: '0.85rem' }}>{filtered.length} providers found</p>
            <div className="stack">
              {pageItems.map((p) => <ProviderCard key={p.id} provider={p} />)}
              {pageItems.length === 0 && <p className="muted">No providers match those filters.</p>}
            </div>
            <Pagination page={page} totalPages={totalPages} onChange={setPage} />
          </div>
        </div>
      </div>
    </div>
  )
}
