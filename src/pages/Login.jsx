import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [role, setRole] = useState('customer')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    if (!email || !password) { setError('Enter your email and password.'); return }
    const user = await login({ email, role })
    navigate(role === 'provider' ? '/provider/dashboard' : role === 'admin' ? '/admin/dashboard' : '/customer/dashboard')
  }

  return (
    <div className="main">
      <div className="container auth-shell">
        <div className="eyebrow">Welcome back</div>
        <h2>Log in</h2>

        <div className="auth-toggle">
          {['customer', 'provider', 'admin'].map((r) => (
            <button key={r} type="button" className={role === r ? 'active' : ''} onClick={() => setRole(r)}>{r}</button>
          ))}
        </div>

        <form onSubmit={submit} className="card" style={{ padding: 24 }}>
          {error && <div className="form-error-banner">{error}</div>}
          <div className="field">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
          </div>
          <button className="btn btn-primary btn-block" type="submit">Log in as {role}</button>
          <p className="muted" style={{ fontSize: '0.82rem', marginTop: 14, textAlign: 'center' }}>
            No account? <Link to="/register">Register here</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
