import type { NewsItem } from '../../data/news';
import { NEWS_TITLE, NEWS_EMPTY, NEWS_READ_MORE } from '../../local';
import './NewsSection.css';

interface NewsSectionProps {
  news: NewsItem[];
}

function NewsSection({ news }: NewsSectionProps) {
  if (!news || news.length === 0) {
    return (
      <section id="news" className="news-section">
        <div className="container">
          <h2 className="section-title">{NEWS_TITLE}</h2>
          <p style={{ textAlign: 'center', color: '#666', padding: '40px 0' }}>
            {NEWS_EMPTY}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="news" className="news-section">
      <div className="container">
        <h2 className="section-title">{NEWS_TITLE}</h2>
        <div className="news-grid">
          {news.map((item) => (
            <article key={item.id} className="news-card">
              <div className="news-image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="news-image"
                  loading="lazy"
                />
                <span className="news-category">{item.category}</span>
              </div>
              <div className="news-content">
                <span className="news-date">{item.date}</span>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-excerpt">{item.excerpt}</p>
                <a href="#" className="news-link">{NEWS_READ_MORE}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
