import { HELP_TITLE, HELP_CHAT_TITLE, HELP_CHAT_DESC, HELP_RELAX_TITLE, HELP_RELAX_DESC, HELP_COMMUNITY_TITLE, HELP_COMMUNITY_DESC } from '../../local';
import './HelpSection.css';

function HelpSection() {
  return (
    <section id="help" className="help-section">
      <div className="container">
        <h2 className="section-title">{HELP_TITLE}</h2>
        <div className="help-grid">
          <div className="help-card">
            <span className="help-icon"></span>
            <h3>{HELP_CHAT_TITLE}</h3>
            <p>{HELP_CHAT_DESC}</p>
          </div>
          <div className="help-card">
            <span className="help-icon"></span>
            <h3>{HELP_RELAX_TITLE}</h3>
            <p>{HELP_RELAX_DESC}</p>
          </div>
          <div className="help-card">
            <span className="help-icon"></span>
            <h3>{HELP_COMMUNITY_TITLE}</h3>
            <p>{HELP_COMMUNITY_DESC}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HelpSection;
