import { useState, useRef, useEffect } from 'react';
import Icon from './Icon';
import { useApp } from '../context/AppContext';

export default function GroupCard({ group, isJoined, onJoin, onRemove, onInvite }) {
  const { showToast } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClick);
      return () => document.removeEventListener('mousedown', handleClick);
    }
  }, [menuOpen]);

  const isPrivate = group.type === 'Private';
  const showActions = isPrivate || isJoined;

  return (
    <div className="group-card">
      <div className="group-icon">
        <Icon name={group.icon} size={22} color="rgba(255,255,255,0.8)" />
      </div>
      <div className="group-info">
        <h4>{group.name}</h4>
        <p>{group.members} &bull; {group.type}</p>
        {group.desc && <p className="group-desc">{group.desc}</p>}
      </div>
      <div className="group-menu-container" ref={menuRef}>
        <button className="group-menu-btn" onClick={() => setMenuOpen((o) => !o)}>
          <Icon name="MoreVertical" size={18} />
        </button>
        {menuOpen && (
          <div className="group-dropdown">
            {showActions ? (
              <>
                <button className="group-dropdown-item" onClick={() => { setMenuOpen(false); if (onInvite) onInvite(group.id); }}>
                  <Icon name="UserPlus" size={16} /> Invite
                </button>
                <button className="group-dropdown-item" onClick={() => { setMenuOpen(false); showToast(`You left ${group.name}`); if (onRemove) onRemove(group.id); }}>
                  <Icon name="LogOut" size={16} /> Exit Group
                </button>
                <button className="group-dropdown-item group-dropdown-danger" onClick={() => { setMenuOpen(false); showToast('Group deleted'); if (onRemove) onRemove(group.id); }}>
                  <Icon name="Trash2" size={16} /> Delete Group
                </button>
              </>
            ) : (
              <>
                <button className="group-dropdown-item" onClick={() => { setMenuOpen(false); if (onJoin) onJoin(group.id); }}>
                  <Icon name="UserPlus" size={16} /> Join Group
                </button>
                <button className="group-dropdown-item group-dropdown-danger" onClick={() => { setMenuOpen(false); showToast('Group deleted'); if (onRemove) onRemove(group.id); }}>
                  <Icon name="Trash2" size={16} /> Delete Group
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
