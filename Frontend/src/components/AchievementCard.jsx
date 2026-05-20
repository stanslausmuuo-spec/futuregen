import Icon from './Icon';

export default function AchievementCard({ achievement, onClick }) {
  return (
    <div className="ach-card" onClick={onClick}>
      <div className="ach-icon-box">
        {achievement.icons.map((iconName, i) => (
          <Icon key={i} name={iconName} size={20} />
        ))}
      </div>
      <div className="ach-label">{achievement.title}</div>
    </div>
  );
}
