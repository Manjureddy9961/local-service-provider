import React from 'react'
import { statusLabel } from '../data/mockData.js'

export default function StatusBadge({ status }) {
  return <span className={`stamp stamp-${status}`}>{statusLabel[status] || status}</span>
}
