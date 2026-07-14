import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { categories } from '../data/mockData.js'

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [role, setRole] = useState('customer')
  const [form, setForm] = useState({ name: '', email: '', password: '', city: '', category: categories[0].name })
  const [error, setError] = useState('')

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    if (!form.name || !form.email || !form.password) { setError('Fill in all required fields.'); return }
    await register({ name: form.name, email: form.email, role })
    navigate(role === 'provider' ? '/provider/dashboard' : '/customer/dashboard')
  }

  return (
    <div className="main">
      <div className="container auth-shell">
        <div className="eyebrow">Join Ticket</div>
        <h2>Create an account</h2>

        <div className="auth-toggle">
          <button type="button" className={role === 'customer' ? 'active' : ''} onClick={() => setRole('customer')}>Customer</button>
          <button type="button" className={role === 'provider' ? 'active' : ''} onClick={() => setRole('provider')}>Service provider</button>
        </div>

        <form onSubmit={submit} className="card" style={{ padding: 24 }}>
          {error && <div className="form-error-banner">{error}</div>}
          <div className="field">
            <label>Full name</label>
            <input value={form.name} onChange={update('name')} placeholder="Jane Doe" />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" value={form.email} onChange={update('email')} placeholder="you@example.com" />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" value={form.password} onChange={update('password')} placeholder="••••••••" />
          </div>
          <div className="field">
            <label>City</label>
            <input value={form.city} onChange={update('city')} placeholder="Hyderabad" />
          </div>
          {role === 'provider' && (
            <div className="field">
              <label>Service category</label>
              <select value={form.category} onChange={update('category')}>
                {categories.map((c) => <option key={c.id} value={c.name}>{c.name}</option>)}
              </select>
            </div>
          )}
          <button className="btn btn-primary btn-block" type="submit">Create account</button>
          <p className="muted" style={{ fontSize: '0.82rem', marginTop: 14, textAlign: 'center' }}>
            Already registered? <Link to="/login">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
