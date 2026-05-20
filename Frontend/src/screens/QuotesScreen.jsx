import { useState } from 'react';
import { useApp } from '../context/AppContext';
import Icon from '../components/Icon';
import { QUOTES } from '../data/mockData';

export default function QuotesScreen({ isActive }) {
  const { navigate, favourites, toggleFavourite } = useApp();
  const [query, setQuery] = useState('');

  const filtered = QUOTES.filter((q) => {
    const s = query.toLowerCase();
    return q.text.toLowerCase().includes(s) || q.author.toLowerCase().includes(s);
  });

  function isFav(item) {
    return favourites.some((f) => f.text === item.text && f.author === item.author);
  }

  return (
    <div id="quotesScreen" className={`screen${isActive ? ' active' : ''}`}>
      <div className="module-header" style={{ background: 'linear-gradient(135deg, #3f51b5, #9c27b0)' }}>
        <div className="module-back-btn" onClick={() => navigate('homeScreen')}>
          <Icon name="ArrowLeft" size={24} color="#fff" />
        </div>
        <div className="module-header-content">
          <Icon name="Lightbulb" size={28} color="#fff" />
          <h1>Motivational Quotes</h1>
        </div>
        <div className="module-search">
          <Icon name="Search" size={18} color="rgba(255,255,255,0.5)" />
          <input
            type="text"
            placeholder="Search quotes or authors..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <span className="module-search-clear" onClick={() => setQuery('')}>
              <Icon name="X" size={16} color="rgba(255,255,255,0.5)" />
            </span>
          )}
        </div>
      </div>
      <div className="scrollable-content" style={{ paddingBottom: 'clamp(70px, 12vh, 90px)' }}>
        {filtered.length === 0 ? (
          <div className="module-empty">No quotes match your search</div>
        ) : (
          filtered.map((q, i) => (
            <div key={i} className="quote-card">
              <div className="quote-text">{q.text}</div>
              <div className="quote-author">&mdash; {q.author}</div>
              <div className={`fav-btn${isFav(q) ? ' active' : ''}`} onClick={() => toggleFavourite(q)}>
                <Icon name="Heart" size={18} color={isFav(q) ? '#ff4081' : 'rgba(255,255,255,0.25)'} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
