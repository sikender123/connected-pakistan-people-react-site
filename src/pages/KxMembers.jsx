import { kxData } from '../data/siteData';
import PeopleGrid from '../components/ui/PeopleGrid';

export default function KxMembers() {
  return (
    <div className="cp-hub-page">
      <div className="cp-hub-hero">
        <div className="cp-hub-hero-inner">
          <h1>KX Members Directory</h1>
          <p>Browse all members of KX Pakistan — our knowledge exchange community spanning major cities across Pakistan.</p>
        </div>
      </div>
      <div className="cp-section-wrap" style={{marginTop:40}}>
        <PeopleGrid
          people={kxData.members}
          title="All KX Members"
          icon="fa-address-book"
          paginate={true}
        />
      </div>
    </div>
  );
}
