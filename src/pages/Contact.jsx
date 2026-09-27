import { useState } from 'react';
import { Link } from 'react-router-dom';

const contactInfo = [
  { icon: 'fa-map-marker-alt', label: 'Head Office', value: 'Lahore, Punjab, Pakistan' },
  { icon: 'fa-envelope', label: 'Email', value: 'hello@connectedpakistan.pk', href: 'mailto:hello@laravelwithasad@gmail.com.pk' },
  { icon: 'fa-phone', label: 'Phone', value: '+92 300 444 7095', href: 'tel:+923057773703' },
  { icon: 'fa-whatsapp fab', label: 'WhatsApp', value: '+92 305 777 3703', href: 'https://wa.me/923057773703' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

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
            <i className="fas fa-envelope" style={{ marginRight: 6 }}></i>Get in Touch
          </div>
          <h1>Contact Us</h1>
          <p>Have a question or want to partner with us? We'd love to hear from you.</p>
        </div>
      </div>

      <div style={{ maxWidth: 1000, margin: '48px auto', padding: '0 40px', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 40 }}>
        {/* Info */}
        <div>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#a44d4d', marginBottom: 20 }}>Contact Information</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
            {contactInfo.map((c, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 10, flexShrink: 0,
                  background: 'rgba(0,168,107,.1)', border: '1px solid rgba(0,168,107,.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <i className={`fas ${c.icon}`} style={{ color: 'var(--accent)' }}></i>
                </div>
                <div>
                  <div style={{ fontSize: '.65rem', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.35)', marginBottom: 3 }}>{c.label}</div>
                  {c.href ? (
                    <a href={c.href} target={c.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" style={{ fontSize: '.9rem', fontWeight: 600, color: '#a44d4d', textDecoration: 'none' }}>
                      {c.value}
                    </a>
                  ) : (
                    <div style={{ fontSize: '.9rem', fontWeight: 600, color: '#a44d4d' }}>{c.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social */}
          <h3 style={{ fontSize: '.9rem', fontWeight: 700, color: '#a44d4d', marginBottom: 14 }}>Follow Us</h3>
          <div style={{ display: 'flex', gap: 10 }}>
            <a href="https://www.facebook.com/asad.shabbir.944/" target="_blank" rel="noopener noreferrer" className="cp-social-btn cp-social-fb" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
             <a
    href="https://wa.me/923057773703"
    target="_blank"
    rel="noopener noreferrer"
    className="cp-social-btn cp-social-wa"
    style={{ width: 32, height: 32, fontSize: '.8rem' }}
    aria-label="WhatsApp"
  >
    <i className="fab fa-whatsapp"></i>
  </a>   
  <a
    href="mailto:laravelwithasad@gmail.com"
    className="cp-social-btn cp-social-gm"
    style={{ width: 32, height: 32, fontSize: '.8rem' }}
    aria-label="Gmail"
  >
    <i className="fas fa-envelope"></i>
  </a>

          </div>
        </div>

        {/* Form */}
        <div>
          {submitted ? (
            <div className="cp-success-msg">
              <i className="fas fa-check-circle" style={{ fontSize: '2rem', display: 'block', marginBottom: 12 }}></i>
              <div style={{ fontSize: '1.1rem', marginBottom: 8 }}>Message Sent!</div>
              <p style={{ fontSize: '.88rem', color: 'rgba(0,168,107,.8)', marginTop: 8 }}>
                Thank you for reaching out! We'll get back to you within 24–48 hours.
              </p>
              <button className="cp-btn cp-btn-ghost" onClick={() => setSubmitted(false)} style={{ marginTop: 16 }}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="cp-form" onSubmit={handleSubmit}>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '', marginBottom: 4 }}>Send a Message</div>
              <div className="cp-form-group">
                <label className="cp-form-label">Full Name *</label>
                <input name="name" value={form.name} onChange={handleChange} required className="cp-form-input" placeholder="Your name" />
              </div>
              <div className="cp-form-group">
                <label className="cp-form-label">Email *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required className="cp-form-input" placeholder="your@email.com" />
              </div>
              <div className="cp-form-group">
                <label className="cp-form-label">Subject *</label>
                <input name="subject" value={form.subject} onChange={handleChange} required className="cp-form-input" placeholder="What's this about?" />
              </div>
              <div className="cp-form-group">
                <label className="cp-form-label">Message *</label>
                <textarea name="message" value={form.message} onChange={handleChange} required className="cp-form-textarea" placeholder="Your message..." />
              </div>
              <button type="submit" className="cp-form-submit">
                <i className="fas fa-paper-plane" style={{ marginRight: 8 }}></i>
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
