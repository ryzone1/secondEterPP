import { FOOTER_BRAND_DESC, FOOTER_SECTIONS, FOOTER_HOME, FOOTER_HELP, FOOTER_NEWS, FOOTER_ABOUT, FOOTER_FAQ, FOOTER_RULES, FOOTER_PRIVACY, FOOTER_EMAIL, FOOTER_PHONE, FOOTER_COPYRIGHT } from '../../local';
import { HEADER_LOGO } from '../../local';
import './Footer.css';

function Footer() {
  return (
    <footer id="about" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-icon">❤️</span>
              <span className="logo-text">{HEADER_LOGO}</span>
            </div>
            <p className="footer-desc">{FOOTER_BRAND_DESC}</p>
          </div>
          <div className="footer-links">
            <h4>{FOOTER_SECTIONS}</h4>
            <ul>
              <li><a href="#hero">{FOOTER_HOME}</a></li>
              <li><a href="#help">{FOOTER_HELP}</a></li>
              <li><a href="#news">{FOOTER_NEWS}</a></li>
              <li><a href="#about">{FOOTER_ABOUT}</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>{FOOTER_HELP}</h4>
            <ul>
              <li><a href="#">{FOOTER_FAQ}</a></li>
              <li><a href="#">{FOOTER_RULES}</a></li>
              <li><a href="#">{FOOTER_PRIVACY}</a></li>
            </ul>
          </div>
          <div className="footer-contacts">
            <h4>{FOOTER_HELP}</h4>
            <ul>
              <li>{FOOTER_EMAIL}</li>
              <li>{FOOTER_PHONE}</li>
              <li className="footer-social">
                <a href="#" aria-label="Telegram"></a>
                <a href="#" aria-label="VK"></a>
                <a href="#" aria-label="YouTube">▶️</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{FOOTER_COPYRIGHT}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
