import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { bookings as initialBookings } from '../data/mockData.js'
import StatusBadge from '../components/StatusBadge.jsx'
import { useAuth } from '../context/AuthContext.jsx'

const TABS = ['all', 'pending', 'accepted', 'in_progress', 'completed', 'cancelled']

export default function CustomerDashboard() {
  const { user } = useAuth()
  const [bookings, setBookings] = useState(initialBookings)
  const [tab, setTab] = useState('all')

  const cancelBooking = (id) => {
    setBookings((list) => list.map((b) => b.id === id ? { ...b, status: 'cancelled' } : b))
  }

  const filtered = tab === 'all' ? bookings : bookings.filter((b) => b.status === tab)

  return (
    <div className="main">
      <div className="container dash-shell">
        <aside className="dash-side">
          <div className="eyebrow">Customer</div>
          <h3 style={{ marginBottom: 16 }}>{user?.name || 'My account'}</h3>
          {TABS.map((t) => (
            <a key={t} className={tab === t ? 'active' : ''} onClick={() => setTab(t)} style={{ cursor: 'pointer' }}>
              {t === 'all' ? 'All bookings' : t.replace('_', ' ')}
            </a>
          ))}
          <Link to="/providers" style={{ display: 'block', marginTop: 16 }} className="btn btn-primary btn-sm btn-block">Book a new service</Link>
        </aside>

        <div>
          <div className="flex-between" style={{ marginBottom: 18 }}>
            <h2 style={{ margin: 0 }}>My bookings</h2>
          </div>

          <div className="stack">
            {filtered.length === 0 && <p className="muted">No bookings in this view.</p>}
            {filtered.map((b) => (
              <div className="ticket" key={b.id}>
                <div className="ticket-head">
                  <span className="ticket-id">#{b.id}</span>
                  <StatusBadge status={b.status} />
                </div>
                <div className="flex-between">
                  <div>
                    <strong>{b.category}</strong>
                    <div className="muted" style={{ fontSize: '0.85rem' }}>{b.provider}</div>
                    <div className="mono muted" style={{ fontSize: '0.78rem', marginTop: 4 }}>{b.date} · {b.time}</div>
                  </div>
                  <div className="row">
                    {b.status === 'pending' && (
                      <button className="btn btn-outline btn-sm" onClick={() => cancelBooking(b.id)}>Cancel</button>
                    )}
                    {b.status === 'completed' && (
                      <button className="btn btn-dark btn-sm">Leave a review</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
