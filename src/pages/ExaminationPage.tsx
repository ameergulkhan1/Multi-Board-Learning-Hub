import React, { useState } from 'react';
import { MainLayout } from '../components/layout/MainLayout.tsx';
import { getRoleAwareSidebarItems } from '../config/sidebarConfig.ts';
import { useAuth } from '../hooks/useAuth.ts';

export const ExaminationPage = () => {
  const { user } = useAuth();
  const sidebarItems = getRoleAwareSidebarItems('/examination', user?.role);

  if (user?.role === 'teacher') {
    return <TeacherExaminationView sidebarItems={sidebarItems} />;
  }

  if (user?.role === 'parent') {
    return <ParentExaminationView sidebarItems={sidebarItems} />;
  }

  return <StudentExaminationView sidebarItems={sidebarItems} />;
};

// TEACHER VIEW - Create and manage exams
const TeacherExaminationView: React.FC<{ sidebarItems: any[] }> = ({ sidebarItems }) => {
  const [exams] = useState([
    { id: '1', title: 'Mathematics Final Exam', class: 'Class 10-A', date: 'Apr 15', students: 42, questions: 50 },
    { id: '2', title: 'Science Midterm', class: 'Class 10-B', date: 'Apr 22', students: 40, questions: 40 },
  ]);

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <div style={{ padding: '2rem', background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)', minHeight: '100vh' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📝 Exams Management</h1>
        <p style={{ color: '#666', marginBottom: '2rem' }}>Create, schedule, and manage exams for your classes</p>

        <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', marginBottom: '2rem', boxShadow: '0 4px 15px rgba(79, 70, 229, 0.08)', borderLeft: '4px solid #4f46e5' }}>
          <h2 style={{ marginTop: 0 }}>📖 Create New Exam</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <input type="text" placeholder="Exam Title" style={{ padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '0.5rem' }} />
            <select style={{ padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '0.5rem' }}>
              <option>Select Class</option>
              <option>Class 10-A</option>
              <option>Class 10-B</option>
            </select>
            <input type="date" style={{ padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '0.5rem' }} />
            <input type="number" placeholder="Total Questions" style={{ padding: '0.75rem', border: '2px solid #e5e7eb', borderRadius: '0.5rem' }} />
          </div>
          <button style={{ marginTop: '1rem', background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)', color: 'white', padding: '0.75rem 2rem', border: 'none', borderRadius: '0.5rem', fontWeight: '600', cursor: 'pointer' }}>
            Create Exam
          </button>
        </div>

        <h2>Your Exams</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {exams.map((exam) => (
            <div key={exam.id} style={{ background: 'white', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 4px 15px rgba(79, 70, 229, 0.08)' }}>
              <h3 style={{ margin: '0 0 0.5rem 0' }}>{exam.title}</h3>
              <p style={{ color: '#666', fontSize: '0.9rem', margin: '0.25rem 0' }}>{exam.class} • {exam.date}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                <div style={{ background: '#f9fafb', padding: '0.75rem', borderRadius: '0.5rem' }}>
                  <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>Students</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>{exam.students}</div>
                </div>
                <div style={{ background: '#f9fafb', padding: '0.75rem', borderRadius: '0.5rem' }}>
                  <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>Questions</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>{exam.questions}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                <button style={{ flex: 1, padding: '0.6rem', background: '#dbeafe', color: '#0c4a6e', border: 'none', borderRadius: '0.5rem', fontWeight: '600', cursor: 'pointer' }}>👁️ View</button>
                <button style={{ flex: 1, padding: '0.6rem', background: '#fee2e2', color: '#7f1d1d', border: 'none', borderRadius: '0.5rem', fontWeight: '600', cursor: 'pointer' }}>🗑️ Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

// PARENT VIEW - Track child's exam results
const ParentExaminationView: React.FC<{ sidebarItems: any[] }> = ({ sidebarItems }) => {
  const [results] = useState([
    { id: '1', exam: 'Mathematics Final', score: 85, total: 100, date: 'Apr 15', status: '✅ Passed' },
    { id: '2', exam: 'Science Midterm', score: 78, total: 100, date: 'Apr 22', status: '✅ Passed' },
  ]);

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <div style={{ padding: '2rem', background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)', minHeight: '100vh' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📝 Exam Results</h1>
        <p style={{ color: '#666', marginBottom: '2rem' }}>Track your child's exam performance and progress</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {results.map((result) => (
            <div key={result.id} style={{ background: 'white', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 4px 15px rgba(79, 70, 229, 0.08)', borderLeft: '4px solid #4f46e5' }}>
              <h3 style={{ margin: '0 0 0.75rem 0' }}>{result.exam}</h3>
              <div style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '1rem' }}>📅 {result.date}</div>
              <div style={{ background: '#f9fafb', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.8rem', color: '#9ca3af', marginBottom: '0.5rem' }}>Score</div>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: '#4f46e5' }}>{result.score}/{result.total}</div>
              </div>
              <div style={{ display: 'inline-block', padding: '0.4rem 0.8rem', borderRadius: '0.5rem', background: '#d1fae5', color: '#065f46', fontSize: '0.9rem', fontWeight: '600' }}>
                {result.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

// STUDENT VIEW - Take exams and view results
const StudentExaminationView: React.FC<{ sidebarItems: any[] }> = ({ sidebarItems }) => {
  const [activeTab, setActiveTab] = useState<string>('active');

  const examinations = [
    {
      id: 1,
      title: 'Mathematics Final Exam',
      subject: 'Mathematics',
      date: '2024-04-15',
      time: '10:00 AM',
      duration: 120,
      questions: 50,
      icon: '🔢',
      status: 'active',
      students: 156,
      totalMarks: 100,
    },
    {
      id: 2,
      title: 'Science Midterm',
      subject: 'Science',
      date: '2024-04-22',
      time: '2:00 PM',
      duration: 90,
      questions: 40,
      icon: '🔬',
      status: 'upcoming',
      students: 140,
      totalMarks: 80,
    },
    {
      id: 3,
      title: 'English Literature Quiz',
      subject: 'English',
      date: '2024-04-10',
      time: '11:00 AM',
      duration: 45,
      questions: 25,
      icon: '📖',
      status: 'completed',
      students: 152,
      totalMarks: 50,
    },
    {
      id: 4,
      title: 'History Assessment',
      subject: 'History',
      date: '2024-04-20',
      time: '3:30 PM',
      duration: 60,
      questions: 35,
      icon: '🏛️',
      status: 'upcoming',
      students: 138,
      totalMarks: 75,
    },
  ];

  const filteredExams = activeTab === 'all' ? examinations : examinations.filter(e => e.status === activeTab);

  const statusConfig: Record<string, { bg: string; text: string; icon: string }> = {
    active: { bg: '#dbeafe', text: '#0c4a6e', icon: '🔴' },
    upcoming: { bg: '#fed7aa', text: '#92400e', icon: '⏱️' },
    completed: { bg: '#d1fae5', text: '#065f46', icon: '✅' },
  };

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <style>{`
        .examination-page {
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

        .action-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .filter-tabs {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.5rem 1rem;
          border: 2px solid #e5e7eb;
          background: white;
          border-radius: 0.75rem;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.9rem;
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

        .create-btn {
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          border: none;
          border-radius: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 200ms ease;
        }

        .create-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(16, 185, 129, 0.3);
        }

        .exams-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 1.5rem;
        }

        .exam-card {
          background: white;
          border-radius: 1.25rem;
          padding: 1.75rem;
          box-shadow: 0 4px 15px rgba(79, 70, 229, 0.08);
          transition: all 300ms ease;
          border: 2px solid transparent;
        }

        .exam-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(79, 70, 229, 0.15);
          border-color: #4f46e5;
        }

        .exam-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 1rem;
        }

        .exam-icon-title {
          display: flex;
          align-items: start;
          gap: 1rem;
          flex: 1;
        }

        .exam-icon {
          font-size: 2rem;
        }

        .exam-title-group h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 0.25rem 0;
        }

        .exam-subject {
          font-size: 0.85rem;
          color: #6b7280;
        }

        .status-badge {
          padding: 0.35rem 0.75rem;
          border-radius: 0.5rem;
          font-size: 0.75rem;
          font-weight: 700;
          white-space: nowrap;
        }

        .exam-meta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin: 1.25rem 0;
          font-size: 0.9rem;
          color: #6b7280;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .exam-stats {
          background: linear-gradient(135deg, #f0f4ff 0%, #f5f3ff 100%);
          padding: 1rem;
          border-radius: 0.75rem;
          margin-bottom: 1rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .stat-box {
          text-align: center;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 900;
          color: #4f46e5;
        }

        .stat-label {
          font-size: 0.75rem;
          color: #6b7280;
          text-transform: uppercase;
        }

        .exam-btn-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }

        .exam-btn {
          padding: 0.75rem 1.25rem;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: white;
          border: none;
          border-radius: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 200ms ease;
          font-size: 0.9rem;
        }

        .exam-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(79, 70, 229, 0.3);
        }

        .exam-btn-secondary {
          background: white;
          border: 2px solid #e5e7eb;
          color: #1f2937;
        }

        .exam-btn-secondary:hover {
          border-color: #4f46e5;
        }

        @media (max-width: 768px) {
          .examination-page {
            padding: 1rem;
          }

          .page-header h1 {
            font-size: 1.75rem;
          }

          .action-bar {
            flex-direction: column;
            align-items: stretch;
          }

          .exams-grid {
            grid-template-columns: 1fr;
          }

          .exam-btn-group {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="examination-page">
        {/* Header */}
        <div className="page-header">
          <h1>📝 Examination Design Suite</h1>
          <p>Create, manage, schedule, and conduct examinations effectively</p>
        </div>

        {/* Action Bar */}
        <div className="action-bar">
          <div className="filter-tabs">
            <button
              className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All ({examinations.length})
            </button>
            <button
              className={`filter-btn ${activeTab === 'active' ? 'active' : ''}`}
              onClick={() => setActiveTab('active')}
            >
              Active ({examinations.filter(e => e.status === 'active').length})
            </button>
            <button
              className={`filter-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming ({examinations.filter(e => e.status === 'upcoming').length})
            </button>
            <button
              className={`filter-btn ${activeTab === 'completed' ? 'active' : ''}`}
              onClick={() => setActiveTab('completed')}
            >
              Completed ({examinations.filter(e => e.status === 'completed').length})
            </button>
          </div>
          <button className="create-btn">+ Create New Exam</button>
        </div>

        {/* Exams Grid */}
        <div className="exams-grid">
          {filteredExams.map((exam) => {
            const config = statusConfig[exam.status];
            return (
              <div key={exam.id} className="exam-card">
                <div className="exam-header">
                  <div className="exam-icon-title">
                    <span className="exam-icon">{exam.icon}</span>
                    <div className="exam-title-group">
                      <h3>{exam.title}</h3>
                      <span className="exam-subject">{exam.subject}</span>
                    </div>
                  </div>
                  <span
                    className="status-badge"
                    style={{
                      background: config.bg,
                      color: config.text,
                    }}
                  >
                    {config.icon} {exam.status.toUpperCase()}
                  </span>
                </div>

                <div className="exam-meta">
                  <div className="meta-item">
                    <span>📅</span>
                    <span>{exam.date}</span>
                  </div>
                  <div className="meta-item">
                    <span>⏰</span>
                    <span>{exam.time}</span>
                  </div>
                  <div className="meta-item">
                    <span>⏱️</span>
                    <span>{exam.duration} mins</span>
                  </div>
                  <div className="meta-item">
                    <span>❓</span>
                    <span>{exam.questions} Qs</span>
                  </div>
                </div>

                <div className="exam-stats">
                  <div className="stat-box">
                    <div className="stat-value">{exam.students}</div>
                    <div className="stat-label">Students</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-value">{exam.totalMarks}</div>
                    <div className="stat-label">Total Marks</div>
                  </div>
                </div>

                <div className="exam-btn-group">
                  <button className="exam-btn">
                    {exam.status === 'active' ? 'Ongoing →' :
                     exam.status === 'upcoming' ? 'Schedule' :
                     'View Results'}
                  </button>
                  <button className="exam-btn exam-btn-secondary">Manage</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
};
