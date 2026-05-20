import Icon from './Icon';

function renderMarkdown(text) {
  if (!text) return null;

  const lines = text.split('\n');
  const elements = [];
  let inList = false;
  let listItems = [];

  function flushList() {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="chat-list">
          {listItems.map((item, i) => (
            <li key={i}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  }

  function renderInline(text) {
    const parts = [];
    const regex = /(\*\*(.+?)\*\*|`(.+?)`)/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }

      if (match[2]) {
        parts.push(<strong key={match.index}>{match[2]}</strong>);
      } else if (match[3]) {
        parts.push(
          <code key={match.index} className="chat-inline-code">
            {match[3]}
          </code>
        );
      }

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  }

  lines.forEach((line, i) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushList();
      elements.push(<div key={i} className="chat-line-break" />);
      return;
    }

    if (/^[-*]\s/.test(trimmed)) {
      inList = true;
      listItems.push(trimmed.replace(/^[-*]\s/, ''));
      return;
    }

    flushList();

    if (/^\*\*(.+)\*\*$/.test(trimmed)) {
      const content = trimmed.replace(/^\*\*(.+)\*\*$/, '$1');
      elements.push(
        <p key={i} className="chat-bold-line">
          {renderInline(content)}
        </p>
      );
    } else if (/^\d+\.\s/.test(trimmed)) {
      elements.push(
        <p key={i} className="chat-numbered-item">
          {renderInline(trimmed)}
        </p>
      );
    } else {
      elements.push(<p key={i}>{renderInline(trimmed)}</p>);
    }
  });

  flushList();
  return elements;
}

export default function ChatBubble({ message, isTyping }) {
  if (isTyping) {
    return (
      <div className="chat-bubble ai-msg typing-bubble">
        <div className="typing-indicator">
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }

  const isAI = message.sender === 'ai';

  return (
    <div className={`chat-message-wrapper ${isAI ? 'ai-wrapper' : 'user-wrapper'}`}>
      {isAI && (
        <div className="chat-avatar ai-avatar">
          <Icon name="Bot" size={16} color="#00ffff" />
        </div>
      )}
      <div className={`chat-bubble ${isAI ? 'ai-msg' : 'user-msg'}`}>
        <div className="chat-bubble-content">
          {isAI ? renderMarkdown(message.text) : message.text}
        </div>
        {message.timestamp && (
          <div className="chat-timestamp">{message.timestamp}</div>
        )}
      </div>
      {!isAI && (
        <div className="chat-avatar user-avatar">
          <Icon name="Crown" size={16} color="#ffd700" />
        </div>
      )}
    </div>
  );
}
