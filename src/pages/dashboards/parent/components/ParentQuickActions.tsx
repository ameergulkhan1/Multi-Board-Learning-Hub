import React from 'react';

export const ParentQuickActions: React.FC = () => {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div className="section-header">⚡ Quick Actions</div>
      <div className="children-grid">
        <div style={{
          background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
          color: 'white',
          borderRadius: '1.25rem',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>📞</div>
          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: '700' }}>Contact Teacher</h3>
          <p style={{ margin: '0 0 1rem 0', opacity: 0.9 }}>Send message to teachers</p>
          <button style={{
            background: 'white',
            color: '#4f46e5',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.75rem',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'all 200ms ease'
          }} onClick={() => alert('Contact teacher...')}>Message</button>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          color: 'white',
          borderRadius: '1.25rem',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>📊</div>
          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: '700' }}>View Reports</h3>
          <p style={{ margin: '0 0 1rem 0', opacity: 0.9 }}>Detailed performance reports</p>
          <button style={{
            background: 'white',
            color: '#10b981',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.75rem',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'all 200ms ease'
          }} onClick={() => alert('View reports...')}>View</button>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
          color: 'white',
          borderRadius: '1.25rem',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🎯</div>
          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: '700' }}>Set Goals</h3>
          <p style={{ margin: '0 0 1rem 0', opacity: 0.9 }}>Create learning targets</p>
          <button style={{
            background: 'white',
            color: '#f59e0b',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.75rem',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'all 200ms ease'
          }} onClick={() => alert('Set goals...')}>Set</button>
        </div>
      </div>
    </div>
  );
};
