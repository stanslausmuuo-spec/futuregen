import Icon from './Icon';

export default function CommunityPostCard({ post }) {
  return (
    <div className="community-card">
      <div className="comm-header">
        <div className="comm-avatar" style={{ background: post.bg }}>
          {post.initial}
        </div>
        <strong>{post.author}</strong>
      </div>
      <p style={{ fontSize: 'var(--text-body)', lineHeight: 1.5 }}>{post.content}</p>
      <div style={{ fontSize: 'var(--text-small)', color: 'var(--text-dim)', marginTop: 10, display: 'flex', alignItems: 'center', gap: 4 }}>
        <Icon name="MessageCircle" size={14} />
        {post.replies} replies
      </div>
    </div>
  );
}
