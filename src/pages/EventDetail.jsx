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
import { ic26 } from '../data/eventData';

export default function EventDetail() {
  const event = ic26;

  return (
    <>
      <BannerHero title={event.title} heroImage={event.heroImage} />
      <ChipsBar event={event} />
      <InfoBar event={event} />
      <SpecialActivityStrip activity={event.specialActivity} />
      <Countdown dateIso={event.dateIso} />
      <SocialOrganizerRow event={event} />

      {/* Top Logo Strip */}
      <div className="cp-section-wrap">
        <LogoStrip logos={event.sponsorLogosTop} label="Partners & Sponsors" />
      </div>

      {/* Main Content */}
      <div className="cp-event-content">
        <p className="cp-bio">{event.bio}</p>
        <h2 className="cp-content-title">{event.contentTitle}</h2>
        <div
          className="cp-rich-content"
          dangerouslySetInnerHTML={{ __html: event.description }}
        />
        <ExpAccordion items={event.accordionItems} eventSlug={event.slug} />
      </div>

      {/* Speakers */}
      <div className="cp-section-wrap">
        <PeopleGrid people={event.speakers} title="Speakers" icon="fa-microphone" />
      </div>

      {/* Attendees */}
      <div className="cp-section-wrap">
        <PeopleGrid people={event.attendees} title="Attendees" icon="fa-users" />
      </div>

      {/* Video Gallery */}
      <div className="cp-section-wrap">
        <VideoGallery videos={event.videos} />
      </div>

      {/* CTA Band */}
      <div className="cp-section-wrap">
        <CtaBand event={event} />
      </div>

      {/* Share Bar */}
      <div className="cp-section-wrap">
        <ShareBar title={event.title} />
      </div>

      {/* Bottom Logo Strip */}
      <div className="cp-section-wrap">
        <LogoStrip logos={event.sponsorLogosBottom} label="Media Partners" />
      </div>
    </>
  );
}
