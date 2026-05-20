import Icon from './Icon';
import { useApp } from '../context/AppContext';
import { USER } from '../data/mockData';

export default function ProfileCard() {
  const { progressAnimated, showToast, userName, profilePic } = useApp();

  return (
    <div className="profile-card">
      <div className="profile-main">
        <div className="avatar">
          {profilePic ? (
            <img src={profilePic} alt="Profile" className="avatar-img" />
          ) : (
            <Icon name="Crown" size={32} color="#ffd700" />
          )}
        </div>
        <div className="profile-info">
          <h2>Welcome, {userName}!</h2>
          <p>
            <Icon name="Hourglass" size={14} />
            Pending verification
          </p>
        </div>
      </div>
      <div className="profile-actions">
        <button className="btn-gold" onClick={() => showToast('Upgrading...')}>Unlock Full Premium Access</button>
      </div>
    </div>
  );
}
