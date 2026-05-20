import { AppProvider, useApp } from './context/AppContext';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import GroupsScreen from './screens/GroupsScreen';
import AIVibeScreen from './screens/AIVibeScreen';
import BibleScreen from './screens/BibleScreen';
import QuotesScreen from './screens/QuotesScreen';
import BusinessScreen from './screens/BusinessScreen';
import PsychologyScreen from './screens/PsychologyScreen';
import GlobalInsightScreen from './screens/GlobalInsightScreen';
import LoveFlirtScreen from './screens/LoveFlirtScreen';
import MessagesScreen from './screens/MessagesScreen';
import ProfileScreen from './screens/ProfileScreen';
import NotificationScreen from './screens/NotificationScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import BottomNav from './components/BottomNav';
import Toast from './components/Toast';

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

function AppContent() {
  const { currentScreen, theme } = useApp();

  return (
    <div className="app-container" data-theme={theme}>
      <LoginScreen isActive={currentScreen === 'loginScreen'} />
      <SignupScreen isActive={currentScreen === 'signupScreen'} />
      <HomeScreen isActive={currentScreen === 'homeScreen'} />
      <GroupsScreen isActive={currentScreen === 'groupsScreen'} />
      <AIVibeScreen isActive={currentScreen === 'aivibeScreen'} />
      <BibleScreen isActive={currentScreen === 'bibleScreen'} />
      <QuotesScreen isActive={currentScreen === 'quotesScreen'} />
      <BusinessScreen isActive={currentScreen === 'businessScreen'} />
      <PsychologyScreen isActive={currentScreen === 'psychologyScreen'} />
      <GlobalInsightScreen isActive={currentScreen === 'globalInsightScreen'} />
      <LoveFlirtScreen isActive={currentScreen === 'loveFlirtScreen'} />
      <MessagesScreen isActive={currentScreen === 'messagesScreen'} />
      <NotificationScreen isActive={currentScreen === 'notificationScreen'} />
      <FavouritesScreen isActive={currentScreen === 'favouritesScreen'} />
      <ProfileScreen isActive={currentScreen === 'profileScreen'} />
      <BottomNav />
      <Toast />
    </div>
  );
}
