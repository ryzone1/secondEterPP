import { TIMELINE_TITLE, TIMELINE_ITEMS } from '../../local';
import './Timeline.css';

function Timeline() {
  return (
    <section id="timeline" className="timeline-section">
      <div className="container">
        <h2 className="section-title">{TIMELINE_TITLE}</h2>
        <div className="timeline">
          <div className="timeline-line"></div>
          {TIMELINE_ITEMS.map((item) => (
            <div key={item.id} className={`timeline-item ${item.completed ? 'completed' : ''}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-number">{String(item.id).padStart(2, '0')}</span>
                <p className="timeline-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
