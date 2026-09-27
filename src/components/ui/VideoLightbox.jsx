import { useEffect, useRef } from 'react';

export default function VideoLightbox({ video, onClose }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') handleClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  const handleClose = () => {
    if (iframeRef.current) iframeRef.current.src = '';
    onClose();
  };

  return (
    <div className="cp-video-lightbox" onClick={handleClose} role="dialog" aria-modal="true" aria-label="Video player">
      <button className="cp-video-lightbox-close" onClick={handleClose} aria-label="Close video">
        <i className="fas fa-times"></i>
      </button>
      <div className="cp-video-lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <iframe
          ref={iframeRef}
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
          title={video.title || 'Video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
