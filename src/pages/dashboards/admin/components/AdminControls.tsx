import React from 'react';

interface AdminControlsProps {}

export const AdminControls: React.FC<AdminControlsProps> = () => {
  const handleControl = (control: string) => {
    alert(`${control} - Coming soon! 🚀`);
  };

  const controls = [
    { id: 'users', label: 'User Management', icon: '👥', color: '#3b82f6' },
    { id: 'courses', label: 'Manage Courses', icon: '📚', color: '#10b981' },
    { id: 'reports', label: 'View Reports', icon: '📊', color: '#f59e0b' },
    { id: 'moderate', label: 'Content Moderation', icon: '🛡️', color: '#ef4444' },
    { id: 'settings', label: 'System Settings', icon: '⚙️', color: '#8b5cf6' },
    { id: 'security', label: 'Security & Backup', icon: '🔒', color: '#06b6d4' },
  ];

  return (
    <div className="controls-section">
      <div className="section-header">🎛️ Admin Controls</div>
      <div className="controls-grid">
        {controls.map((control) => (
          <button
            key={control.id}
            className="control-btn"
            onClick={() => handleControl(control.label)}
            style={{
              borderLeft: `4px solid ${control.color}`,
            }}
          >
            <span className="control-icon">{control.icon}</span>
            <span className="control-label">{control.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
