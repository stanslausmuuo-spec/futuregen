import { useApp } from '../context/AppContext';
import Icon from './Icon';

const tabs = [
  { id: 'homeScreen', label: 'Home', icon: 'Home' },
  { id: 'messagesScreen', label: 'Messages', icon: 'MessageCircle' },
  { id: 'groupsScreen', label: 'Groups', icon: 'Users' },
  { id: 'aivibeScreen', label: 'AI Vibe', icon: 'Smile' },
  { id: 'profileScreen', label: 'Profile', icon: 'User' },
];

const moduleScreens = ['loginScreen', 'signupScreen', 'bibleScreen', 'quotesScreen', 'businessScreen', 'psychologyScreen', 'globalInsightScreen', 'loveFlirtScreen', 'aivibeScreen', 'favouritesScreen', 'notificationScreen'];

export default function BottomNav() {
  const { currentScreen, navigate, showToast } = useApp();
  if (moduleScreens.includes(currentScreen)) return null;

  const handleTabClick = (tab) => {
    navigate(tab.id);
  };

  const getTabData = (id) => id.replace('Screen', '').toLowerCase();

  return (
    <div className="bottom-nav visible" id="bottomNav">
      {tabs.map((tab) => {
        const isActive = currentScreen === tab.id;
        return (
          <div
            key={tab.id}
            className={`nav-tab${isActive ? ' active' : ''}`}
            data-tab={getTabData(tab.id)}
            onClick={() => handleTabClick(tab)}
          >
            <span><Icon name={tab.icon} size={22} /></span>
            {tab.label}
          </div>
        );
      })}
    </div>
  );
}
