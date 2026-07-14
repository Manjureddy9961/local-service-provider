import React from 'react'
import { categories } from '../data/mockData.js'

export default function FilterSidebar({ filters, setFilters }) {
  const toggleCategory = (name) => {
    setFilters((f) => ({ ...f, category: f.category === name ? null : name }))
  }

  return (
    <aside className="card" style={{ padding: 18 }}>
      <div className="filter-block">
        <div className="filter-title">Category</div>
        <div className="chip-row">
          {categories.map((c) => (
            <span
              key={c.id}
              className={`chip ${filters.category === c.name ? 'active' : ''}`}
              onClick={() => toggleCategory(c.name)}
            >
              {c.name}
            </span>
          ))}
        </div>
      </div>
      <div className="filter-block">
        <div className="filter-title">Min rating</div>
        <div className="chip-row">
          {[4.5, 4, 3.5, 0].map((r) => (
            <span
              key={r}
              className={`chip ${filters.minRating === r ? 'active' : ''}`}
              onClick={() => setFilters((f) => ({ ...f, minRating: r }))}
            >
              {r === 0 ? 'Any' : `${r}+`}
            </span>
          ))}
        </div>
      </div>
      <div className="filter-block">
        <div className="filter-title">Sort by</div>
        <select
          value={filters.sort}
          onChange={(e) => setFilters((f) => ({ ...f, sort: e.target.value }))}
          style={{ width: '100%', padding: 9, border: '2px solid var(--line)', borderRadius: 4, fontFamily: 'var(--font-body)' }}
        >
          <option value="rating">Highest rated</option>
          <option value="price_low">Price: low to high</option>
          <option value="price_high">Price: high to low</option>
          <option value="experience">Most experienced</option>
        </select>
      </div>
    </aside>
  )
}
