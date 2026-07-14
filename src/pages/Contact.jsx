import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    setSent(true) // POST to /contact/ once the backend exists
  }

  return (
    <div className="main">
      <div className="container auth-shell">
        <div className="eyebrow">Get in touch</div>
        <h2>Contact us</h2>
        {sent ? (
          <div className="ticket">
            <div className="ticket-head"><span className="ticket-id">MESSAGE SENT</span></div>
            <p className="muted">Thanks — we'll get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="card" style={{ padding: 24 }}>
            <div className="field"><label>Name</label><input value={form.name} onChange={update('name')} /></div>
            <div className="field"><label>Email</label><input type="email" value={form.email} onChange={update('email')} /></div>
            <div className="field"><label>Subject</label><input value={form.subject} onChange={update('subject')} /></div>
            <div className="field"><label>Message</label><textarea rows={4} value={form.message} onChange={update('message')} /></div>
            <button className="btn btn-primary btn-block" type="submit">Send message</button>
          </form>
        )}
      </div>
    </div>
  )
}
