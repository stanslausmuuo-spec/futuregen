import { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import Icon from '../components/Icon';
import ChatBubble from '../components/ChatBubble';
import { getQuickSuggestions } from '../data/aiEngine';

export default function AIVibeScreen({ isActive }) {
  const { chatMessages, sendMessage, isTyping, clearChat, navigate } = useApp();
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, isTyping]);

  useEffect(() => {
    const lastMsg = chatMessages[chatMessages.length - 1];
    if (lastMsg && lastMsg.sender === 'user') {
      setSuggestions(getQuickSuggestions(lastMsg.text, chatMessages));
      setShowSuggestions(false);
    } else if (chatMessages.length <= 1) {
      setShowSuggestions(true);
    }
  }, [chatMessages]);

  function handleSend() {
    if (input.trim()) {
      sendMessage(input.trim());
      setInput('');
      setShowSuggestions(false);
      setShowClearConfirm(false);
    }
  }

  function handleSuggestionClick(text) {
    sendMessage(text);
    setShowSuggestions(false);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function handleClearChat() {
    clearChat();
    setShowSuggestions(true);
    setShowClearConfirm(false);
  }

  const lastMessage = chatMessages[chatMessages.length - 1];
  const showInitialSuggestions = showSuggestions && chatMessages.length <= 1;

  return (
    <div id="aivibeScreen" className={`screen${isActive ? ' active' : ''}`}>
      <header className="chat-header">
        <div className="chat-back-btn" onClick={() => navigate('homeScreen')}>
          <Icon name="ArrowLeft" size={24} />
        </div>
        <div className="logo chat-logo-center">
          <h1 style={{ fontSize: 'clamp(22px, 5vw, 28px)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <Icon name="Sparkles" size={24} color="#00ffff" />
            AI Vibe
          </h1>
          <p className="ai-status">{isTyping ? 'typing...' : 'online'}</p>
        </div>
        <div className="chat-header-actions">
          {showClearConfirm ? (
            <div className="clear-confirm">
              <button className="btn-clear-confirm" onClick={handleClearChat}>Clear</button>
              <button className="btn-clear-cancel" onClick={() => setShowClearConfirm(false)}>Cancel</button>
            </div>
          ) : (
            <button className="icon-btn" onClick={() => setShowClearConfirm(true)} title="Clear chat">
              <Icon name="Eraser" size={18} color="#a0a0b0" />
            </button>
          )}
        </div>
      </header>

      <div className="scrollable-content chat-container" id="chatBox">
        {showInitialSuggestions && (
          <div className="welcome-section">
            <div className="welcome-icon">
              <Icon name="Sparkles" size={40} color="#00ffff" />
            </div>
            <h2 className="welcome-title">Your AI Assistant</h2>
            <p className="welcome-desc">
              Ask me anything. I can help with productivity, learning, coding, brainstorming, or just a good conversation.
            </p>
            <div className="quick-suggestions">
              {getQuickSuggestions().map((s, i) => (
                <button key={i} className="suggestion-chip" onClick={() => handleSuggestionClick(s)}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {chatMessages.map((msg, i) => (
          <ChatBubble key={i} message={msg} />
        ))}

        {isTyping && <ChatBubble isTyping />}

        {!isTyping && suggestions.length > 0 && !showInitialSuggestions && (
          <div className="quick-suggestions below-chat">
            {suggestions.map((s, i) => (
              <button key={i} className="suggestion-chip" onClick={() => handleSuggestionClick(s)}>
                {s}
              </button>
            ))}
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      <div className="chat-input-area">
        <input
          type="text"
          id="chatInput"
          placeholder="Ask anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isTyping}
        />
        <button className="send-btn" onClick={handleSend} disabled={isTyping || !input.trim()}>
          <Icon name="ArrowRight" size={20} color="#000" />
        </button>
      </div>
    </div>
  );
}
