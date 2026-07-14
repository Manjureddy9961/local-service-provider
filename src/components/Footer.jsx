import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container flex-between">
        <div>
          <div className="brand" style={{ marginBottom: 6 }}><span className="brand-mark">▣</span> TICKET</div>
          <p className="muted" style={{ margin: 0, fontSize: '0.85rem' }}>Local service booking, no phone calls required.</p>
        </div>
        <div className="footer-links">
          <Link to="/providers">Find a pro</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/register">Become a provider</Link>
        </div>
      </div>
    </footer>
  )
}
