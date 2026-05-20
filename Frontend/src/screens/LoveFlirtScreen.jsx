import { useState } from 'react';
import { useApp } from '../context/AppContext';
import Icon from '../components/Icon';
import { LOVE_TIPS } from '../data/mockData';

export default function LoveFlirtScreen({ isActive }) {
  const { navigate } = useApp();
  const [query, setQuery] = useState('');

  const filtered = LOVE_TIPS.filter((t) => {
    const s = query.toLowerCase();
    return t.title.toLowerCase().includes(s) || t.desc.toLowerCase().includes(s);
  });

  return (
    <div id="loveFlirtScreen" className={`screen${isActive ? ' active' : ''}`}>
      <div className="module-header" style={{ background: 'linear-gradient(135deg, #ff4081, #c2185b)' }}>
        <div className="module-back-btn" onClick={() => navigate('homeScreen')}>
          <Icon name="ArrowLeft" size={24} color="#fff" />
        </div>
        <div className="module-header-content">
          <Icon name="Heart" size={28} color="#fff" />
          <h1>Love &amp; Flirt</h1>
          <span className="premium-badge">PREMIUM</span>
        </div>
        <div className="module-search">
          <Icon name="Search" size={18} color="rgba(255,255,255,0.5)" />
          <input
            type="text"
            placeholder="Search tips..."
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
        {query && filtered.length === 0 ? (
          <div className="module-empty">No tips match your search</div>
        ) : (
          filtered.slice(0, 3).map((t, i) => (
            <div key={i} className="love-card">
              <h4>{t.title}</h4>
              <p>{t.desc}</p>
            </div>
          ))
        )}
        <div className="premium-lock-banner">
          <Icon name="Lock" size={24} color="#ffd700" />
          <div>
            <strong>Premium Module</strong>
            <p>Unlock 15+ relationship tips and flirting techniques.</p>
          </div>
          <button className="premium-unlock-btn">Unlock</button>
        </div>
      </div>
    </div>
  );
}
