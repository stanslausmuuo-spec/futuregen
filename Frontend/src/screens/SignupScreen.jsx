import { useState } from 'react';
import { useApp } from '../context/AppContext';
import AuthCard from '../components/AuthCard';
import PasswordInput from '../components/PasswordInput';
import Icon from '../components/Icon';

export default function SignupScreen({ isActive }) {
  const { navigate, login, setUserName, showToast } = useApp();
  const [username, setUsername] = useState('');

  function handleSignup() {
    if (!username.trim()) {
      showToast('Please enter a username');
      return;
    }
    setUserName(username.trim());
    login();
  }

  return (
    <div id="signupScreen" className={`screen auth-screen${isActive ? ' active' : ''}`}>
      <div className="auth-logo-box">
        <div className="auth-title" style={{ fontSize: 'var(--text-heading)' }}>Future Gen</div>
      </div>
      <div className="auth-subtitle">Your journey begins here</div>
      <AuthCard>
        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" />
        </div>
        <div className="input-group">
          <label>Email Address</label>
          <input type="email" placeholder="name@example.com" />
        </div>
        <PasswordInput id="passSignup" form="signup" />
        <button className="auth-btn btn-secondary" onClick={handleSignup}>SIGN UP</button>
      </AuthCard>
      <div style={{ marginTop: 24, fontSize: 'var(--text-small)', color: 'var(--text-dim)' }}>
        Already a member?{' '}
        <span style={{ color: 'var(--secondary)', cursor: 'pointer' }} onClick={() => navigate('loginScreen')}>
          Login
        </span>
      </div>
    </div>
  );
}
