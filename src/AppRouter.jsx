import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import EventDetail from './pages/EventDetail';
import AllCpc from './pages/AllCpc';
import CpcEdition from './pages/CpcEdition';
import InnoventureEdition from './pages/InnoventureEdition';
import Cwc from './pages/Cwc';
import CwcEdition from './pages/CwcEdition';
import KxHub from './pages/KxHub';
import KxLahore from './pages/KxLahore';
import KxMembers from './pages/KxMembers';
import ThirtyUnderThirty from './pages/ThirtyUnderThirty';
import Awardees25 from './pages/Awardees25';
import Awardees26 from './pages/Awardees26';
import Speakers30U30 from './pages/Speakers30U30';
import Premium30U30 from './pages/Premium30U30';
import GrowthSummitHub from './pages/GrowthSummitHub';
import GrowthSummitEdition from './pages/GrowthSummitEdition';
import PersonProfile from './pages/PersonProfile';
import PeopleDirectory from './pages/PeopleDirectory';
import GetTickets from './pages/GetTickets';
import Membership from './pages/Membership';
import Terms from './pages/Terms';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Home */}
          <Route index element={<Home />} />

          {/* Flagship event */}
          <Route path="events/innoventure-club-26" element={<EventDetail />} />

          {/* All CPC */}
          <Route path="all-cpc" element={<AllCpc />} />
          <Route path="cpc/:slug" element={<CpcEdition />} />

          {/* Innoventure Club */}
          <Route path="innoventure-club/:edition" element={<InnoventureEdition />} />

          {/* CWC */}
          <Route path="cwc" element={<Cwc />} />
          <Route path="cwc/:slug" element={<CwcEdition />} />

          {/* KX */}
          <Route path="kx" element={<KxHub />} />
          <Route path="kx/lahore" element={<KxLahore />} />
          <Route path="kx/members" element={<KxMembers />} />

          {/* 30 Under 30 */}
          <Route path="30under30" element={<ThirtyUnderThirty />} />
          <Route path="30under30/awardees-25" element={<Awardees25 />} />
          <Route path="30under30/awardees-26" element={<Awardees26 />} />
          <Route path="30under30/speakers" element={<Speakers30U30 />} />
          <Route path="30under30/premium" element={<Premium30U30 />} />

          {/* Growth Summit */}
          <Route path="growth-summit" element={<GrowthSummitHub />} />
          <Route path="growth-summit/:season" element={<GrowthSummitEdition />} />

          {/* People */}
          <Route path="people" element={<PeopleDirectory />} />
          <Route path="people/:slug" element={<PersonProfile />} />

          {/* Utility Pages */}
          <Route path="get-tickets/:eventSlug" element={<GetTickets />} />
          <Route path="membership" element={<Membership />} />
          <Route path="terms" element={<Terms />} />
          <Route path="terms/:eventSlug" element={<Terms />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
