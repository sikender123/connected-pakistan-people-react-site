import { growthSummit } from '../data/siteData';
import HubGrid from '../components/ui/HubGrid';

export default function GrowthSummitHub() {
  const items = growthSummit.map(s => ({
    to: `/growth-summit/${s.season}`,
    year: `Season ${s.season}`,
    title: s.title,
    bio: s.bio,
    dateShort: s.dateShort,
    location: s.location,
    heroImage: s.heroImage,
  }));

  return (
    <div className="cp-hub-page">
      <div className="cp-hub-hero">
        <div className="cp-hub-hero-inner">
          <h1>Growth Summit</h1>
          <p>Pakistan's premier growth marketing summit helping startups and companies scale their user acquisition, retention, and revenue.</p>
        </div>
      </div>
      <HubGrid items={items} />
    </div>
  );
}
