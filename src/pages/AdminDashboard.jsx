import React, { useState } from 'react'
import { providers, categories, bookings } from '../data/mockData.js'
import StatusBadge from '../components/StatusBadge.jsx'

const TABS = ['Overview', 'Users', 'Categories', 'Bookings', 'Messages']

export default function AdminDashboard() {
  const [tab, setTab] = useState('Overview')

  return (
    <div className="main">
      <div className="container dash-shell">
        <aside className="dash-side">
          <div className="eyebrow">Admin</div>
          <h3 style={{ marginBottom: 16 }}>Control panel</h3>
          {TABS.map((t) => (
            <a key={t} className={tab === t ? 'active' : ''} style={{ cursor: 'pointer' }} onClick={() => setTab(t)}>{t}</a>
          ))}
        </aside>

        <div>
          {tab === 'Overview' && (
            <div className="grid-3">
              <div className="card stat-card"><div className="stat-num">{providers.length}</div><div className="stat-label">Providers</div></div>
              <div className="card stat-card"><div className="stat-num">{bookings.length}</div><div className="stat-label">Bookings this month</div></div>
              <div className="card stat-card"><div className="stat-num">{categories.length}</div><div className="stat-label">Categories</div></div>
            </div>
          )}

          {tab === 'Users' && (
            <div className="stack">
              <h2>Providers</h2>
              {providers.map((p) => (
                <div className="card flex-between" key={p.id} style={{ padding: 14 }}>
                  <div><strong>{p.name}</strong> <span className="muted">— {p.category}, {p.city}</span></div>
                  <div className="row">
                    <button className="btn btn-outline btn-sm">Suspend</button>
                    <button className="btn btn-dark btn-sm">Verify</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === 'Categories' && (
            <div className="stack">
              <h2>Service categories</h2>
              {categories.map((c) => (
                <div className="card flex-between" key={c.id} style={{ padding: 14 }}>
                  <strong>{c.name}</strong>
                  <button className="btn btn-outline btn-sm">Edit</button>
                </div>
              ))}
              <button className="btn btn-primary btn-sm" style={{ alignSelf: 'flex-start' }}>+ Add category</button>
            </div>
          )}

          {tab === 'Bookings' && (
            <div className="stack">
              <h2>All bookings</h2>
              {bookings.map((b) => (
                <div className="ticket" key={b.id}>
                  <div className="ticket-head"><span className="ticket-id">#{b.id}</span><StatusBadge status={b.status} /></div>
                  <div>{b.category} — {b.provider}</div>
                </div>
              ))}
            </div>
          )}

          {tab === 'Messages' && (
            <div className="card" style={{ padding: 20 }}>
              <p className="muted">No unresolved contact messages.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
