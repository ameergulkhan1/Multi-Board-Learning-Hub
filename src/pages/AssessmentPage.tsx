import React, { useState } from 'react';
import { MainLayout } from '../components/layout/MainLayout.tsx';
import { getRoleAwareSidebarItems } from '../config/sidebarConfig.ts';
import { useAuth } from '../hooks/useAuth.ts';

export const AssessmentPage = () => {
  const { user } = useAuth();
  const sidebarItems = getRoleAwareSidebarItems('/assessment', user?.role);

  // Conditionally render based on user role
  if (user?.role === 'teacher') {
    return <TeacherAssessmentView sidebarItems={sidebarItems} />;
  }

  if (user?.role === 'parent') {
    return <ParentAssessmentView sidebarItems={sidebarItems} />;
  }

  // Default student view
  return <StudentAssessmentView sidebarItems={sidebarItems} />;
};

// TEACHER VIEW - Create and manage assignments
const TeacherAssessmentView: React.FC<{ sidebarItems: any[] }> = ({ sidebarItems }) => {
  const [assignments, setAssignments] = useState<any[]>([
    { id: '1', title: 'Algebra Problem Set', subject: 'Math', class: 'Class 10-A', submitted: 38, total: 42, dueDate: 'Mar 20' },
    { id: '2', title: 'Science Lab Report', subject: 'Science', class: 'Class 10-B', submitted: 35, total: 40, dueDate: 'Mar 22' },
  ]);

  const [createForm, setCreateForm] = useState({ title: '', subject: '', class: '', dueDate: '' });

  const handleCreateAssignment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newAssignment = {
      id: Date.now().toString(),
      title: createForm.title,
      subject: createForm.subject,
      class: createForm.class,
      submitted: 0,
      total: 40,
      dueDate: createForm.dueDate,
    };
    setAssignments([newAssignment, ...assignments]);
    alert('Assignment created successfully!');
    setCreateForm({ title: '', subject: '', class: '', dueDate: '' });
  };

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <div style={{ padding: '2rem', background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)', minHeight: '100vh' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📋 Assignments Management</h1>
          <p style={{ color: '#666', fontSize: '1rem' }}>Create, manage, and grade student assignments</p>
        </div>

        {/* Create Assignment Form */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', marginBottom: '2rem', borderLeft: '4px solid #4f46e5', boxShadow: '0 4px 15px rgba(79, 70, 229, 0.08)' }}>
          <h2 style={{ marginTop: 0 }}>Create New Assignment</h2>
          <form onSubmit={handleCreateAssignment}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Assignment Title</label>
                <input
                  type="text"
                  placeholder="e.g., Algebra Problem Set"
                  value={createForm.title}
                  onChange={(e) => setCreateForm({ ...createForm, title: e.target.value })}
                  required
                  style={{ width: '100%', padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '1rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Subject</label>
                <select
                  value={createForm.subject}
                  onChange={(e) => setCreateForm({ ...createForm, subject: e.target.value })}
                  required
                  style={{ width: '100%', padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '1rem' }}
                >
                  <option value="">Select Subject</option>
                  <option value="Math">Mathematics</option>
                  <option value="Science">Science</option>
                  <option value="English">English</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Class</label>
                <select
                  value={createForm.class}
                  onChange={(e) => setCreateForm({ ...createForm, class: e.target.value })}
                  required
                  style={{ width: '100%', padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '1rem' }}
                >
                  <option value="">Select Class</option>
                  <option value="Class 10-A">Class 10-A</option>
                  <option value="Class 10-B">Class 10-B</option>
                  <option value="Class 9-A">Class 9-A</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Due Date</label>
                <input
                  type="date"
                  value={createForm.dueDate}
                  onChange={(e) => setCreateForm({ ...createForm, dueDate: e.target.value })}
                  required
                  style={{ width: '100%', padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '1rem' }}
                />
              </div>
            </div>

            <button
              type="submit"
              style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)', color: 'white', padding: '0.75rem 2rem', border: 'none', borderRadius: '0.5rem', fontWeight: '600', cursor: 'pointer' }}
            >
              Create Assignment
            </button>
          </form>
        </div>

        {/* Assignments List */}
        <div>
          <h2 style={{ marginBottom: '1.5rem' }}>Active Assignments</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {assignments.map((assignment) => (
              <div key={assignment.id} style={{ background: 'white', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 4px 15px rgba(79, 70, 229, 0.08)', transition: 'all 300ms ease', border: '2px solid transparent',  cursor: 'pointer' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(79, 70, 229, 0.15)'; e.currentTarget.style.borderColor = '#4f46e5'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(79, 70, 229, 0.08)'; e.currentTarget.style.borderColor = 'transparent'; }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1f2937', margin: '0 0 0.5rem 0' }}>{assignment.title}</h3>
                <div style={{ fontSize: '0.85rem', color: '#9ca3af', marginBottom: '1rem' }}>
                  <div>{assignment.subject} • {assignment.class}</div>
                  <div>Due: {assignment.dueDate}</div>
                </div>
                <div style={{ background: '#f9fafb', padding: '0.75rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.75rem', color: '#9ca3af', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Submissions</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937' }}>{assignment.submitted}/{assignment.total}</div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button style={{ flex: 1, padding: '0.6rem', background: '#dbeafe', color: '#0c4a6e', border: 'none', borderRadius: '0.5rem', fontWeight: '600', cursor: 'pointer' }}>👁️ View</button>
                  <button style={{ flex: 1, padding: '0.6rem', background: '#fee2e2', color: '#7f1d1d', border: 'none', borderRadius: '0.5rem', fontWeight: '600', cursor: 'pointer' }}>🗑️ Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

// PARENT VIEW - Monitor Assignments
const ParentAssessmentView: React.FC<{ sidebarItems: any[] }> = ({ sidebarItems }) => {
  const childAssignments = [
    { id: '1', subject: 'Math', title: 'Algebra Problem Set', dueDate: 'Mar 20', status: 'pending', submissionStatus: '⏳ Not Submitted' },
    { id: '2', subject: 'Science', title: 'Lab Report', dueDate: 'Mar 22', status: 'pending', submissionStatus: '⏳ Not Submitted' },
    { id: '3', subject: 'English', title: 'Essay Writing', dueDate: 'Mar 18', status: 'completed', submissionStatus: '✅ Submitted' },
  ];

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <div style={{ padding: '2rem', background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)', minHeight: '100vh' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📋 Child's Assignments</h1>
          <p style={{ color: '#666', fontSize: '1rem' }}>Track your child's assignments and submissions</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {childAssignments.map((assignment) => (
            <div key={assignment.id} style={{ background: 'white', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 4px 15px rgba(79, 70, 229, 0.08)', borderLeft: '4px solid #4f46e5' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#1f2937', margin: 0 }}>{assignment.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#6b7280', margin: '0.25rem 0 0 0' }}>{assignment.subject}</p>
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#6b7280', margin: '0.5rem 0' }}>📅 Due: {assignment.dueDate}</p>
              <div style={{ display: 'inline-block', padding: '0.4rem 0.8rem', borderRadius: '0.5rem', background: assignment.status === 'completed' ? '#d1fae5' : '#fed7aa', color: assignment.status === 'completed' ? '#065f46' : '#92400e', fontSize: '0.9rem', fontWeight: '600' }}>
                {assignment.submissionStatus}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

// STUDENT VIEW - Take assessments
const StudentAssessmentView: React.FC<{ sidebarItems: any[] }> = ({ sidebarItems }) => {
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const assessments = [
    { id: 1, title: 'Mathematics Quiz 1', subject: 'Math', questions: 20, timeLimit: 30, status: 'completed', score: 85, passedOn: '2024-04-01' },
    { id: 2, title: 'Science Assessment', subject: 'Science', questions: 25, timeLimit: 45, status: 'in_progress', score: null, startedOn: '2024-04-02' },
    { id: 3, title: 'English Test', subject: 'English', questions: 15, timeLimit: 20, status: 'pending', score: null, dueOn: '2024-04-05' },
    { id: 4, title: 'Physics Exam', subject: 'Science', questions: 30, timeLimit: 60, status: 'completed', score: 92, passedOn: '2024-03-28' },
    { id: 5, title: 'History Quiz', subject: 'History', questions: 18, timeLimit: 25, status: 'pending', score: null, dueOn: '2024-04-06' },
    { id: 6, title: 'Chemistry Lab Report', subject: 'Science', questions: 5, timeLimit: 120, status: 'in_progress', score: null, startedOn: '2024-04-01' },
  ];

  const filteredAssessments = filterStatus === 'all' ? assessments : assessments.filter(a => a.status === filterStatus);

  const statusConfig: Record<string, { bg: string; text: string; icon: string }> = {
    completed: { bg: '#d1fae5', text: '#065f46', icon: '✅' },
    in_progress: { bg: '#dbeafe', text: '#0c4a6e', icon: '⏳' },
    pending: { bg: '#fed7aa', text: '#92400e', icon: '⏱️' },
  };

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <style>{`
        .assessment-page {
          padding: 2rem;
          background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
          min-height: 100vh;
        }

        .page-header {
          margin-bottom: 2.5rem;
        }

        .page-header h1 {
          font-size: 2.5rem;
          font-weight: 900;
          color: #1f2937;
          margin: 0 0 0.5rem 0;
        }

        .page-header p {
          font-size: 1.1rem;
          color: #6b7280;
          margin: 0;
        }

        .filter-tabs {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.75rem 1.5rem;
          border: 2px solid #e5e7eb;
          background: white;
          border-radius: 0.75rem;
          cursor: pointer;
          font-weight: 600;
          transition: all 200ms ease;
        }

        .filter-btn:hover {
          border-color: #4f46e5;
        }

        .filter-btn.active {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: white;
          border-color: #4f46e5;
        }

        .assessments-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 1.5rem;
        }

        .assessment-card {
          background: white;
          border-radius: 1.25rem;
          padding: 1.75rem;
          box-shadow: 0 4px 15px rgba(79, 70, 229, 0.08);
          transition: all 300ms ease;
          border: 2px solid transparent;
        }

        .assessment-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(79, 70, 229, 0.15);
          border-color: #4f46e5;
        }

        .assessment-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 1rem;
        }

        .assessment-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
          flex: 1;
        }

        .status-badge {
          padding: 0.5rem 0.75rem;
          border-radius: 0.5rem;
          font-size: 0.75rem;
          font-weight: 700;
          white-space: nowrap;
          margin-left: 0.5rem;
        }

        .assessment-meta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1.25rem;
          font-size: 0.9rem;
          color: #6b7280;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .score-section {
          background: linear-gradient(135deg, #f0f4ff 0%, #f5f3ff 100%);
          padding: 1rem;
          border-radius: 0.75rem;
          margin-bottom: 1rem;
          text-align: center;
        }

        .score-display {
          font-size: 2rem;
          font-weight: 900;
          color: #4f46e5;
        }

        .score-label {
          font-size: 0.75rem;
          color: #6b7280;
          text-transform: uppercase;
        }

        .assessment-btn {
          width: 100%;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: white;
          border: none;
          border-radius: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 200ms ease;
        }

        .assessment-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(79, 70, 229, 0.3);
        }

        @media (max-width: 768px) {
          .assessment-page {
            padding: 1rem;
          }

          .page-header h1 {
            font-size: 1.75rem;
          }

          .assessments-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="assessment-page">
        {/* Header */}
        <div className="page-header">
          <h1>✅ Micro-Assessment Console</h1>
          <p>Track and complete your assessments to validate your learning</p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          <button
            className={`filter-btn ${filterStatus === 'all' ? 'active' : ''}`}
            onClick={() => setFilterStatus('all')}
          >
            All ({assessments.length})
          </button>
          <button
            className={`filter-btn ${filterStatus === 'pending' ? 'active' : ''}`}
            onClick={() => setFilterStatus('pending')}
          >
            Pending ({assessments.filter(a => a.status === 'pending').length})
          </button>
          <button
            className={`filter-btn ${filterStatus === 'in_progress' ? 'active' : ''}`}
            onClick={() => setFilterStatus('in_progress')}
          >
            In Progress ({assessments.filter(a => a.status === 'in_progress').length})
          </button>
          <button
            className={`filter-btn ${filterStatus === 'completed' ? 'active' : ''}`}
            onClick={() => setFilterStatus('completed')}
          >
            Completed ({assessments.filter(a => a.status === 'completed').length})
          </button>
        </div>

        {/* Assessments Grid */}
        <div className="assessments-list">
          {filteredAssessments.map((assessment) => {
            const config = statusConfig[assessment.status];
            return (
              <div key={assessment.id} className="assessment-card">
                <div className="assessment-header">
                  <h3 className="assessment-title">{assessment.title}</h3>
                  <span
                    className="status-badge"
                    style={{
                      background: config.bg,
                      color: config.text,
                    }}
                  >
                    {config.icon} {assessment.status.replace('_', ' ').toUpperCase()}
                  </span>
                </div>

                <div className="assessment-meta">
                  <div className="meta-item">
                    <span>📚</span>
                    <span>{assessment.subject}</span>
                  </div>
                  <div className="meta-item">
                    <span>❓</span>
                    <span>{assessment.questions} Questions</span>
                  </div>
                  <div className="meta-item">
                    <span>⏱️</span>
                    <span>{assessment.timeLimit} mins</span>
                  </div>
                  <div className="meta-item">
                    <span>📊</span>
                    <span>Pass: 70%+</span>
                  </div>
                </div>

                {assessment.score !== null && (
                  <div className="score-section">
                    <div className="score-display">{assessment.score}%</div>
                    <div className="score-label">Your Score</div>
                  </div>
                )}

                <button className="assessment-btn">
                  {assessment.status === 'completed' ? 'Review Results' :
                   assessment.status === 'in_progress' ? 'Continue →' :
                   'Start Assessment →'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
};
