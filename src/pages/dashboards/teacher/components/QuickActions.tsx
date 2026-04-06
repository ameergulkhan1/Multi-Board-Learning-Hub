import React from 'react';

export const QuickActions: React.FC = () => {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div className="section-header">⚡ Quick Actions</div>
      <div className="classes-grid">
        <div className="class-card" style={{
          background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
          color: 'white',
          borderLeft: 'none'
        }}>
          <h3 className="class-name" style={{ color: 'white' }}>📊 Create Exam</h3>
          <p className="class-subject" style={{ color: 'rgba(255,255,255,0.8)' }}>Set up a new test or quiz</p>
          <button style={{
            background: 'white',
            color: '#4f46e5',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.75rem',
            fontWeight: '700',
            cursor: 'pointer',
            marginTop: '1rem',
            transition: 'all 200ms ease'
          }} onClick={() => alert('Create exam...')}>Create Now</button>
        </div>

        <div className="class-card" style={{
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          color: 'white',
          borderLeft: 'none'
        }}>
          <h3 className="class-name" style={{ color: 'white' }}>✅ Give Assignment</h3>
          <p className="class-subject" style={{ color: 'rgba(255,255,255,0.8)' }}>Assign homework to students</p>
          <button style={{
            background: 'white',
            color: '#10b981',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.75rem',
            fontWeight: '700',
            cursor: 'pointer',
            marginTop: '1rem',
            transition: 'all 200ms ease'
          }} onClick={() => alert('Give assignment...')}>Assign</button>
        </div>

        <div className="class-card" style={{
          background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
          color: 'white',
          borderLeft: 'none'
        }}>
          <h3 className="class-name" style={{ color: 'white' }}>📢 Send Notice</h3>
          <p className="class-subject" style={{ color: 'rgba(255,255,255,0.8)' }}>Communicate with students & parents</p>
          <button style={{
            background: 'white',
            color: '#f59e0b',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.75rem',
            fontWeight: '700',
            cursor: 'pointer',
            marginTop: '1rem',
            transition: 'all 200ms ease'
          }} onClick={() => alert('Send notice...')}>Send</button>
        </div>
      </div>
    </div>
  );
};
