import React, { useState } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { providers } from '../data/mockData.js'
import { useAuth } from '../context/AuthContext.jsx'

export default function BookingForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const provider = providers.find((p) => String(p.id) === id)
  const [form, setForm] = useState({ date: '', time: '', address: '', notes: '' })
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  if (!provider) return <Navigate to="/providers" replace />
  if (!user) return <Navigate to="/login" replace />

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    if (!form.date || !form.time || !form.address) { setError('Date, time, and address are required.'); return }
    setError('')
    // POST to /bookings/ once the backend exists
    setDone(true)
  }

  if (done) {
    return (
      <div className="main">
        <div className="container auth-shell">
          <div className="ticket">
            <div className="ticket-head"><span className="ticket-id">#TCK-NEW</span><span className="stamp stamp-pending">Pending</span></div>
            <h3>Request sent to {provider.name}</h3>
            <p className="muted">They'll accept or reject this request. Track it from your dashboard.</p>
            <button className="btn btn-dark btn-block" onClick={() => navigate('/customer/dashboard')}>Go to my bookings</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="main">
      <div className="container auth-shell">
        <div className="eyebrow">New booking</div>
        <h2>Book {provider.name}</h2>
        <p className="muted">{provider.category} · ₹{provider.price}/visit</p>

        <form onSubmit={submit} className="card" style={{ padding: 24 }}>
          {error && <div className="form-error-banner">{error}</div>}
          <div className="grid-2">
            <div className="field">
              <label>Date</label>
              <input type="date" value={form.date} onChange={update('date')} />
            </div>
            <div className="field">
              <label>Time</label>
              <input type="time" value={form.time} onChange={update('time')} />
            </div>
          </div>
          <div className="field">
            <label>Service address</label>
            <input value={form.address} onChange={update('address')} placeholder="Flat / street / area, city" />
          </div>
          <div className="field">
            <label>Notes (optional)</label>
            <textarea rows={3} value={form.notes} onChange={update('notes')} placeholder="Describe the issue or job in a few words" />
          </div>
          <button className="btn btn-primary btn-block" type="submit">Confirm request</button>
        </form>
      </div>
    </div>
  )
}
