import { useState } from 'react';
import { NOTIFICATION_TEXT } from '../../local';
import './Notification.css';

function Notification() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="notification-overlay">
      <div className="notification">
        <button className="notification-close" onClick={handleClose} aria-label="Закрыть уведомление">
          ✕
        </button>
        <p className="notification-text">{NOTIFICATION_TEXT}</p>
      </div>
    </div>
  );
}

export default Notification;
