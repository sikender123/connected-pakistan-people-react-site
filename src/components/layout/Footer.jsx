import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="cp-footer">
      <div className="cp-footer-inner">
        <div className="cp-footer-links">
          <Link to="/about" className="cp-footer-link">About</Link>
          <Link to="/contact" className="cp-footer-link">Contact</Link>
          <Link to="/terms" className="cp-footer-link">Terms</Link>
          <Link to="/membership" className="cp-footer-link">Membership</Link>
          <Link to="/people" className="cp-footer-link">People</Link>
          <Link to="/events/innoventure-club-26" className="cp-footer-link">Events</Link>
        </div>

        <div className="cp-footer-socials">
        <a href="https://www.facebook.com/asad.shabbir.944/" target="_blank" rel="noopener noreferrer" className="cp-social-btn cp-social-fb" style={{width:32,height:32,fontSize:'.8rem'}}>
  <i className="fab fa-facebook-f"></i>
</a>
        <a
    href="https://wa.me/923057773703"
    target="_blank"
    rel="noopener noreferrer"
    className="cp-social-btn cp-social-wa"
    style={{ width: 32, height: 32, fontSize: '.8rem' }}
    aria-label="WhatsApp"
  >
    <i className="fab fa-whatsapp"></i>
  </a>   
  <a
    href="mailto:laravelwithasad@gmail.com"
    className="cp-social-btn cp-social-gm"
    style={{ width: 32, height: 32, fontSize: '.8rem' }}
    aria-label="Gmail"
  >
    <i className="fas fa-envelope"></i>
  </a>
        </div>
        <p className="cp-footer-copyright">
          © 2015–{year} All Rights Reserved. @ Connected Pakistan
        </p>
      </div>
    </footer>
  );
}
