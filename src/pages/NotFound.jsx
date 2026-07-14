import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="main">
      <div className="container auth-shell" style={{ textAlign: 'center' }}>
        <div className="ticket">
          <div className="ticket-head"><span className="ticket-id">#404</span><span className="stamp stamp-rejected">Not found</span></div>
          <h3>This ticket doesn't exist</h3>
          <p className="muted">The page you're looking for was moved or never existed.</p>
          <Link to="/" className="btn btn-dark btn-block">Back home</Link>
        </div>
      </div>
    </div>
  )
}
