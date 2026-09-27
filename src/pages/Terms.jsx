import { useParams, Link } from 'react-router-dom';

const eventNames = {
  'innoventure-club-26': 'Innoventure Club 26',
  'innoventure-club-25': 'Innoventure Club 25',
  'innoventure-club-24': 'Innoventure Club 24',
  'cpc-2024': 'CPC 2024',
};

export default function Terms() {
  const { eventSlug } = useParams();
  const eventName = eventSlug ? (eventNames[eventSlug] || eventSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())) : 'Connected Pakistan';

  const sections = [
    {
      icon: 'fa-ticket-alt', title: '1. Registration & Tickets',
      content: 'All ticket purchases are final and non-transferable without prior written consent from Connected Pakistan. Tickets are personal to the registered attendee and may not be resold or transferred to third parties. In case of a no-show, no refund will be issued.',
    },
    {
      icon: 'fa-undo', title: '2. Refund Policy',
      content: 'Full refund is available up to 30 days before the event date. A 50% refund is available 15–30 days before the event. No refunds are issued within 15 days of the event. In case of event cancellation by Connected Pakistan, a full refund will be issued within 14 business days.',
    },
    {
      icon: 'fa-camera', title: '3. Photography & Media',
      content: 'By attending this event, you consent to being photographed, filmed, and recorded. These recordings may be used by Connected Pakistan for promotional, marketing, and documentary purposes without any compensation to attendees. If you wish to opt out of photography, please notify our team at registration.',
    },
    {
      icon: 'fa-shield-alt', title: '4. Code of Conduct',
      content: 'All attendees are expected to maintain respectful and professional conduct at all times. Harassment, discrimination, or disruptive behavior of any kind will result in immediate removal from the event without refund. Connected Pakistan reserves the right to refuse entry or remove any person at its discretion.',
    },
    {
      icon: 'fa-leaf', title: '5. Environmental Policy',
      content: 'Connected Pakistan is committed to environmental responsibility. All events operate under a zero-single-use-plastic policy. Attendees are expected to respect the natural environment, especially at outdoor venues like Utror Valley and Fairy Meadows. Littering may result in removal from the event.',
    },
    {
      icon: 'fa-lock', title: '6. Privacy Policy',
      content: 'By registering for this event, you agree to Connected Pakistan\'s Privacy Policy. Your personal data will be used solely for event management, communications about Connected Pakistan events, and improving our services. We will never sell your data to third parties.',
    },
    {
      icon: 'fa-exclamation-triangle', title: '7. Liability Disclaimer',
      content: 'Connected Pakistan is not responsible for any personal injury, loss, or damage to personal property during the event. Attendees participate in outdoor activities (trekking, adventure) at their own risk. A medical team is on-site, but attendees with pre-existing conditions must disclose these at registration.',
    },
    {
      icon: 'fa-gavel', title: '8. Governing Law',
      content: 'These terms and conditions are governed by the laws of Pakistan. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Islamabad, Pakistan.',
    },
  ];

  return (
    <div className="cp-util-page">
      <div className="cp-util-hero">
        <div className="cp-util-hero-inner">
          <div style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>
            <i className="fas fa-file-alt" style={{ marginRight: 6 }}></i>Legal
          </div>
          <h1>Terms &amp; Conditions</h1>
          {eventSlug && (
            <p>Terms and conditions for <strong style={{ color: '#fff' }}>{eventName}</strong>.</p>
          )}
        </div>
      </div>

      <div className="cp-terms-body">
        <div style={{
          background: 'rgba(0,168,107,.06)', border: '1px solid rgba(0,168,107,.15)',
          borderRadius: 12, padding: '16px 20px', marginBottom: 32,
          fontSize: '.85rem', color: 'rgba(255,255,255,.6)',
        }}>
          <i className="fas fa-info-circle" style={{ color: 'var(--accent)', marginRight: 8 }}></i>
          Last updated: January 1, 2026. These terms apply to all Connected Pakistan events including {eventName}.
        </div>

        {sections.map((s, i) => (
          <div key={i} className="cp-terms-section">
            <h2><i className={`fas ${s.icon}`}></i>{s.title}</h2>
            <p>{s.content}</p>
          </div>
        ))}

        <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,.07)', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link to={eventSlug ? `/get-tickets/${eventSlug}` : '/membership'} className="cp-btn cp-btn-green">
            <i className="fas fa-ticket-alt"></i>
            Get Tickets
          </Link>
          <Link to="/" className="cp-btn cp-btn-ghost">← Home</Link>
        </div>
      </div>
    </div>
  );
}
