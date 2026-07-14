import React, { useState } from 'react'
import { providerRequests as initial, reviews } from '../data/mockData.js'
import StatusBadge from '../components/StatusBadge.jsx'
import RatingStars from '../components/RatingStars.jsx'
import { useAuth } from '../context/AuthContext.jsx'

export default function ProviderDashboard() {
  const { user } = useAuth()
  const [requests, setRequests] = useState(initial)

  const setStatus = (id, status) => {
    setRequests((list) => list.map((r) => r.id === id ? { ...r, status } : r))
  }

  const stats = {
    total: requests.length,
    completed: requests.filter((r) => r.status === 'completed').length,
    pending: requests.filter((r) => r.status === 'pending').length,
    avgRating: (reviews.reduce((s, r) => s + r.rating, 0) / (reviews.length || 1)).toFixed(1),
  }

  return (
    <div className="main">
      <div className="container dash-shell">
        <aside className="dash-side">
          <div className="eyebrow">Provider</div>
          <h3 style={{ marginBottom: 16 }}>{user?.name || 'My profile'}</h3>
          <a className="active">Booking requests</a>
          <a>My profile</a>
          <a>Reviews</a>
        </aside>

        <div>
          <div className="grid-3" style={{ marginBottom: 24 }}>
            <div className="card stat-card"><div className="stat-num">{stats.total}</div><div className="stat-label">Total requests</div></div>
            <div className="card stat-card"><div className="stat-num">{stats.pending}</div><div className="stat-label">Awaiting response</div></div>
            <div className="card stat-card"><div className="stat-num">{stats.avgRating}</div><div className="stat-label">Avg. rating</div></div>
          </div>

          <h2 style={{ marginBottom: 16 }}>Incoming requests</h2>
          <div className="stack">
            {requests.map((r) => (
              <div className="ticket" key={r.id}>
                <div className="ticket-head">
                  <span className="ticket-id">#{r.id}</span>
                  <StatusBadge status={r.status} />
                </div>
                <div className="flex-between">
                  <div>
                    <strong>{r.customer}</strong>
                    <div className="muted" style={{ fontSize: '0.85rem' }}>{r.address}</div>
                    <div className="mono muted" style={{ fontSize: '0.78rem', marginTop: 4 }}>{r.date} · {r.time}</div>
                  </div>
                  <div className="row">
                    {r.status === 'pending' && (
                      <>
                        <button className="btn btn-primary btn-sm" onClick={() => setStatus(r.id, 'accepted')}>Accept</button>
                        <button className="btn btn-outline btn-sm" onClick={() => setStatus(r.id, 'rejected')}>Reject</button>
                      </>
                    )}
                    {r.status === 'accepted' && (
                      <button className="btn btn-dark btn-sm" onClick={() => setStatus(r.id, 'in_progress')}>Start job</button>
                    )}
                    {r.status === 'in_progress' && (
                      <button className="btn btn-dark btn-sm" onClick={() => setStatus(r.id, 'completed')}>Mark complete</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ margin: '32px 0 16px' }}>Recent reviews</h2>
          <div className="stack">
            {reviews.map((rv) => (
              <div className="card" key={rv.id} style={{ padding: 16 }}>
                <div className="flex-between">
                  <strong>{rv.customer}</strong>
                  <RatingStars rating={rv.rating} />
                </div>
                <p className="muted" style={{ margin: '4px 0 0' }}>{rv.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
