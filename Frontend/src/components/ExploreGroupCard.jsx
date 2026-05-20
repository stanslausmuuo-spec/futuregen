import Icon from './Icon';

export default function ExploreGroupCard({ group, onJoin }) {
  return (
    <div className="explore-card">
      <div className="explore-card-top">
        <div className="group-icon">
          <Icon name={group.icon} size={20} color="rgba(255,255,255,0.8)" />
        </div>
        <h4>{group.name}</h4>
      </div>
      <p className="explore-card-desc">{group.desc}</p>
      <div className="explore-card-bottom">
        <span className="explore-card-members">{group.members} members</span>
        <button className="explore-join-btn" onClick={onJoin}>+ Join</button>
      </div>
    </div>
  );
}
