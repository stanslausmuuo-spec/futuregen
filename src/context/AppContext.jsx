import { createContext, useContext, useState, useCallback, useRef } from 'react';
import { generateResponse, getWelcomeMessage, getWelcomeSuggestions } from '../data/aiEngine';
import { USER, NOTIFICATIONS } from '../data/mockData';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [currentScreen, setCurrentScreen] = useState('loginScreen');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [toast, setToast] = useState({ message: '', visible: false });

  const welcomeMsg = getWelcomeMessage(USER.name);
  const [chatMessages, setChatMessages] = useState([
    { text: welcomeMsg.text, sender: 'ai', timestamp: welcomeMsg.timestamp },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [groupsTab, setGroupsTab] = useState('public');
  const [passVisible, setPassVisible] = useState({ login: false, signup: false });
  const [progressAnimated, setProgressAnimated] = useState(false);
  const [userName, setUserName] = useState(USER.name);
  const [profilePic, setProfilePic] = useState(null);
  const [conversations, setConversations] = useState([]);
  const [notifications, setNotifications] = useState(NOTIFICATIONS);
  const [theme, setTheme] = useState('dark');
  const [favourites, setFavourites] = useState([]);
  const toastTimer = useRef(null);
  const progressTimer = useRef(null);
  const typingTimer = useRef(null);

  const showToast = useCallback((message) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ message, visible: true });
    toastTimer.current = setTimeout(() => {
      setToast({ message: '', visible: false });
      toastTimer.current = null;
    }, 2000);
  }, []);

  const navigate = useCallback((id) => {
    setCurrentScreen(id);
    if (id === 'homeScreen') {
      if (progressTimer.current) clearTimeout(progressTimer.current);
      progressTimer.current = setTimeout(() => {
        setProgressAnimated(true);
      }, 500);
    }
  }, []);

  const login = useCallback(() => {
    showToast('Authentication Successful!');
    setIsAuthenticated(true);
    setTimeout(() => {
      navigate('homeScreen');
    }, 1000);
  }, [showToast, navigate]);

  const logout = useCallback(() => {
    showToast('Logged Out');
    setIsAuthenticated(false);
    const freshWelcome = getWelcomeMessage(USER.name);
    setChatMessages([
      { text: freshWelcome.text, sender: 'ai', timestamp: freshWelcome.timestamp },
    ]);
    setIsTyping(false);
    setProgressAnimated(false);
    setTimeout(() => {
      navigate('loginScreen');
    }, 500);
  }, [showToast, navigate]);

  const togglePassword = useCallback((form) => {
    setPassVisible((prev) => ({ ...prev, [form]: !prev[form] }));
  }, []);

  const sendMessage = useCallback((text) => {
    if (!text.trim() || isTyping) return;

    const userMsg = { text, sender: 'user', timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setChatMessages((prev) => [...prev, userMsg]);

    setIsTyping(true);

    if (typingTimer.current) clearTimeout(typingTimer.current);

    const delay = Math.min(600 + text.length * 15, 2000);

    typingTimer.current = setTimeout(() => {
      const response = generateResponse(text, chatMessages);
      const aiMsg = { text: response.text, sender: 'ai', timestamp: response.timestamp };
      setChatMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, delay);
  }, [isTyping, chatMessages]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const toggleFavourite = useCallback((item) => {
    setFavourites((prev) => {
      const exists = prev.some((f) => f.text === item.text && (f.author || f.ref) === (item.author || item.ref));
      if (exists) {
        return prev.filter((f) => !(f.text === item.text && (f.author || f.ref) === (item.author || item.ref)));
      }
      return [...prev, item];
    });
  }, []);

  const clearChat = useCallback(() => {
    if (typingTimer.current) clearTimeout(typingTimer.current);
    setIsTyping(false);
    const freshWelcome = getWelcomeMessage(USER.name);
    setChatMessages([
      { text: freshWelcome.text, sender: 'ai', timestamp: freshWelcome.timestamp },
    ]);
  }, []);

  const unreadNotifCount = notifications.filter((n) => !n.read).length;

  const value = {
    currentScreen,
    isAuthenticated,
    toast,
    chatMessages,
    isTyping,
    groupsTab,
    passVisible,
    progressAnimated,
    userName,
    setUserName,
    profilePic,
    setProfilePic,
    conversations,
    setConversations,
    notifications,
    setNotifications,
    unreadNotifCount,
    theme,
    toggleTheme,
    favourites,
    toggleFavourite,
    navigate,
    login,
    logout,
    showToast,
    togglePassword,
    setGroupsTab,
    sendMessage,
    setChatMessages,
    setIsTyping,
    clearChat,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
