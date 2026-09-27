import { useState } from 'react';

export default function SocialOrganizerRow({ event }) {
  const [likes, setLikes] = useState(event.likes || 0);
  const [liked, setLiked] = useState(false);
  const socials = event.socialLinks || {};

  const handleLike = () => {
    if (!liked) {
      setLikes(l => l + 1);
      setLiked(true);
    }
  };

  return (
    <div className="cp-social-row">
      <div className="cp-social-row-inner">
        {/* Social Icons */}
        <div className="cp-social-icons">
          {socials.facebook && (
            <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="cp-social-btn cp-social-fb" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
          )}
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

        {/* Like & Views */}
        <div className="cp-action-pills">
          <button
            className="cp-like-btn"
            onClick={handleLike}
            disabled={liked}
            aria-label={liked ? 'Liked' : 'Like this event'}
          >
            <i className="fas fa-heart"></i>
            {likes.toLocaleString()}
          </button>
          <div className="cp-views-pill">
            <i className="fas fa-eye"></i>
            {(event.views || 0).toLocaleString()} views
          </div>
        </div>

        {/* Organizer */}
        <div className="cp-organizer-block">
          <div className="cp-organizer-label">Organized by</div>
          <div className="cp-organizer-name">{event.organizer}</div>
        </div>
      </div>
    </div>
  );
}
