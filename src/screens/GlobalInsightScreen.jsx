import { useState } from 'react';
import { useApp } from '../context/AppContext';
import Icon from '../components/Icon';
import { INSIGHTS } from '../data/mockData';

export default function GlobalInsightScreen({ isActive }) {
  const { navigate } = useApp();
  const [query, setQuery] = useState('');

  const filtered = INSIGHTS.filter((i) => {
    const s = query.toLowerCase();
    return i.title.toLowerCase().includes(s) || i.desc.toLowerCase().includes(s) || i.region.toLowerCase().includes(s);
  });

  return (
    <div id="globalInsightScreen" className={`screen${isActive ? ' active' : ''}`}>
      <div className="module-header" style={{ background: 'linear-gradient(135deg, #006064, #004d40)' }}>
        <div className="module-back-btn" onClick={() => navigate('homeScreen')}>
          <Icon name="ArrowLeft" size={24} color="#fff" />
        </div>
        <div className="module-header-content">
          <Icon name="Globe" size={28} color="#fff" />
          <h1>Global Insight</h1>
        </div>
        <div className="module-search">
          <Icon name="Search" size={18} color="rgba(255,255,255,0.5)" />
          <input
            type="text"
            placeholder="Search insights or regions..."
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
          <div className="module-empty">No insights match your search</div>
        ) : (
          filtered.map((insight, i) => (
            <div key={i} className="insight-card">
              <div className="insight-region">{insight.region}</div>
              <h4>{insight.title}</h4>
              <p>{insight.desc}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
