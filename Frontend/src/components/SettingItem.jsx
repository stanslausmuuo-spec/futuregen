import Icon from './Icon';
import { useApp } from '../context/AppContext';

export default function SettingItem({ setting, onClick }) {
  const { logout, theme, toggleTheme, navigate } = useApp();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (setting.action === 'logout') {
      logout();
    } else if (setting.action === 'notifications') {
      navigate('notificationScreen');
    } else if (setting.action === 'favourites') {
      navigate('favouritesScreen');
    } else if (setting.action === 'toggleTheme') {
      toggleTheme();
    }
  };

  return (
    <div
      className="setting-item"
      style={setting.danger ? { color: '#ff4444' } : {}}
      onClick={handleClick}
    >
      <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {setting.icon && <Icon name={setting.icon} size={18} />}
        {setting.label}
      </span>
      <span className="setting-right">
        {setting.switch ? (
          <label className="toggle-switch" onClick={(e) => e.stopPropagation()}>
            <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
            <span className="toggle-slider" />
          </label>
        ) : setting.trailing ? (
          <Icon name={setting.trailing} size={18} />
        ) : null}
      </span>
    </div>
  );
}
