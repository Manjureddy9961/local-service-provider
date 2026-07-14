import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { providers, reviews } from '../data/mockData.js'
import RatingStars from '../components/RatingStars.jsx'

export default function ProviderDetail() {
  const { id } = useParams()
  const provider = providers.find((p) => String(p.id) === id)
  if (!provider) return <Navigate to="/providers" replace />

  const providerReviews = reviews.filter((r) => r.provider === provider.name)
  const initials = provider.name.split(' ').map((w) => w[0]).slice(0, 2).join('')

  return (
    <div className="main">
      <div className="container">
        <div className="grid-2" style={{ gridTemplateColumns: '2fr 1fr', alignItems: 'start' }}>
          <div>
            <div className="row" style={{ marginBottom: 16 }}>
              <div className="avatar" style={{ width: 68, height: 68, fontSize: '1.3rem' }}>{initials}</div>
              <div>
                <h2 style={{ marginBottom: 4 }}>{provider.name}</h2>
                <div className="provider-cat">{provider.category} · {provider.city}</div>
                <RatingStars rating={provider.rating} count={provider.reviews} />
              </div>
            </div>

            <div className="card" style={{ padding: 20, marginBottom: 20 }}>
              <h3>About</h3>
              <p className="muted">{provider.bio}</p>
              <div className="row" style={{ gap: 24, marginTop: 12 }}>
                <div><div className="stat-num" style={{ fontSize: '1.1rem' }}>{provider.experience} yrs</div><div className="stat-label">Experience</div></div>
                <div><div className="stat-num" style={{ fontSize: '1.1rem' }}>₹{provider.price}</div><div className="stat-label">Per visit</div></div>
              </div>
            </div>

            <div className="card" style={{ padding: 20 }}>
              <h3>Reviews ({providerReviews.length})</h3>
              <div className="stack">
                {providerReviews.length === 0 && <p className="muted">No reviews yet.</p>}
                {providerReviews.map((r) => (
                  <div key={r.id} style={{ borderBottom: '1px solid var(--line)', paddingBottom: 12 }}>
                    <div className="flex-between">
                      <strong>{r.customer}</strong>
                      <RatingStars rating={r.rating} />
                    </div>
                    <p className="muted" style={{ margin: '4px 0 0' }}>{r.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="ticket" style={{ position: 'sticky', top: 24 }}>
            <div className="ticket-head">
              <span className="ticket-id">BOOK THIS PRO</span>
            </div>
            <p className="muted" style={{ fontSize: '0.85rem' }}>Pick a date and time — the provider will accept or reject your request.</p>
            <Link to={`/book/${provider.id}`} className="btn btn-primary btn-block">Book {provider.name.split(' ')[0]}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
