import Icon from './Icon';

export default function ModuleCard({ module, onClick }) {
  return (
    <div
      className="module-card"
      style={{ background: module.gradient }}
      onClick={onClick}
    >
      {module.premium && <span className="premium-tag">PREMIUM</span>}
      <div className="mod-icon">
        <Icon name={module.icon} size={24} color="rgba(255,255,255,0.9)" />
        {module.iconLock && (
          <Icon name="Lock" size={14} color="rgba(255,255,255,0.7)" style={{ marginLeft: -6, marginTop: 10 }} />
        )}
      </div>
      <div className="mod-text">
        <h4>
          {module.title}
          {module.titleIcon && (
            <span style={{ display: 'inline-flex', verticalAlign: 'middle', marginLeft: 4 }}>
              <Icon name={module.titleIcon} size={16} />
            </span>
          )}
        </h4>
        <p>{module.desc}</p>
      </div>
    </div>
  );
}
