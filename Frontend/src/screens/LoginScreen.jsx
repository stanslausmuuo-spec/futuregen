import { useApp } from '../context/AppContext';
import Icon from '../components/Icon';
import AuthCard from '../components/AuthCard';
import PasswordInput from '../components/PasswordInput';

export default function LoginScreen({ isActive }) {
  const { navigate, login } = useApp();

  return (
    <div id="loginScreen" className={`screen auth-screen${isActive ? ' active' : ''}`}>
      <div className="auth-logo-box">
        <div className="auth-logo-icon">
          <Icon name="Zap" size={56} />
        </div>
        <div className="auth-title">Future Gen</div>
      </div>
      <div className="auth-subtitle">Architect Your Destiny</div>
      <AuthCard>
        <div className="input-group">
          <label>Email Address</label>
          <input type="email" placeholder="name@example.com" />
        </div>
        <PasswordInput id="passLogin" form="login" />
        <button className="auth-btn btn-primary" onClick={login}>LOGIN</button>
      </AuthCard>
      <div style={{ marginTop: 24, fontSize: 'var(--text-small)', color: 'var(--text-dim)' }}>
        Don&apos;t have an account?{' '}
        <span style={{ color: 'var(--accent)', cursor: 'pointer' }} onClick={() => navigate('signupScreen')}>
          Sign Up
        </span>
      </div>
    </div>
  );
}
