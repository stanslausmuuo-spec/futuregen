import { useState } from 'react';
import { useApp } from '../context/AppContext';
import Icon from '../components/Icon';
import { PSYCHOLOGY_FACTS } from '../data/mockData';

export default function PsychologyScreen({ isActive }) {
  const { navigate } = useApp();
  const [query, setQuery] = useState('');

  const filtered = PSYCHOLOGY_FACTS.filter((p) => {
    const s = query.toLowerCase();
    return p.title.toLowerCase().includes(s) || p.desc.toLowerCase().includes(s);
  });

  return (
    <div id="psychologyScreen" className={`screen${isActive ? ' active' : ''}`}>
      <div className="module-header" style={{ background: 'linear-gradient(135deg, #e91e63, #880e4f)' }}>
        <div className="module-back-btn" onClick={() => navigate('homeScreen')}>
          <Icon name="ArrowLeft" size={24} color="#fff" />
        </div>
        <div className="module-header-content">
          <Icon name="Brain" size={28} color="#fff" />
          <h1>Psychology / IQ</h1>
          <span className="premium-badge">PREMIUM</span>
        </div>
        <div className="module-search">
          <Icon name="Search" size={18} color="rgba(255,255,255,0.5)" />
          <input
            type="text"
            placeholder="Search topics..."
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
          <div className="module-empty">No topics match your search</div>
        ) : (
          filtered.slice(0, 3).map((p, i) => (
            <div key={i} className="psychology-card">
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))
        )}
        <div className="premium-lock-banner">
          <Icon name="Lock" size={24} color="#ffd700" />
          <div>
            <strong>Premium Module</strong>
            <p>Unlock 15+ psychology concepts with deep explanations.</p>
          </div>
          <button className="premium-unlock-btn">Unlock</button>
        </div>
      </div>
    </div>
  );
}
