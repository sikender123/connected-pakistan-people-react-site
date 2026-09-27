import { useParams } from 'react-router-dom';
import { innoventureEditions, sponsorLogos } from '../data/siteData';
import BannerHero from '../components/ui/BannerHero';
import ChipsBar from '../components/ui/ChipsBar';
import InfoBar from '../components/ui/InfoBar';
import SpecialActivityStrip from '../components/ui/SpecialActivityStrip';
import Countdown from '../components/ui/Countdown';
import SocialOrganizerRow from '../components/ui/SocialOrganizerRow';
import LogoStrip from '../components/ui/LogoStrip';
import ExpAccordion from '../components/ui/ExpAccordion';
import PeopleGrid from '../components/ui/PeopleGrid';
import VideoGallery from '../components/ui/VideoGallery';
import CtaBand from '../components/ui/CtaBand';
import ShareBar from '../components/ui/ShareBar';
import NotFound from './NotFound';

export default function InnoventureEdition() {
  const { edition } = useParams();
  const event = innoventureEditions.find(e => e.slug === edition);
  if (!event) return <NotFound />;

  return (
    <>
      <BannerHero title={event.title} heroImage={event.heroImage} />
      <ChipsBar event={event} />
      <InfoBar event={event} />
      {event.specialActivity && <SpecialActivityStrip activity={event.specialActivity} />}
      {event.dateIso && <Countdown dateIso={event.dateIso} />}
      <SocialOrganizerRow event={event} />
      <div className="cp-section-wrap">
        <LogoStrip logos={sponsorLogos.top} label="Partners & Sponsors" />
      </div>
      <div className="cp-event-content">
        <p className="cp-bio">{event.bio}</p>
        <div className="cp-rich-content" dangerouslySetInnerHTML={{ __html: event.description }} />
        {event.accordionItems && (
          <ExpAccordion items={event.accordionItems} eventSlug={event.eventSlug || `innoventure-club-${event.slug}`} />
        )}
      </div>
      <div className="cp-section-wrap">
        <PeopleGrid people={event.speakers} title="Speakers" icon="fa-microphone" />
      </div>
      <div className="cp-section-wrap">
        <PeopleGrid people={event.attendees} title="Attendees" icon="fa-users" />
      </div>
      {event.videos && (
        <div className="cp-section-wrap">
          <VideoGallery videos={event.videos} />
        </div>
      )}
      <div className="cp-section-wrap">
        <CtaBand event={event} />
      </div>
      <div className="cp-section-wrap">
        <ShareBar title={event.title} />
      </div>
      <div className="cp-section-wrap">
        <LogoStrip logos={sponsorLogos.bottom} label="Media Partners" />
      </div>
    </>
  );
}
