import React, { useState } from 'react';
import { MainLayout } from '../components/layout/MainLayout.tsx';
import { getRoleAwareSidebarItems } from '../config/sidebarConfig.ts';
import { useAuth } from '../hooks/useAuth.ts';

export const TextbookPage = () => {
  const { user } = useAuth();
  const sidebarItems = getRoleAwareSidebarItems('/textbook', user?.role);
  const [selectedSubject, setSelectedSubject] = useState<string>('all');

  // Conditionally render based on user role
  if (user?.role === 'teacher') {
    return <TeacherTextbookView sidebarItems={sidebarItems} />;
  }

  if (user?.role === 'parent') {
    return <ParentTextbookView sidebarItems={sidebarItems} />;
  }

  // Default student view
  return <StudentTextbookView sidebarItems={sidebarItems} selectedSubject={selectedSubject} setSelectedSubject={setSelectedSubject} />;
};

// TEACHER VIEW - Course Content Management
const TeacherTextbookView: React.FC<{ sidebarItems: any[] }> = ({ sidebarItems }) => {
  const [courses, setCourses] = useState<any[]>([
    { id: '1', subject: 'Mathematics', name: 'Algebra Fundamentals', chapters: 8, students: 42, lastUpdated: 'Mar 10' },
    { id: '2', subject: 'Science', name: 'Physics Basics', chapters: 6, students: 40, lastUpdated: 'Mar 8' },
    { id: '3', subject: 'English', name: 'Shakespeare Works', chapters: 10, students: 38, lastUpdated: 'Mar 5' },
  ]);

  const [uploadForm, setUploadForm] = useState({ subject: '', courseTitle: '', chapters: 0 });

  const handleUploadCourse = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCourse = {
      id: Date.now().toString(),
      subject: uploadForm.subject,
      name: uploadForm.courseTitle,
      chapters: uploadForm.chapters,
      students: 0,
      lastUpdated: 'Today',
    };
    setCourses([newCourse, ...courses]);
    alert('Course created successfully!');
    setUploadForm({ subject: '', courseTitle: '', chapters: 0 });
  };

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <style>{`
        .textbook-page {
          padding: 2rem;
          background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
          min-height: 100vh;
        }

        .page-header {
          margin-bottom: 3rem;
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

        .upload-section {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          margin-bottom: 3rem;
          box-shadow: 0 4px 15px rgba(79, 70, 229, 0.08);
          border-left: 4px solid #4f46e5;
        }

        .upload-section h2 {
          margin-top: 0;
          color: #1f2937;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #374151;
        }

        .form-group input,
        .form-group select {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid #e5e7eb;
          border-radius: 0.5rem;
          font-size: 1rem;
          transition: all 200ms ease;
        }

        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #4f46e5;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .btn-primary {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: white;
          padding: 0.75rem 2rem;
          border: none;
          border-radius: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 200ms ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(79, 70, 229, 0.3);
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }

        .course-card {
          background: white;
          border-radius: 1rem;
          padding: 1.75rem;
          box-shadow: 0 4px 15px rgba(79, 70, 229, 0.08);
          transition: all 300ms ease;
          border: 2px solid transparent;
        }

        .course-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(79, 70, 229, 0.15);
          border-color: #4f46e5;
        }

        .course-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 1rem;
        }

        .course-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1f2937;
        }

        .course-subject {
          font-size: 0.85rem;
          background: #f3f4f6;
          padding: 0.35rem 0.75rem;
          border-radius: 0.5rem;
          color: #6b7280;
        }

        .course-meta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          color: #6b7280;
        }

        .meta-item {
          background: #f9fafb;
          padding: 0.75rem;
          border-radius: 0.5rem;
        }

        .meta-label {
          font-size: 0.75rem;
          color: #9ca3af;
          text-transform: uppercase;
        }

        .meta-value {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1f2937;
          margin-top: 0.25rem;
        }

        .course-actions {
          display: flex;
          gap: 0.5rem;
        }

        .btn-edit, .btn-delete {
          flex: 1;
          padding: 0.6rem;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-weight: 600;
          transition: all 200ms ease;
        }

        .btn-edit {
          background: #dbeafe;
          color: #0c4a6e;
        }

        .btn-edit:hover {
          background: #bfdbfe;
          transform: translateY(-2px);
        }

        .btn-delete {
          background: #fee2e2;
          color: #7f1d1d;
        }

        .btn-delete:hover {
          background: #fecaca;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .textbook-page {
            padding: 1rem;
          }

          .page-header h1 {
            font-size: 1.75rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .courses-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="textbook-page">
        <div className="page-header">
          <h1>📚 Course Content Management</h1>
          <p>Create and manage course materials for your classes</p>
        </div>

        {/* Upload Course Form */}
        <div className="upload-section">
          <h2>Create New Course 📖</h2>
          <form onSubmit={handleUploadCourse}>
            <div className="form-row">
              <div className="form-group">
                <label>Subject</label>
                <select
                  value={uploadForm.subject}
                  onChange={(e) => setUploadForm({ ...uploadForm, subject: e.target.value })}
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Science">Science</option>
                  <option value="English">English</option>
                  <option value="History">History</option>
                  <option value="Geography">Geography</option>
                </select>
              </div>

              <div className="form-group">
                <label>Course Title</label>
                <input
                  type="text"
                  placeholder="e.g., Algebra Fundamentals"
                  value={uploadForm.courseTitle}
                  onChange={(e) => setUploadForm({ ...uploadForm, courseTitle: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Number of Chapters</label>
              <input
                type="number"
                min="1"
                max="20"
                value={uploadForm.chapters}
                onChange={(e) => setUploadForm({ ...uploadForm, chapters: parseInt(e.target.value) })}
                required
              />
            </div>

            <button type="submit" className="btn-primary">
              Create Course
            </button>
          </form>
        </div>

        {/* Courses List */}
        <div>
          <h2 style={{ marginBottom: '1.5rem' }}>Your Courses</h2>
          <div className="courses-grid">
            {courses.map((course) => (
              <div key={course.id} className="course-card">
                <div className="course-header">
                  <div>
                    <div className="course-title">{course.name}</div>
                    <div className="course-subject">{course.subject}</div>
                  </div>
                </div>

                <div className="course-meta">
                  <div className="meta-item">
                    <div className="meta-label">Chapters</div>
                    <div className="meta-value">{course.chapters}</div>
                  </div>
                  <div className="meta-item">
                    <div className="meta-label">Students</div>
                    <div className="meta-value">{course.students}</div>
                  </div>
                </div>

                <p style={{ color: '#9ca3af', fontSize: '0.9rem', margin: '0.5rem 0 1rem 0' }}>
                  Last updated: {course.lastUpdated}
                </p>

                <div className="course-actions">
                  <button className="btn-edit">✏️ Edit</button>
                  <button className="btn-delete">🗑️ Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

// PARENT VIEW - Child Learning Progress
const ParentTextbookView: React.FC<{ sidebarItems: any[] }> = ({ sidebarItems }) => {
  const childrenProgress = [
    { id: '1', name: 'Ahmed', subject: 'Mathematics', progress: 75, lastActivity: 'Today', status: '📈 On Track' },
    { id: '2', name: 'Ahmed', subject: 'Science', progress: 60, lastActivity: '2 days ago', status: '⚠️ Needs Help' },
    { id: '3', name: 'Ahmed', subject: 'English', progress: 85, lastActivity: 'Today', status: '✅ Excellent' },
  ];

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <style>{`
        .textbook-page {
          padding: 2rem;
          background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
          min-height: 100vh;
        }

        .page-header {
          margin-bottom: 3rem;
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

        .progress-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .progress-card {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 15px rgba(79, 70, 229, 0.08);
          transition: all 300ms ease;
          border-left: 4px solid #4f46e5;
        }

        .progress-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.15);
        }

        .child-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 0.5rem;
        }

        .subject-name {
          font-size: 0.9rem;
          color: #6b7280;
          margin-bottom: 1rem;
        }

        .progress-bar {
          width: 100%;
          height: 10px;
          background: #e5e7eb;
          border-radius: 5px;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #4f46e5, #7c3aed);
          transition: width 300ms ease;
        }

        .progress-text {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: #6b7280;
          margin-bottom: 1rem;
        }

        .status-badge {
          display: inline-block;
          padding: 0.4rem 0.8rem;
          border-radius: 0.5rem;
          background: #f0f4ff;
          color: #0c4a6e;
          font-size: 0.9rem;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .textbook-page {
            padding: 1rem;
          }

          .page-header h1 {
            font-size: 1.75rem;
          }

          .progress-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="textbook-page">
        <div className="page-header">
          <h1>📚 Learning Progress</h1>
          <p>Monitor your child's learning progress across all subjects</p>
        </div>

        <div className="progress-grid">
          {childrenProgress.map((item) => (
            <div key={item.id} className="progress-card">
              <div className="child-name">{item.name}</div>
              <div className="subject-name">📖 {item.subject}</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${item.progress}%` }} />
              </div>
              <div className="progress-text">
                <span>Progress</span>
                <span style={{ fontWeight: '700', color: '#1f2937' }}>{item.progress}%</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '1rem' }}>
                Last activity: {item.lastActivity}
              </div>
              <span className="status-badge">{item.status}</span>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

// STUDENT VIEW - Learn from Textbooks
const StudentTextbookView: React.FC<{ sidebarItems: any[]; selectedSubject: string; setSelectedSubject: (subject: string) => void }> = ({ sidebarItems, selectedSubject, setSelectedSubject }) => {
  const subjects = [
    { id: 'math', name: 'Mathematics', icon: '🔢', courses: 12 },
    { id: 'science', name: 'Science', icon: '🔬', courses: 18 },
    { id: 'english', name: 'English', icon: '📖', courses: 15 },
    { id: 'history', name: 'History', icon: '🏛️', courses: 10 },
    { id: 'geography', name: 'Geography', icon: '🌍', courses: 8 },
    { id: 'coding', name: 'Computer Science', icon: '💻', courses: 14 },
  ];

  const chapters = [
    { id: 1, subject: 'Math', title: 'Algebra Fundamentals', progress: 85, difficulty: 'Intermediate', lessons: 12 },
    { id: 2, subject: 'Science', title: 'Physics Basics', progress: 60, difficulty: 'Beginner', lessons: 8 },
    { id: 3, subject: 'English', title: 'Shakespeare Works', progress: 40, difficulty: 'Advanced', lessons: 15 },
    { id: 4, subject: 'Math', title: 'Calculus Intro', progress: 25, difficulty: 'Advanced', lessons: 20 },
    { id: 5, subject: 'Science', title: 'Biology Systems', progress: 70, difficulty: 'Intermediate', lessons: 10 },
    { id: 6, subject: 'History', title: 'Renaissance Era', progress: 55, difficulty: 'Beginner', lessons: 7 },
  ];

  const filteredChapters = selectedSubject === 'all' ? chapters : chapters.filter(c => c.subject === selectedSubject);

  const difficultyColors: Record<string, { bg: string; text: string }> = {
    'Beginner': { bg: '#d1fae5', text: '#065f46' },
    'Intermediate': { bg: '#dbeafe', text: '#0c4a6e' },
    'Advanced': { bg: '#fecaca', text: '#7f1d1d' },
  };

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <style>{`
        .textbook-page {
          padding: 2rem;
          background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
          min-height: 100vh;
        }

        .page-header {
          margin-bottom: 3rem;
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

        .subjects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .subject-btn {
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 1rem;
          padding: 1.25rem;
          cursor: pointer;
          text-align: center;
          transition: all 300ms ease;
          font-weight: 600;
        }

        .subject-btn:hover {
          border-color: #4f46e5;
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.15);
        }

        .subject-btn.active {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: white;
          border-color: #4f46e5;
        }

        .subject-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          display: block;
        }

        .subject-name {
          font-size: 0.9rem;
          display: block;
          margin-bottom: 0.25rem;
        }

        .subject-count {
          font-size: 0.75rem;
          opacity: 0.7;
        }

        .chapters-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .chapter-card {
          background: white;
          border-radius: 1.25rem;
          padding: 1.75rem;
          box-shadow: 0 4px 15px rgba(79, 70, 229, 0.08);
          transition: all 300ms ease;
          border: 2px solid transparent;
        }

        .chapter-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(79, 70, 229, 0.15);
          border-color: #4f46e5;
        }

        .chapter-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 1rem;
        }

        .chapter-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
          flex: 1;
        }

        .difficulty-badge {
          padding: 0.35rem 0.75rem;
          border-radius: 0.5rem;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          white-space: nowrap;
          margin-left: 0.5rem;
        }

        .chapter-meta {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          color: #6b7280;
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: #e5e7eb;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 0.75rem;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #4f46e5, #7c3aed);
          transition: width 300ms ease;
        }

        .progress-text {
          font-size: 0.85rem;
          color: #6b7280;
          margin-bottom: 1rem;
        }

        .chapter-btn {
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

        .chapter-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(79, 70, 229, 0.3);
        }

        @media (max-width: 768px) {
          .textbook-page {
            padding: 1rem;
          }

          .page-header h1 {
            font-size: 1.75rem;
          }

          .subjects-grid {
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          }

          .chapters-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="textbook-page">
        {/* Header */}
        <div className="page-header">
          <h1>📚 Smart Textbook Studio</h1>
          <p>Interactive learning materials and comprehensive study resources</p>
        </div>

        {/* Subject Filter */}
        <div className="subjects-grid">
          <button
            className={`subject-btn ${selectedSubject === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedSubject('all')}
          >
            <span className="subject-icon">📚</span>
            <span className="subject-name">All Subjects</span>
            <span className="subject-count">{chapters.length}</span>
          </button>
          {subjects.map((subject) => (
            <button
              key={subject.id}
              className={`subject-btn ${selectedSubject === subject.name ? 'active' : ''}`}
              onClick={() => setSelectedSubject(subject.name)}
            >
              <span className="subject-icon">{subject.icon}</span>
              <span className="subject-name">{subject.name}</span>
              <span className="subject-count">{subject.courses}</span>
            </button>
          ))}
        </div>

        {/* Chapters Grid */}
        <div className="chapters-grid">
          {filteredChapters.map((chapter) => (
            <div key={chapter.id} className="chapter-card">
              <div className="chapter-header">
                <h3 className="chapter-title">{chapter.title}</h3>
                <span
                  className="difficulty-badge"
                  style={{
                    background: difficultyColors[chapter.difficulty].bg,
                    color: difficultyColors[chapter.difficulty].text,
                  }}
                >
                  {chapter.difficulty}
                </span>
              </div>

              <div className="chapter-meta">
                <span>📖 {chapter.lessons} Lessons</span>
                <span>⏱️ ~{chapter.lessons * 15} mins</span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${chapter.progress}%` }}
                />
              </div>
              <div className="progress-text">{chapter.progress}% Complete</div>

              <button className="chapter-btn">Start Learning →</button>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};
