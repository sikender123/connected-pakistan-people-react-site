import { useState } from 'react';

export default function ChipsBar({ event }) {
  const [likes, setLikes] = useState(event.likes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLikes(l => l + 1);
      setLiked(true);
    }
  };

  return (
    <div className="cp-chips-bar">
      <div className="cp-chips-inner">
        <span className="cp-chip cp-chip-date">
          <i className="fas fa-calendar-alt"></i>
          {event.dateShort}
        </span>
        <span className="cp-chip cp-chip-category">
          <i className="fas fa-folder"></i>
          {event.category}
        </span>
        {event.tier && (
          <span className="cp-chip cp-chip-tier">
            <i className="fas fa-ticket-alt"></i>
            {event.tier}
          </span>
        )}
        <span className="cp-chip cp-chip-paid">
          <i className="fas fa-ticket-alt"></i>
          {event.isPaid ? 'Paid' : 'Free'}
        </span>
        <span className="cp-chip cp-chip-stat">
          <i className="fas fa-eye"></i>
          {event.views?.toLocaleString()}
        </span>
        <button
          className="cp-chip cp-chip-likes"
          onClick={handleLike}
          disabled={liked}
          style={{ cursor: liked ? 'default' : 'pointer', border: 'none', fontFamily: 'Poppins, sans-serif' }}
        >
          <i className="fas fa-heart"></i>
          {likes?.toLocaleString()}
        </button>
      </div>
    </div>
  );
}
