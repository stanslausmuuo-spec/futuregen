import { useApp } from '../context/AppContext';
import Icon from '../components/Icon';

export default function FavouritesScreen({ isActive }) {
  const { navigate, favourites, toggleFavourite } = useApp();

  return (
    <div id="favouritesScreen" className={`screen${isActive ? ' active' : ''}`}>
      <header className="chat-header">
        <div className="chat-back-btn" onClick={() => navigate('profileScreen')} title="Back">
          <Icon name="ArrowLeft" size={24} />
        </div>
        <div className="chat-logo-center">
          <h1 style={{ fontSize: 'clamp(22px, 5vw, 28px)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <Icon name="Heart" size={24} color="#ff4081" />
            Favourites
          </h1>
        </div>
      </header>

      <div className="scrollable-content" style={{ paddingBottom: 'clamp(70px, 12vh, 90px)' }}>
        {favourites.length === 0 ? (
          <div className="messages-empty">
            <div className="messages-empty-icon">
              <Icon name="Heart" size={48} color="rgba(255,255,255,0.1)" />
            </div>
            <h3>No favourites yet</h3>
            <p>Tap the heart icon on quotes or verses to add them here.</p>
          </div>
        ) : (
          favourites.map((item, i) => {
            const isQuote = !!item.author;
            return (
              <div key={i} className={isQuote ? 'quote-card' : 'verse-card'}>
                {isQuote && (
                  <>
                    <div className="fav-quote-text">{item.text}</div>
                    <div className="fav-quote-author">&mdash; {item.author}</div>
                  </>
                )}
                {!isQuote && (
                  <>
                    <div className="fav-verse-text">{item.text}</div>
                    <div className="verse-ref">{item.ref}</div>
                  </>
                )}
                <div className="fav-heart-btn" onClick={() => toggleFavourite(item)}>
                  <Icon name="Heart" size={18} color="#ff4081" fill="#ff4081" />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
