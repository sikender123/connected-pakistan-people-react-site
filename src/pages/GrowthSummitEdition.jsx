import { useParams } from 'react-router-dom';
import { growthSummit, sponsorLogos } from '../data/siteData';
import BannerHero from '../components/ui/BannerHero';
import ChipsBar from '../components/ui/ChipsBar';
import InfoBar from '../components/ui/InfoBar';
import Countdown from '../components/ui/Countdown';
import SocialOrganizerRow from '../components/ui/SocialOrganizerRow';
import LogoStrip from '../components/ui/LogoStrip';
import ExpAccordion from '../components/ui/ExpAccordion';
import PeopleGrid from '../components/ui/PeopleGrid';
import CtaBand from '../components/ui/CtaBand';
import ShareBar from '../components/ui/ShareBar';
import NotFound from './NotFound';

export default function GrowthSummitEdition() {
  const { season } = useParams();
  const event = growthSummit.find(s => s.season === season);
  if (!event) return <NotFound />;

  const eventForComponents = {
    ...event,
    slug: `growth-summit-${event.season}`,
    eventSlug: `growth-summit-${event.season}`,
    dateShort: event.dateShort,
  };

  return (
    <>
      <BannerHero title={event.title} heroImage={event.heroImage} />
      <ChipsBar event={eventForComponents} />
      <InfoBar event={eventForComponents} />
      {event.dateIso && <Countdown dateIso={event.dateIso} />}
      <SocialOrganizerRow event={event} />
      <div className="cp-section-wrap">
        <LogoStrip logos={sponsorLogos.top} label="Partners & Sponsors" />
      </div>
      <div className="cp-event-content">
        <p className="cp-bio">{event.bio}</p>
        <div className="cp-rich-content" dangerouslySetInnerHTML={{ __html: event.description }} />
        {event.accordionItems && (
          <ExpAccordion items={event.accordionItems} eventSlug={`growth-summit-${event.season}`} />
        )}
      </div>
      <div className="cp-section-wrap">
        <PeopleGrid people={event.speakers || []} title="Speakers" icon="fa-microphone" />
      </div>
      <div className="cp-section-wrap">
        <CtaBand event={eventForComponents} />
      </div>
      <div className="cp-section-wrap">
        <ShareBar title={event.title} />
      </div>
    </>
  );
}
