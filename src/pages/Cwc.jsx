import { cwcEditions } from '../data/siteData';
import HubGrid from '../components/ui/HubGrid';

export default function Cwc() {
  const items = cwcEditions.map(e => ({
    to: `/cwc/${e.slug}`,
    year: e.year,
    title: e.title,
    bio: e.bio,
    dateShort: e.dateShort,
    location: e.location,
    heroImage: e.heroImage,
  }));

  return (
    <div className="cp-hub-page">
      <div className="cp-hub-hero">
        <div className="cp-hub-hero-inner">
          <h1>Connected Women Conference</h1>
          <p>Celebrating and empowering Pakistan's most inspiring women leaders across business, technology, and social impact.</p>
        </div>
      </div>
      <HubGrid items={items} />
    </div>
  );
}
