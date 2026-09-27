import { cpcEditions } from '../data/siteData';
import HubGrid from '../components/ui/HubGrid';

export default function AllCpc() {
  const items = cpcEditions.map(e => ({
    to: `/cpc/${e.slug}`,
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
          <h1>All CPC Editions</h1>
          <p>Browse all editions of the Connected Pakistan Conference — Pakistan's premier annual leadership summit.</p>
        </div>
      </div>
      <HubGrid items={items} />
    </div>
  );
}
