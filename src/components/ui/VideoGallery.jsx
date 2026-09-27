import { useState, useEffect } from 'react';
import VideoLightbox from './VideoLightbox';

function VideoItem({ video, onPlay }) {
  const [thumbSrc, setThumbSrc] = useState(`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`);
  const [title, setTitle] = useState(video.title || '');

  useEffect(() => {
    if (!video.title && video.id) {
      fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${video.id}&format=json`)
        .then(r => r.json())
        .then(d => setTitle(d.title || ''))
        .catch(() => {});
    }
  }, [video.id, video.title]);

  return (
    <div className="cp-video-item" onClick={onPlay} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onPlay()} aria-label={`Play video: ${title}`}>
      <div className="cp-video-thumb">
        <img
          src={thumbSrc}
          alt={title}
          loading="lazy"
          onError={() => setThumbSrc(`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`)}
        />
        <div className="cp-video-overlay">
          <div className="cp-play-btn">
            <i className="fas fa-play"></i>
          </div>
        </div>
        <div className="cp-video-badge">
          <i className="fab fa-youtube"></i>
          YouTube
        </div>
      </div>
      {title && <div className="cp-video-title">{title}</div>}
    </div>
  );
}

export default function VideoGallery({ videos = [] }) {
  const [activeVideo, setActiveVideo] = useState(null);

  if (!videos.length) return null;

  return (
    <section className="cp-section">
      <div className="cp-section-header">
        <i className="fas fa-play-circle"></i>
        <h2>Previous Videos</h2>
        <span className="count-badge">{videos.length}</span>
      </div>
      <div className="cp-video-grid">
        {videos.map((video, i) => (
          <VideoItem key={i} video={video} onPlay={() => setActiveVideo(video)} />
        ))}
      </div>
      {activeVideo && (
        <VideoLightbox video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </section>
  );
}
