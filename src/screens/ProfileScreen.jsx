import { useState, useRef } from 'react';
import Icon from '../components/Icon';
import SettingItem from '../components/SettingItem';
import { useApp } from '../context/AppContext';
import { USER, SETTINGS } from '../data/mockData';

export default function ProfileScreen({ isActive }) {
  const { userName, setUserName, profilePic, setProfilePic, showToast } = useApp();
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(userName);
  const fileInputRef = useRef(null);

  function handleSave() {
    const trimmed = editValue.trim();
    if (!trimmed) {
      showToast('Name cannot be empty');
      return;
    }
    setUserName(trimmed);
    setEditing(false);
    showToast('Username updated!');
  }

  function handleCancel() {
    setEditValue(userName);
    setEditing(false);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') handleCancel();
  }

  function handlePicChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setProfilePic(ev.target.result);
      showToast('Profile picture updated!');
    };
    reader.readAsDataURL(file);
  }

  return (
    <div id="profileScreen" className={`screen${isActive ? ' active' : ''}`}>
      <div className="profile-header">
        <div className="profile-pic profile-pic-editable" onClick={() => fileInputRef.current?.click()}>
          {profilePic ? (
            <img src={profilePic} alt="Profile" className="profile-pic-img" />
          ) : (
            <Icon name="Crown" size={48} color="#ffd700" />
          )}
          <div className="profile-pic-overlay">
            <Icon name="Camera" size={22} color="#fff" />
          </div>
        </div>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handlePicChange}
          style={{ display: 'none' }}
        />
        {editing ? (
          <div className="username-edit">
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              className="username-input"
            />
            <div className="username-edit-actions">
              <button className="btn-gold" onClick={handleSave} style={{ padding: '6px 16px', fontSize: 'var(--text-xs)' }}>Save</button>
              <button className="btn-red" onClick={handleCancel} style={{ padding: '6px 16px', fontSize: 'var(--text-xs)' }}>Cancel</button>
            </div>
          </div>
        ) : (
          <div className="username-display">
            <h2 style={{ margin: 0, fontSize: 'var(--text-heading)' }}>{userName}</h2>
            <span className="username-edit-icon" onClick={() => { setEditValue(userName); setEditing(true); }}>
              <Icon name="Pencil" size={18} color="#a0a0b0" />
            </span>
          </div>
        )}

      </div>
      <div className="scrollable-content" style={{ paddingBottom: 'clamp(70px, 12vh, 90px)' }}>
        {SETTINGS.map((setting, i) => (
          <SettingItem key={i} setting={setting} />
        ))}
      </div>
    </div>
  );
}
