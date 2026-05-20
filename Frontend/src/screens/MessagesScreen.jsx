import { useState, useRef, useEffect } from 'react';
import Icon from '../components/Icon';
import { useApp } from '../context/AppContext';

export default function MessagesScreen({ isActive }) {
  const { conversations, setConversations, showToast } = useApp();
  const [newMode, setNewMode] = useState(false);
  const [newContact, setNewContact] = useState('');
  const [deleteId, setDeleteId] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClick);
      return () => document.removeEventListener('mousedown', handleClick);
    }
  }, [menuOpen]);

  function handleStart() {
    const name = newContact.trim();
    if (!name) {
      showToast('Enter a contact name');
      return;
    }
    if (conversations.some((c) => c.contact.toLowerCase() === name.toLowerCase())) {
      showToast('Conversation already exists');
      return;
    }
    setConversations([
      {
        id: Date.now().toString(),
        contact: name,
        lastMsg: 'No messages yet',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
      ...conversations,
    ]);
    setNewContact('');
    setNewMode(false);
    showToast('Conversation started!');
  }

  return (
    <div id="messagesScreen" className={`screen${isActive ? ' active' : ''}`}>
      <header className="chat-header">
        <div className="logo">
          <h1 style={{ fontSize: 'clamp(22px, 5vw, 28px)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <Icon name="MessageSquare" size={24} color="#00ffff" />
            Messages
          </h1>
        </div>
        <div className="group-menu-container" ref={menuRef}>
          <button className="group-menu-btn" onClick={() => setMenuOpen((o) => !o)}>
            <Icon name="MoreVertical" size={20} />
          </button>
          {menuOpen && (
            <div className="group-dropdown">
              <button
                className="group-dropdown-item group-dropdown-danger"
                onClick={() => {
                  setMenuOpen(false);
                  if (conversations.length === 0) {
                    showToast('No conversations to clear');
                    return;
                  }
                  setConversations([]);
                  showToast('All conversations cleared');
                }}
              >
                <Icon name="Trash2" size={16} /> Clear All
              </button>
            </div>
          )}
        </div>
      </header>

      <div className="scrollable-content" style={{ paddingBottom: 'clamp(70px, 12vh, 90px)' }}>
        {newMode && (
          <div className="new-conversation-bar">
            <input
              type="text"
              placeholder="Enter contact name..."
              value={newContact}
              onChange={(e) => setNewContact(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleStart(); if (e.key === 'Escape') setNewMode(false); }}
              autoFocus
              className="new-conversation-input"
            />
            <button className="new-conv-btn" onClick={handleStart}>Start</button>
            <button className="new-conv-cancel" onClick={() => setNewMode(false)}>Cancel</button>
          </div>
        )}

        {conversations.length === 0 ? (
          <div className="messages-empty">
            <div className="messages-empty-icon">
              <Icon name="MessageSquare" size={48} color="rgba(255,255,255,0.1)" />
            </div>
            <h3>No conversations yet</h3>
            <p>Tap the + button to start a new conversation.</p>
          </div>
        ) : (
          conversations.map((conv) => (
            <div key={conv.id} className="conversation-card" onClick={() => { if (deleteId !== conv.id) showToast(`Chat with ${conv.contact} coming soon`); }}>
              <div className="conversation-avatar">
                <span>{conv.contact[0].toUpperCase()}</span>
              </div>
              <div className="conversation-info">
                <div className="conversation-top">
                  <h4>{conv.contact}</h4>
                  <span className="conversation-time">{conv.time}</span>
                </div>
                <p className="conversation-preview">{conv.lastMsg}</p>
              </div>
              {deleteId === conv.id ? (
                <div className="delete-confirm">
                  <button className="delete-yes" onClick={(e) => { e.stopPropagation(); setConversations(conversations.filter((c) => c.id !== conv.id)); setDeleteId(null); showToast('Conversation deleted'); }}>Delete</button>
                  <button className="delete-no" onClick={(e) => { e.stopPropagation(); setDeleteId(null); }}>Cancel</button>
                </div>
              ) : (
                <button className="conversation-delete" onClick={(e) => { e.stopPropagation(); setDeleteId(conv.id); }} title="Delete conversation">
                  <Icon name="Trash2" size={16} color="#ef4444" />
                </button>
              )}
            </div>
          ))
        )}
      </div>
      <button className="messages-fab" onClick={() => { setNewMode(true); setNewContact(''); }} title="New conversation">
        <Icon name="Plus" size={24} color="#000" />
      </button>
    </div>
  );
}
