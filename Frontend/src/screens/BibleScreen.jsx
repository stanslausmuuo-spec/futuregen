import { useState } from 'react';
import { useApp } from '../context/AppContext';
import Icon from '../components/Icon';
import VerseCard from '../components/VerseCard';
import { VERSES } from '../data/mockData';

const bibleTabs = [
  { id: 'quotes', icon: 'Quote', label: 'Quotes' },
  { id: 'notes', icon: 'FileText', label: 'Notes' },
  { id: 'bible', icon: 'Book', label: 'Bible' },
  { id: 'bookmarks', icon: 'Bookmark', label: 'Bookmarks' },
  { id: 'highlights', icon: 'Highlighter', label: 'Highlights' },
];

export default function BibleScreen({ isActive }) {
  const { navigate, favourites, toggleFavourite, showToast } = useApp();
  const [query, setQuery] = useState('');
  const [bibleTab, setBibleTab] = useState('quotes');

  const favVerses = VERSES.filter((v) =>
    favourites.some((f) => f.text === v.text && f.ref === v.ref)
  );

  function filterList(items) {
    if (!query.trim()) return items;
    const s = query.toLowerCase();
    return items.filter((v) =>
      v.text.toLowerCase().includes(s) || v.ref.toLowerCase().includes(s)
    );
  }

  const searchPlaceholder = {
    quotes: 'Search verses or references...',
    bookmarks: 'Search bookmarked verses...',
    bible: 'Search the Bible...',
    notes: 'Search your notes...',
    highlights: 'Search highlights...',
  };

  function handleTabClick(tab) {
    setBibleTab(tab.id);
    setQuery('');
    if (tab.id === 'bible' || tab.id === 'notes' || tab.id === 'highlights') {
      showToast(`${tab.label} coming soon!`);
    }

  }

  return (
    <div id="bibleScreen" className={`screen${isActive ? ' active' : ''}`}>
      <div className="module-header" style={{ background: 'linear-gradient(180deg, #1b5e20, #0b0b1a)' }}>
        <div className="module-back-btn" onClick={() => navigate('homeScreen')}>
          <Icon name="ArrowLeft" size={24} color="#fff" />
        </div>
        <div className="module-header-content">
          <Icon name="Book" size={28} color="#fff" />
          <h1>Scripture Archives</h1>
        </div>
        <div className="module-search">
          <Icon name="Search" size={18} color="rgba(255,255,255,0.5)" />
          <input
            type="text"
            placeholder={searchPlaceholder[bibleTab]}
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
        {bibleTab === 'bible' && (
          <div className="module-empty" style={{ marginTop: 'clamp(60px, 15vh, 120px)' }}>
            <div style={{ fontSize: 'clamp(40px, 8vw, 60px)', marginBottom: 'var(--space-md)' }}>
              <Icon name="Book" size={48} color="rgba(255,255,255,0.1)" />
            </div>
            <h3>Bible Feature</h3>
            <p>Books, chapters, and deeper study coming soon.</p>
          </div>
        )}
        {bibleTab === 'quotes' && (
          filterList(VERSES).length === 0 ? (
            <div className="module-empty">No verses match your search</div>
          ) : (
            filterList(VERSES).map((verse, i) => (
              <VerseCard key={i} verse={verse} />
            ))
          )
        )}
        {bibleTab === 'bookmarks' && (
          filterList(favVerses).length === 0 ? (
            <div className="module-empty">No bookmarked verses yet</div>
          ) : (
            filterList(favVerses).map((verse, i) => (
              <VerseCard key={i} verse={verse} />
            ))
          )
        )}
        {bibleTab === 'highlights' && (
          <div className="module-empty" style={{ marginTop: 'clamp(60px, 15vh, 120px)' }}>
            <div style={{ fontSize: 'clamp(40px, 8vw, 60px)', marginBottom: 'var(--space-md)' }}>
              <Icon name="Highlighter" size={48} color="rgba(255,255,255,0.1)" />
            </div>
            <h3>Highlights</h3>
            <p>Save and organize your highlighted verses here.</p>
          </div>
        )}
        {bibleTab === 'notes' && (
          <div className="module-empty" style={{ marginTop: 'clamp(60px, 15vh, 120px)' }}>
            <div style={{ fontSize: 'clamp(40px, 8vw, 60px)', marginBottom: 'var(--space-md)' }}>
              <Icon name="FileText" size={48} color="rgba(255,255,255,0.1)" />
            </div>
            <h3>Notes</h3>
            <p>Jot down your thoughts and reflections on scripture.</p>
          </div>
        )}
      </div>

      <div className="module-bottom-nav">
        {bibleTabs.map((tab) => (
          <div
            key={tab.id}
            className={`module-nav-tab${bibleTab === tab.id ? ' active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            <Icon name={tab.icon} size={20} />
            <span>{tab.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
