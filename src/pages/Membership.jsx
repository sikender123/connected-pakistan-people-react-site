import { useState } from 'react';
import { Link } from 'react-router-dom';

const benefits = [
  { icon: 'fa-ticket-alt', text: '25% discount on all event tickets' },
  { icon: 'fa-users', text: 'Access to exclusive member-only events' },
  { icon: 'fa-hands-helping', text: '1-on-1 mentorship sessions' },
  { icon: 'fa-network-wired', text: 'Private networking community' },
  { icon: 'fa-star', text: 'Priority seating at all CPC events' },
  { icon: 'fa-gift', text: 'Exclusive Connected Pakistan merchandise' },
];

export default function Membership() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', role: '', tier: 'standard', why: '' });

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
            <i className="fas fa-id-card" style={{ marginRight: 6 }}></i>Membership
          </div>
          <h1>Become a Member</h1>
          <p>Join Pakistan's most exclusive network of entrepreneurs, investors, and innovators.</p>
        </div>
      </div>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '40px 40px 0' }}>
        {/* Benefits */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: 20 }}>Member Benefits</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            {benefits.map((b, i) => (
              <div key={i} style={{
                background: 'var(--card-bg)', border: '1px solid rgba(255,255,255,.07)',
                borderRadius: 12, padding: '16px 20px',
                display: 'flex', alignItems: 'center', gap: 12,
              }}>
                <div style={{
                  width: 38, height: 38, borderRadius: 10,
                  background: 'rgba(0,168,107,.1)', border: '1px solid rgba(0,168,107,.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <i className={`fas ${b.icon}`} style={{ color: 'var(--accent)', fontSize: '.85rem' }}></i>
                </div>
                <span style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.7)' }}>{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cp-form-section">
        {submitted ? (
          <div className="cp-success-msg">
            <i className="fas fa-check-circle" style={{ fontSize: '2rem', display: 'block', marginBottom: 12 }}></i>
            <div style={{ fontSize: '1.1rem', marginBottom: 8 }}>Application Submitted!</div>
            <p style={{ fontSize: '.88rem', color: 'rgba(0,168,107,.8)', marginTop: 8 }}>
              Thank you for applying to become a Connected Pakistan member. Our team will review your application and get back to you within 3–5 business days.
            </p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 20 }}>
              <Link to="/" className="cp-btn cp-btn-green">← Back to Home</Link>
            </div>
          </div>
        ) : (
          <form className="cp-form" onSubmit={handleSubmit}>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: 4 }}>
              Membership Application
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
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div className="cp-form-group">
                <label className="cp-form-label">Company / Organization</label>
                <input name="company" value={form.company} onChange={handleChange} className="cp-form-input" placeholder="Your company name" />
              </div>
              <div className="cp-form-group">
                <label className="cp-form-label">Your Role</label>
                <input name="role" value={form.role} onChange={handleChange} className="cp-form-input" placeholder="Founder, CEO, Investor..." />
              </div>
            </div>
            <div className="cp-form-group">
              <label className="cp-form-label">Membership Tier *</label>
              <select name="tier" value={form.tier} onChange={handleChange} className="cp-form-select">
                <option value="standard">Standard – PKR 25,000/year</option>
                <option value="premium">Premium – PKR 75,000/year</option>
                <option value="corporate">Corporate – PKR 200,000/year</option>
              </select>
            </div>
            <div className="cp-form-group">
              <label className="cp-form-label">Why do you want to join Connected Pakistan?</label>
              <textarea name="why" value={form.why} onChange={handleChange} className="cp-form-textarea" placeholder="Tell us about yourself and why you want to become a member..." />
            </div>
            <button type="submit" className="cp-form-submit">
              <i className="fas fa-id-card" style={{ marginRight: 8 }}></i>
              Submit Application
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
