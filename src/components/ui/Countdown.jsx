import { useState, useEffect, useRef } from 'react';

function getTimeLeft(targetIso) {
  const target = new Date(targetIso).getTime();
  const now = Date.now();
  const diff = target - now;
  if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0, ended: true };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, mins, secs, ended: false };
}

export default function Countdown({ dateIso }) {
  const [time, setTime] = useState(getTimeLeft(dateIso));
  const intervalRef = useRef(null);

  useEffect(() => {
    setTime(getTimeLeft(dateIso));
    intervalRef.current = setInterval(() => {
      const t = getTimeLeft(dateIso);
      setTime(t);
      if (t.ended) clearInterval(intervalRef.current);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [dateIso]);

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <div className={`cp-countdown${time.ended ? ' ended' : ''}`}>
      <div className="cp-countdown-inner">
        <div className="cp-countdown-label">
          <i className={`fas fa-hourglass-half${!time.ended ? ' pulse' : ''}`}></i>
          {time.ended ? 'Event Has Started' : 'Event Starts In'}
        </div>
        <div className="cp-countdown-units">
          {[
            { value: pad(time.days), label: 'Days' },
            { value: ':', colon: true },
            { value: pad(time.hours), label: 'Hours' },
            { value: ':', colon: true },
            { value: pad(time.mins), label: 'Mins' },
            { value: ':', colon: true },
            { value: pad(time.secs), label: 'Secs' },
          ].map((u, i) =>
            u.colon ? (
              <span key={i} className="cp-countdown-colon">:</span>
            ) : (
              <div key={i} className="cp-countdown-unit">
                <div className="cp-countdown-digit">{u.value}</div>
                <div className="cp-countdown-unit-label">{u.label}</div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
