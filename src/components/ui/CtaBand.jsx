import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode';

export default function CtaBand({ event }) {
  const canvasRef = useRef(null);
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const slug = event.eventSlug || event.slug || 'event';
  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, pageUrl || 'https://people.connectedpakistan.pk', {
        width: 140,
        margin: 2,
        color: { dark: '#050d1f', light: '#ffffff' },
      }).catch(() => {});
    }
  }, [pageUrl]);

  return (
    <>
      <div className="cp-cta-band">
        {/* Left */}
        <div className="cp-cta-left">
          <div className="cp-cta-title">{event.title}</div>
          <div className="cp-cta-meta">
            <span className="cp-cta-meta-pill"><i className="fas fa-calendar-alt"></i>{event.dateShort || event.date}</span>
            <span className="cp-cta-meta-pill"><i className="fas fa-clock"></i>{event.time}</span>
            <span className="cp-cta-meta-pill"><i className="fas fa-map-marker-alt"></i>{event.location}</span>
          </div>
          <div className="cp-cta-btn-grid">
            {event.isPaid && (
              <Link to={`/get-tickets/${slug}`} className="cp-btn cp-btn-blue">
                <i className="fas fa-ticket-alt"></i> Get Tickets
              </Link>
            )}
            <Link to="/membership" className="cp-btn cp-btn-amber">
              <i className="fas fa-id-card"></i> Become a Member
            </Link>
            <Link to={`/terms/${slug}`} className="cp-btn cp-btn-slate">
              <i className="fas fa-file-alt"></i> Terms &amp; Conditions
            </Link>
          </div>
        </div>

        {/* Right QR Panel */}
        <div className="cp-qr-panel" onClick={() => setQrModalOpen(true)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setQrModalOpen(true)} aria-label="Open QR code">
          <div className="cp-qr-label">
            <i className="fas fa-qrcode"></i>
            Event QR Code
          </div>
          <div className="cp-qr-box">
            <canvas ref={canvasRef} />
          </div>
          <div className="cp-qr-caption">Scan to open this event</div>
        </div>
      </div>

      {qrModalOpen && (
        <QrModal url={pageUrl} onClose={() => setQrModalOpen(false)} />
      )}
    </>
  );
}

function QrModal({ url, onClose }) {
  const canvasRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, url || 'https://people.connectedpakistan.pk', {
        width: 260,
        margin: 2,
        color: { dark: '#050d1f', light: '#ffffff' },
      }).catch(() => {});
    }
  }, [url]);

  const handleCopy = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="cp-qr-modal" onClick={onClose} role="dialog" aria-modal="true">
      <div className="cp-qr-modal-inner" onClick={(e) => e.stopPropagation()}>
        <button className="cp-lightbox-close" onClick={onClose} style={{position:'relative',top:'auto',right:'auto',marginLeft:'auto'}} aria-label="Close">
          <i className="fas fa-times"></i>
        </button>
        <div className="cp-qr-modal-title">Event QR Code</div>
        <div className="cp-qr-box">
          <canvas ref={canvasRef} />
        </div>
        <p style={{fontSize:'.75rem', color:'rgba(255,255,255,.4)', textAlign:'center'}}>Scan to open this event page</p>
        <button className="cp-btn cp-btn-ghost" onClick={handleCopy} style={{width:'100%', justifyContent:'center'}}>
          <i className={`fas fa-${copied ? 'check' : 'copy'}`}></i>
          {copied ? '✔ Copied!' : 'Copy Link'}
        </button>
      </div>
    </div>
  );
}
