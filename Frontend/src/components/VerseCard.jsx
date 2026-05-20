import { useApp } from '../context/AppContext';
import Icon from './Icon';

export default function VerseCard({ verse }) {
  const { favourites, toggleFavourite } = useApp();

  function isFav() {
    return favourites.some((f) => f.text === verse.text && f.ref === verse.ref);
  }

  return (
    <div className="verse-card">
      {verse.text}
      <div className="verse-ref">{verse.ref}</div>
      <div className={`fav-btn${isFav() ? ' active' : ''}`} onClick={() => toggleFavourite({ ...verse })}>
        <Icon name="Heart" size={18} color={isFav() ? '#ff4081' : 'rgba(255,255,255,0.25)'} />
      </div>
    </div>
  );
}
