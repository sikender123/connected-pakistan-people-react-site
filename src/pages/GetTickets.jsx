import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const eventNames = {
  'innoventure-club-26': 'Innoventure Club 26',
  'innoventure-club-25': 'Innoventure Club 25',
  'innoventure-club-24': 'Innoventure Club 24',
  'cpc-2024': 'CPC 2024',
  'cpc-2023': 'CPC 2023',
  'cpc-2022': 'CPC 2022',
  'cpc-2021': 'CPC 2021',
  'cwc22': 'CWC 2022',
  'cwc24': 'CWC 2024',
};

export default function GetTickets() {
  const { eventSlug } = useParams();
  const eventName = eventNames[eventSlug] || eventSlug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Event';
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', tickets: '1', tier: 'standard', city: '' });

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="cp-util-page">
      <div className="cp-util-hero">
        <div className="cp-util-hero-inner">
          <div style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>
            <i className="fas fa-ticket-alt" style={{ marginRight: 6 }}></i>Ticketing
          </div>
          <h1>Get Tickets</h1>
          <p>{eventName} — Secure your spot at this exclusive event.</p>
        </div>
      </div>
      <div className="cp-form-section">
        {submitted ? (
          <div className="cp-success-msg">
            <i className="fas fa-check-circle" style={{ fontSize: '2rem', display: 'block', marginBottom: 12 }}></i>
            <div style={{ fontSize: '1.1rem', marginBottom: 8 }}>Ticket Request Submitted!</div>
            <p style={{ fontSize: '.88rem', color: 'rgba(0,168,107,.8)', marginTop: 8 }}>
              Thank you for registering for <strong>{eventName}</strong>. You'll receive a confirmation email shortly with payment instructions and your ticket details.
            </p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 20, flexWrap: 'wrap' }}>
              <Link to={`/events/innoventure-club-26`} className="cp-btn cp-btn-green">← Back to Event</Link>
              <Link to="/" className="cp-btn cp-btn-ghost">Home</Link>
            </div>
          </div>
        ) : (
          <form className="cp-form" onSubmit={handleSubmit}>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: 4 }}>
              {eventName} – Ticket Registration
            </div>
            <div className="cp-form-group">
              <label className="cp-form-label">Full Name *</label>
              <input name="name" value={form.name} onChange={handleChange} required className="cp-form-input" placeholder="Your full name" />
            </div>
            <div className="cp-form-group">
              <label className="cp-form-label">Email Address *</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required className="cp-form-input" placeholder="your@email.com" />
            </div>
            <div className="cp-form-group">
              <label className="cp-form-label">Phone Number *</label>
              <input name="phone" value={form.phone} onChange={handleChange} required className="cp-form-input" placeholder="+92 300 0000000" />
            </div>
            <div className="cp-form-group">
              <label className="cp-form-label">City</label>
              <input name="city" value={form.city} onChange={handleChange} className="cp-form-input" placeholder="Lahore, Karachi, Islamabad..." />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div className="cp-form-group">
                <label className="cp-form-label">Ticket Tier *</label>
                <select name="tier" value={form.tier} onChange={handleChange} className="cp-form-select">
                  <option value="standard">Standard – PKR 45,000</option>
                  <option value="premium">Premium – PKR 85,000</option>
                  <option value="member">Member Rate – PKR 35,000</option>
                </select>
              </div>
              <div className="cp-form-group">
                <label className="cp-form-label">No. of Tickets *</label>
                <select name="tickets" value={form.tickets} onChange={handleChange} className="cp-form-select">
                  {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
            </div>
            <button type="submit" className="cp-form-submit">
              <i className="fas fa-ticket-alt" style={{ marginRight: 8 }}></i>
              Confirm Ticket Request
            </button>
            <p style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.3)', textAlign: 'center' }}>
              By submitting, you agree to our{' '}
              <Link to={`/terms/${eventSlug}`} style={{ color: 'var(--accent)' }}>Terms &amp; Conditions</Link>.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
