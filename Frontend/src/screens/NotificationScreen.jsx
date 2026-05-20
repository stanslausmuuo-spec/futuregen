import Icon from '../components/Icon';
import { useApp } from '../context/AppContext';

export default function NotificationScreen({ isActive }) {
  const { navigate, notifications, setNotifications } = useApp();

  const unreadCount = notifications.filter((n) => !n.read).length;

  function toggleRead(id) {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: !n.read } : n))
    );
  }

  function markAllRead() {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }

  function clearAll() {
    setNotifications([]);
  }

  return (
    <div id="notificationScreen" className={`screen${isActive ? ' active' : ''}`}>
      <header className="chat-header">
        <div className="chat-back-btn" onClick={() => navigate('homeScreen')} title="Back">
          <Icon name="ArrowLeft" size={24} />
        </div>
        <div className="chat-logo-center">
          <h1 style={{ fontSize: 'clamp(22px, 5vw, 28px)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <Icon name="Bell" size={24} color="#00ffff" />
            Notifications
          </h1>
          {unreadCount > 0 && <span className="notif-subtitle">{unreadCount} unread</span>}
        </div>
        <div className="chat-header-actions">
          {unreadCount > 0 && (
            <span className="notif-action" onClick={markAllRead} title="Mark all read">
              <Icon name="CheckCheck" size={20} />
            </span>
          )}
        </div>
      </header>

      <div className="scrollable-content" style={{ paddingBottom: 'clamp(70px, 12vh, 90px)' }}>
        {notifications.length === 0 ? (
          <div className="messages-empty">
            <div className="messages-empty-icon">
              <Icon name="Bell" size={48} color="rgba(255,255,255,0.1)" />
            </div>
            <h3>All caught up!</h3>
            <p>No notifications yet. They will appear here when you get them.</p>
          </div>
        ) : (
          <>
            <div className="notif-actions-bar">
              <button className="notif-clear-all" onClick={clearAll}>Clear All</button>
            </div>
            {notifications.map((notif) => (
              <div
                key={notif.id}
                className={`notif-card${!notif.read ? ' unread' : ''}`}
                onClick={() => toggleRead(notif.id)}
              >
                <div className={`notif-icon ${notif.type}`}>
                  <Icon name={notif.icon} size={18} />
                </div>
                <div className="notif-content">
                  <div className="notif-top">
                    <h4>{notif.title}</h4>
                    <span className="notif-time">{notif.time}</span>
                  </div>
                  <p className="notif-message">{notif.message}</p>
                </div>
                {!notif.read && <span className="notif-unread-dot" />}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
