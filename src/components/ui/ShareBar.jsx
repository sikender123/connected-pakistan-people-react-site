import { useState } from 'react';

export default function ShareBar({ title = '' }) {
  const [copied, setCopied] = useState(false);

  const getUrl = () => encodeURIComponent(window.location.href);
  const getTitle = () => encodeURIComponent(title || document.title);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const shares = [
    {
      label: 'Facebook',
      icon: 'fab fa-facebook-f',
      className: 'cp-share-fb',
      href: () => `https://www.facebook.com/sharer/sharer.php?u=${getUrl()}`,
    },
    {
      label: 'X / Twitter',
      icon: 'fab fa-x-twitter',
      className: 'cp-share-x',
      href: () => `https://twitter.com/intent/tweet?url=${getUrl()}&text=${getTitle()}`,
    },
    {
      label: 'LinkedIn',
      icon: 'fab fa-linkedin-in',
      className: 'cp-share-li',
      href: () => `https://www.linkedin.com/sharing/share-offsite/?url=${getUrl()}`,
    },
    {
      label: 'WhatsApp',
      icon: 'fab fa-whatsapp',
      className: 'cp-share-wa',
      href: () => `https://wa.me/?text=${getTitle()}%20${getUrl()}`,
    },
    {
      label: 'Telegram',
      icon: 'fab fa-telegram-plane',
      className: 'cp-share-tg',
      href: () => `https://t.me/share/url?url=${getUrl()}&text=${getTitle()}`,
    },
    {
      label: 'Reddit',
      icon: 'fab fa-reddit-alien',
      className: 'cp-share-rd',
      href: () => `https://www.reddit.com/submit?url=${getUrl()}&title=${getTitle()}`,
    },
    {
      label: 'Email',
      icon: 'fas fa-envelope',
      className: 'cp-share-em',
      href: () => `mailto:?subject=${getTitle()}&body=${getUrl()}`,
    },
  ];

  return (
    <div className="cp-share-bar">
      <div className="cp-share-title">
        <i className="fas fa-share-alt"></i>
        Share This Event
      </div>
      <div className="cp-share-buttons">
        {shares.map((s) => (
          <a
            key={s.label}
            href={s.href()}
            target={s.label === 'Email' ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className={`cp-share-btn ${s.className}`}
            aria-label={`Share on ${s.label}`}
          >
            <i className={s.icon}></i>
            {s.label}
          </a>
        ))}
        <button
          className="cp-share-btn cp-share-copy"
          onClick={handleCopy}
          aria-label="Copy link to clipboard"
        >
          <i className={`fas fa-${copied ? 'check' : 'link'}`}></i>
          {copied ? '✔ Copied!' : 'Copy Link'}
        </button>
      </div>
    </div>
  );
}
