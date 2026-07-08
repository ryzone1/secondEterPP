import { useState } from 'react';
import { HERO_TITLE, HERO_SUBTITLE, HERO_BTN_NEED_HELP, HERO_BTN_WANT_HELP, MODAL_GET_HELP, MODAL_OFFER_HELP } from '../../local';
import Modal from '../Modal/Modal';
import Chat from '../Chat/Chat';
import './Hero.css';

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  const openChatModal = (title: string) => {
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">{HERO_TITLE}</h1>
          <p className="hero-subtitle">{HERO_SUBTITLE}</p>
          <div className="hero-actions">
            <button
              className="btn btn-primary"
              onClick={() => openChatModal(MODAL_GET_HELP)}
            >
              {HERO_BTN_NEED_HELP}
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => openChatModal(MODAL_OFFER_HELP)}
            >
              {HERO_BTN_WANT_HELP}
            </button>
          </div>
        </div>
      </section>
      <Modal isOpen={isModalOpen} onClose={closeModal} title={modalTitle}>
        <Chat />
      </Modal>
    </>
  );
}

export default Hero;
