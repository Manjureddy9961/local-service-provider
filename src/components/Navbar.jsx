import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const dashLink = user?.role === 'provider' ? '/provider/dashboard'
    : user?.role === 'admin' ? '/admin/dashboard'
    : '/customer/dashboard'

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand"><span className="brand-mark">▣</span> TICKET</Link>
        <nav className="nav-links">
          <Link to="/providers">Find a pro</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="nav-cta">
          {user ? (
            <>
              <span className="role-tag">{user.role}</span>
              <Link to={dashLink} className="btn btn-outline btn-sm" style={{ borderColor: '#3a4a6e', color: '#EEF1F5' }}>Dashboard</Link>
              <button className="btn btn-primary btn-sm" onClick={() => { logout(); navigate('/') }}>Log out</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline btn-sm" style={{ borderColor: '#3a4a6e', color: '#EEF1F5' }}>Log in</Link>
              <Link to="/register" className="btn btn-primary btn-sm">Get started</Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
