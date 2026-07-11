import { useState } from 'react';
import type { NewsItem } from '../../data/news';
import { NEWS_TITLE, NEWS_EMPTY, NEWS_READ_MORE } from '../../local';
import Modal from '../Modal/Modal';
import './NewsSection.css';

interface NewsSectionProps {
  news: NewsItem[];
}

function NewsSection({ news }: NewsSectionProps) {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (item: NewsItem) => {
    setSelectedNews(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedNews(null);
  };

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
    <>
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
                </div>
                <div className="news-content">
                  <span className="news-date">{item.date}</span>
                  <h3 className="news-title">{item.title}</h3>
                  <p className="news-excerpt">{item.excerpt}</p>
                  <span className="news-category">{item.category}</span>
                  <a 
                    href="#" 
                    className="news-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleOpenModal(item);
                    }}
                  >
                    {NEWS_READ_MORE}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={selectedNews?.title}>
        {selectedNews && (
          <div className="news-modal-content">
            <div className="news-modal-image">
              <img src={selectedNews.image} alt={selectedNews.title} />
            </div>
            <div className="news-modal-meta">
              <span className="news-modal-category">{selectedNews.category}</span>
              <span className="news-modal-date">{selectedNews.date}</span>
            </div>
            <div className="news-modal-fulltext">
              {selectedNews.fullText.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

export default NewsSection;
