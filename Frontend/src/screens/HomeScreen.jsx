import { useApp } from '../context/AppContext';
import Icon from '../components/Icon';
import ProfileCard from '../components/ProfileCard';
import AchievementCard from '../components/AchievementCard';
import ModuleCard from '../components/ModuleCard';
import CommunityPostCard from '../components/CommunityPostCard';
import { ACHIEVEMENTS, MODULES, COMMUNITY_POSTS } from '../data/mockData';

export default function HomeScreen({ isActive }) {
  const { showToast, navigate, logout, unreadNotifCount } = useApp();

  const moduleRoutes = {
    '1': 'quotesScreen',
    '2': 'businessScreen',
    '3': 'psychologyScreen',
    '4': 'bibleScreen',
    '5': 'globalInsightScreen',
    '6': 'loveFlirtScreen',
  };

  function handleModuleClick(mod) {
    const screen = moduleRoutes[mod.id];
    if (screen) navigate(screen);
  }

  return (
    <div id="homeScreen" className={`screen home-screen${isActive ? ' active' : ''}`}>
      <header>
        <div className="header-top">
          <div className="logo">
            <h1>
              Future Gen
              <Icon name="Star" size={20} color="#ffd700" />
            </h1>
            <p>Build great future</p>
          </div>
          <div className="top-actions">
            <div className="top-btns">
              <button className="upgrade-btn" onClick={() => showToast('Premium Upgrade Coming Soon!')}>Upgrade</button>
              <span className="icon-btn notif-bell-wrap" onClick={() => navigate('notificationScreen')}>
                <Icon name="Bell" size={20} color={unreadNotifCount > 0 ? '#00ffff' : undefined} />
                {unreadNotifCount > 0 && <span className="notif-bell-dot" />}
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="scrollable-content">
        <ProfileCard />

        <section>
          <h3>
            Today&apos;s Achievements
            <span className="section-icon"><Icon name="Handshake" size={22} /></span>
          </h3>
          <div className="horizontal-scroll">
            {ACHIEVEMENTS.map((ach) => (
              <AchievementCard
                key={ach.id}
                achievement={ach}
                onClick={() => showToast(ach.toast)}
              />
            ))}
          </div>
        </section>

        <section>
          <h3>Mastery Modules</h3>
          {MODULES.map((mod) => (
            <ModuleCard
              key={mod.id}
              module={mod}
              onClick={() => handleModuleClick(mod)}
            />
          ))}
        </section>

        <section>
          <h3>
            Community Highlights
            <span className="section-icon"><Icon name="Handshake" size={22} /></span>
          </h3>
          <div className="horizontal-scroll">
            {COMMUNITY_POSTS.map((post) => (
              <CommunityPostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
