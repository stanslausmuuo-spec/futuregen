import { useState } from 'react';
import { useApp } from '../context/AppContext';
import Icon from '../components/Icon';
import { BUSINESS_SECTORS, STARTUP_TIPS, PITCH_TIPS, FUNDING_TIPS } from '../data/mockData';

const bizTabs = [
  { id: 'ideas', icon: 'Briefcase', label: 'Ideas' },
  { id: 'startups', icon: 'Rocket', label: 'Startups' },
  { id: 'pitch', icon: 'Lightbulb', label: 'Pitch' },
  { id: 'funding', icon: 'DollarSign', label: 'Funding' },
];

const dataMap = {
  startups: STARTUP_TIPS,
  pitch: PITCH_TIPS,
  funding: FUNDING_TIPS,
};

export default function BusinessScreen({ isActive }) {
  const { navigate } = useApp();
  const [query, setQuery] = useState('');
  const [bizTab, setBizTab] = useState('ideas');

  function filterSectors(sectors) {
    if (!query.trim()) return sectors;
    const s = query.toLowerCase();
    return sectors.filter((sec) =>
      sec.title.toLowerCase().includes(s) ||
      sec.desc.toLowerCase().includes(s) ||
      sec.fields.some((f) => f.title.toLowerCase().includes(s) || f.desc.toLowerCase().includes(s))
    );
  }

  function filterList(items) {
    if (!query.trim()) return items;
    const s = query.toLowerCase();
    return items.filter((item) =>
      item.title.toLowerCase().includes(s) || item.desc.toLowerCase().includes(s)
    );
  }

  const searchPlaceholder = {
    ideas: 'Search sectors & fields...',
    startups: 'Search startup tips...',
    pitch: 'Search pitch advice...',
    funding: 'Search funding sources...',
  };

  return (
    <div id="businessScreen" className={`screen${isActive ? ' active' : ''}`}>
      <div className="module-header" style={{ background: 'linear-gradient(135deg, #795548, #263238)' }}>
        <div className="module-back-btn" onClick={() => navigate('homeScreen')}>
          <Icon name="ArrowLeft" size={24} color="#fff" />
        </div>
        <div className="module-header-content">
          <Icon name="Briefcase" size={28} color="#fff" />
          <h1>Business Ideas</h1>
          <span className="premium-badge">PREMIUM</span>
        </div>
        <div className="module-search">
          <Icon name="Search" size={18} color="rgba(255,255,255,0.5)" />
          <input
            type="text"
            placeholder={searchPlaceholder[bizTab]}
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
        {bizTab === 'ideas' && (
          <>
            {query && filterSectors(BUSINESS_SECTORS).length === 0 ? (
              <div className="module-empty">No sectors match your search</div>
            ) : (
              filterSectors(BUSINESS_SECTORS).slice(0, 3).map((sector) => (
                <div key={sector.id} className="sector-card">
                  <div className="sector-header" style={{ background: sector.gradient }}>
                    <div className="sector-icon-wrap">
                      <Icon name={sector.icon} size={24} color="#fff" />
                    </div>
                    <div className="sector-header-text">
                      <h3>{sector.title}</h3>
                      <p>{sector.desc}</p>
                    </div>
                  </div>
                  <div className="sector-fields">
                    {sector.fields.map((field, fi) => (
                      <div key={fi} className="sector-field-item">
                        <div className="sector-field-dot" style={{ background: sector.accent }} />
                        <div>
                          <strong>{field.title}</strong>
                          <p>{field.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
            <div className="premium-lock-banner">
              <Icon name="Lock" size={24} color="#ffd700" />
              <div>
                <strong>Premium Module</strong>
                <p>Unlock 5 sectors with full strategic breakdowns — including Energy & Ops.</p>
              </div>
              <button className="premium-unlock-btn">Unlock</button>
            </div>
          </>
        )}
        {bizTab !== 'ideas' && (
          filterList(dataMap[bizTab]).length === 0 ? (
            <div className="module-empty">No results match your search</div>
          ) : (
            filterList(dataMap[bizTab]).map((item, i) => (
              <div key={i} className="business-card">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))
          )
        )}
      </div>

      <div className="module-bottom-nav">
        {bizTabs.map((tab) => (
          <div
            key={tab.id}
            className={`module-nav-tab${bizTab === tab.id ? ' active' : ''}`}
            onClick={() => { setBizTab(tab.id); setQuery(''); }}
          >
            <Icon name={tab.icon} size={20} />
            <span>{tab.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}