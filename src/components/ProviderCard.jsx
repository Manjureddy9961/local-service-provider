import React from 'react'
import { Link } from 'react-router-dom'
import RatingStars from './RatingStars.jsx'

export default function ProviderCard({ provider }) {
  const initials = provider.name.split(' ').map((w) => w[0]).slice(0, 2).join('')
  return (
    <Link to={`/providers/${provider.id}`} className="card provider-card">
      <div className="provider-card-top">
        <div className="avatar">{initials}</div>
        <div>
          <div className="provider-name">{provider.name}</div>
          <div className="provider-cat">{provider.category} · {provider.city}</div>
        </div>
      </div>
      <p className="muted" style={{ fontSize: '0.85rem', margin: 0 }}>{provider.bio}</p>
      <div className="provider-meta">
        <RatingStars rating={provider.rating} count={provider.reviews} />
        <span className="price-tag">₹{provider.price}/visit</span>
      </div>
    </Link>
  )
}
