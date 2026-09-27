export default function BannerHero({ title, heroImage }) {
  return (
    <div
      className="cp-banner"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="cp-banner-overlay" />
      <div className="cp-banner-gradient" />
      <div className="cp-banner-content">
        <h1>{title}</h1>
      </div>
    </div>
  );
}
