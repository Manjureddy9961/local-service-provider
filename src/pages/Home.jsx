import React from 'react'
import { Link } from 'react-router-dom'
import { providers, bookings, categories } from '../data/mockData.js'
import ProviderCard from '../components/ProviderCard.jsx'
import StatusBadge from '../components/StatusBadge.jsx'

export default function Home() {
  const featured = providers.slice(0, 3)
  const feed = bookings.slice(0, 4)

  return (
    <div>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Book a trusted pro</div>
            <h1>No calls.<br />No guessing.<br />Just a ticket.</h1>
            <p className="hero-sub">
              Search verified local plumbers, electricians, tutors, and more —
              compare experience and price, book a slot, and track the job from
              request to completion.
            </p>
            <div className="row" style={{ marginTop: 26 }}>
              <Link to="/providers" className="btn btn-primary">Find a provider</Link>
              <Link to="/register" className="btn btn-outline" style={{ borderColor: '#3a4a6e', color: '#EEF1F5' }}>Become a provider</Link>
            </div>
            <div className="hero-stats">
              <div><div className="hero-stat-num">{providers.length * 40}+</div><div className="hero-stat-label">Bookings served</div></div>
              <div><div className="hero-stat-num">{categories.length}</div><div className="hero-stat-label">Service categories</div></div>
              <div><div className="hero-stat-num">4.6</div><div className="hero-stat-label">Avg. rating</div></div>
            </div>
          </div>

          <div>
            <div className="eyebrow" style={{ color: 'var(--accent-yellow)' }}>Live job board</div>
            <div className="feed">
              {feed.map((b) => (
                <div className="ticket" key={b.id}>
                  <div className="ticket-head">
                    <span className="ticket-id">#{b.id}</span>
                    <StatusBadge status={b.status} />
                  </div>
                  <div className="row" style={{ justifyContent: 'space-between' }}>
                    <div>
                      <strong>{b.category}</strong>
                      <div className="muted" style={{ fontSize: '0.82rem' }}>{b.provider}</div>
                    </div>
                    <div className="mono muted" style={{ fontSize: '0.78rem', textAlign: 'right' }}>
                      {b.date}<br />{b.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="main">
        <div className="container">
          <div className="flex-between" style={{ marginBottom: 20 }}>
            <div>
              <div className="eyebrow">Top rated this week</div>
              <h2>Featured providers</h2>
            </div>
            <Link to="/providers" className="btn btn-outline btn-sm">View all</Link>
          </div>
          <div className="grid-3">
            {featured.map((p) => <ProviderCard key={p.id} provider={p} />)}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--paper-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '50px 0' }}>
        <div className="container">
          <div className="eyebrow">Categories</div>
          <h2 style={{ marginBottom: 20 }}>Browse by service</h2>
          <div className="chip-row">
            {categories.map((c) => (
              <Link key={c.id} to={`/providers?category=${encodeURIComponent(c.name)}`} className="chip">{c.name}</Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
