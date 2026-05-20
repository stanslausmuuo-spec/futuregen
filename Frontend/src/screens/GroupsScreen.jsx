import { useState } from 'react';
import { useApp } from '../context/AppContext';
import Icon from '../components/Icon';
import GroupCard from '../components/GroupCard';
import ExploreGroupCard from '../components/ExploreGroupCard';
import { GROUPS, EXPLORE_GROUPS } from '../data/mockData';

export default function GroupsScreen({ isActive }) {
  const { groupsTab, setGroupsTab, showToast } = useApp();
  const [myGroups, setMyGroups] = useState([]);
  const [creating, setCreating] = useState(false);
  const [form, setForm] = useState({ name: '', desc: '', invites: '', groupType: 'private' });
  const [search, setSearch] = useState('');
  const [exploreSearch, setExploreSearch] = useState('');
  const [joinedGroupIds, setJoinedGroupIds] = useState(new Set());
  const [dismissedGroupIds, setDismissedGroupIds] = useState(new Set());

  function handleJoin(groupId) {
    setJoinedGroupIds((prev) => new Set(prev).add(groupId));
  }

  function handleExit(groupId) {
    setJoinedGroupIds((prev) => {
      const next = new Set(prev);
      next.delete(groupId);
      return next;
    });
    setMyGroups((prev) => prev.filter((g) => g.id !== groupId));
  }

  function handleDismiss(groupId) {
    setDismissedGroupIds((prev) => new Set(prev).add(groupId));
  }

  function getGroups() {
    const all = groupsTab === 'all'
        ? [...GROUPS.public.filter((g) => !dismissedGroupIds.has(g.id)), ...myGroups]
      : groupsTab === 'public'
        ? GROUPS.public.filter((g) => !dismissedGroupIds.has(g.id))
      : myGroups;
    if (!search.trim()) return all;
    const q = search.toLowerCase();
    return all.filter((g) =>
      g.name.toLowerCase().includes(q) ||
      (g.desc && g.desc.toLowerCase().includes(q)) ||
      g.members.toString().toLowerCase().includes(q)
    );
  }

  const groups = getGroups();

  function handleCreate() {
    const name = form.name.trim();
    if (!name) {
      showToast('Enter a group name');
      return;
    }
    const type = form.groupType === 'public' ? 'Public' : 'Private';
    setMyGroups([
      {
        id: Date.now().toString(),
        name,
        icon: 'Users',
        members: form.invites.trim() ? form.invites.split(',').length + 1 : '1',
        type,
        desc: form.desc.trim(),
        invites: form.invites.trim(),
      },
      ...myGroups,
    ]);
    setForm({ name: '', desc: '', invites: '', groupType: 'private' });
    setCreating(false);
    setGroupsTab(type === 'Public' ? 'public' : 'private');
    showToast('Group created!');
  }

  return (
    <div id="groupsScreen" className={`screen${isActive ? ' active' : ''}`}>
      <header>
        <div className="logo">
          <h1 style={{ fontSize: 'clamp(22px, 5vw, 28px)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <Icon name="Users" size={24} color="#fff" />
            Groups
          </h1>
        </div>
      </header>
      <div className="groups-tabs">
        <button
          className={`tab-btn${groupsTab === 'all' ? ' active' : ''}`}
          onClick={() => setGroupsTab('all')}
        >
          All
        </button>
        <button
          className={`tab-btn${groupsTab === 'public' ? ' active' : ''}`}
          onClick={() => setGroupsTab('public')}
        >
          Public
        </button>
        <button
          className={`tab-btn${groupsTab === 'private' ? ' active' : ''}`}
          onClick={() => setGroupsTab('private')}
        >
          Private
        </button>
      </div>
      <div className="module-search" style={{ margin: 'var(--space-sm) var(--space-md)' }}>
        <Icon name="Search" size={16} color="rgba(255,255,255,0.4)" />
        <input
          type="text"
          placeholder="Search groups..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <span className="module-search-clear" onClick={() => setSearch('')}>
            <Icon name="X" size={16} />
          </span>
        )}
      </div>
      <div className="scrollable-content" id="groupsList" style={{ paddingBottom: 'clamp(70px, 12vh, 90px)' }}>
        {creating && (
          <div className="create-group-bar">
            <input
              type="text"
              placeholder="Group name *"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              autoFocus
              className="create-group-input"
            />
            <input
              type="text"
              placeholder="Description (optional)"
              value={form.desc}
              onChange={(e) => setForm({ ...form, desc: e.target.value })}
              className="create-group-input"
            />
            <div className="create-group-type">
              <span className="create-group-type-label">Group Type</span>
              <div className="create-group-type-options">
                <button
                  className={`type-btn${form.groupType === 'private' ? ' active' : ''}`}
                  onClick={() => setForm({ ...form, groupType: 'private' })}
                >
                  <Icon name="Lock" size={14} /> Private
                </button>
                <button
                  className={`type-btn${form.groupType === 'public' ? ' active' : ''}`}
                  onClick={() => setForm({ ...form, groupType: 'public' })}
                >
                  <Icon name="Globe" size={14} /> Public
                </button>
              </div>
            </div>
            <input
              type="text"
              placeholder="Invite members (comma-separated emails)"
              value={form.invites}
              onChange={(e) => setForm({ ...form, invites: e.target.value })}
              className="create-group-input"
            />
            <div className="create-group-actions">
              <button className="new-conv-btn" onClick={handleCreate}>Create</button>
              <button className="new-conv-cancel" onClick={() => setCreating(false)}>Cancel</button>
            </div>
          </div>
        )}

        {groups.length === 0 && !creating ? (
          <div className="messages-empty">
            <div className="messages-empty-icon">
              <Icon name="Search" size={48} color="rgba(255,255,255,0.1)" />
            </div>
            {search ? (
              <>
                <h3>No results found</h3>
                <p>No groups match your search. Try a different keyword.</p>
              </>
            ) : groupsTab === 'private' ? (
              <>
                <h3>No private groups yet</h3>
                <p>Tap the + button to create your first private group and invite others.</p>
              </>
            ) : (
              <>
                <h3>No groups yet</h3>
                <p>Check back later or create a new group.</p>
              </>
            )}
          </div>
        ) : (
          groups.map((group) => (
            <GroupCard
              key={group.id}
              group={group}
              isJoined={joinedGroupIds.has(group.id)}
              onJoin={(id) => { handleJoin(id); showToast(`Joined ${group.name}!`); }}
              onRemove={(id) => {
                if (joinedGroupIds.has(id) || group.type === 'Private') handleExit(id);
                else handleDismiss(id);
              }}
              onInvite={(id) => showToast('Invite link copied!')}
            />
          ))
        )}

        {groupsTab === 'public' && !search && (
          <section className="explore-section">
            <h3>
              <Icon name="Compass" size={22} />
              Explore Groups
            </h3>
            <div className="module-search explore-search">
              <Icon name="Search" size={16} color="rgba(255,255,255,0.4)" />
              <input
                type="text"
                placeholder="Search explore groups..."
                value={exploreSearch}
                onChange={(e) => setExploreSearch(e.target.value)}
              />
              {exploreSearch && (
                <span className="module-search-clear" onClick={() => setExploreSearch('')}>
                  <Icon name="X" size={16} />
                </span>
              )}
            </div>
            <div className="explore-grid">
              {EXPLORE_GROUPS.filter((g) => {
                if (!exploreSearch.trim()) return true;
                const q = exploreSearch.toLowerCase();
                return g.name.toLowerCase().includes(q) || g.desc.toLowerCase().includes(q);
              }).map((g) => (
                <ExploreGroupCard key={g.id} group={g} onJoin={() => showToast(`Joined ${g.name}!`)} />
              ))}
            </div>
          </section>
        )}
      </div>

      {!creating && (
        <button
          className="messages-fab"
          onClick={() => { setCreating(true); setGroupsTab('private'); }}
          title="Create new group"
        >
          <Icon name="Plus" size={24} color="#000" />
        </button>
      )}
    </div>
  );
}
