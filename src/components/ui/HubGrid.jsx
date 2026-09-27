import EditionCard from './EditionCard';

export default function HubGrid({ items = [] }) {
  return (
    <div className="cp-hub-grid">
      {items.map((item, i) => (
        <EditionCard
          key={i}
          to={item.to}
          year={item.year || item.season}
          title={item.title}
          description={item.description || item.bio}
          date={item.dateShort || item.date}
          location={item.location}
          image={item.heroImage || item.image}
        />
      ))}
    </div>
  );
}
