import React, { useState } from 'react';
import { MainLayout } from '../../../components/layout/MainLayout.tsx';
import { getTeacherSidebarItems } from '../../../config/sidebarConfig.ts';
import type {} from './styles/TeacherDashboard.css';

export const TeacherDashboard = () => {
  const [teacherName] = useState('Mrs. Johnson');
  const [totalStudents] = useState(156);
  const [averageClassScore] = useState(82);

  const sidebarItems = getTeacherSidebarItems('/dashboard');

  const classes = [
    { id: '1', name: 'Class 10-A', subject: 'Mathematics', students: 42, averageScore: 85, pendingAssignments: 3 },
    { id: '2', name: 'Class 10-B', subject: 'Science', students: 40, averageScore: 79, pendingAssignments: 5 },
    { id: '3', name: 'Class 9-A', subject: 'Mathematics', students: 38, averageScore: 81, pendingAssignments: 2 },
  ];

  const studentProgress = [
    { id: '1', name: 'Ahmed Ali', class: 'Class 10-A', score: 92, attendance: 98, submitted: 15 },
    { id: '2', name: 'Fatima Khan', class: 'Class 10-A', score: 88, attendance: 96, submitted: 15 },
    { id: '3', name: 'Hassan Ali', class: 'Class 10-B', score: 75, attendance: 92, submitted: 13 },
    { id: '4', name: 'Aisha Ahmed', class: 'Class 10-B', score: 79, attendance: 94, submitted: 14 },
  ];

  const pendingSubmissions = [
    { id: '1', subject: 'Mathematics', assignment: 'Quadratic Equations', dueDate: 'Today', submissions: 35, pending: 5 },
    { id: '2', subject: 'Science', assignment: 'Lab Report', dueDate: 'Tomorrow', submissions: 38, pending: 2 },
    { id: '3', subject: 'History', assignment: 'Essay Analysis', dueDate: 'Mar 15', submissions: 32, pending: 8 },
  ];

  const [uploadedLectures, setUploadedLectures] = useState<any[]>([
    { id: '1', subject: 'Mathematics', title: 'Quadratic Equations Introduction', date: 'Mar 8' },
    { id: '2', subject: 'Science', title: 'Photosynthesis Process', date: 'Mar 7' },
  ]);

  const [createdExams, setCreatedExams] = useState<any[]>([
    { id: '1', subject: 'Mathematics', title: 'Mid-term Exam', date: 'Mar 20', questions: 30 },
    { id: '2', subject: 'Science', title: 'Chapter Quiz', date: 'Mar 15', questions: 20 },
  ]);

  const handleUploadLecture = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newLecture = { id: Date.now(), subject: formData.get('subject'), title: formData.get('title'), date: 'Today' };
    setUploadedLectures([newLecture, ...uploadedLectures]);
    alert(`Lecture uploaded successfully!`);
    e.currentTarget.reset();
  };

  const handleCreateExam = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newExam = { id: Date.now(), subject: formData.get('subject'), title: formData.get('title'), questions: formData.get('questions'), date: 'Mar 20' };
    setCreatedExams([newExam, ...createdExams]);
    alert(`Exam created successfully!`);
    e.currentTarget.reset();
  };

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <div className="dashboard-container">
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Welcome, {teacherName} 👋</h1>
          <p style={{ color: '#666', fontSize: '1rem' }}>Manage classes, upload lectures, create exams, and review student assignments</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ backgroundColor: '#f0f4ff', padding: '1.5rem', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>Total Students</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6', marginTop: '0.5rem' }}>{totalStudents}</div>
          </div>
          <div style={{ backgroundColor: '#f0fdf4', padding: '1.5rem', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>Average Score</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981', marginTop: '0.5rem' }}>{averageClassScore}%</div>
          </div>
          <div style={{ backgroundColor: '#fef3c7', padding: '1.5rem', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>Classes</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b', marginTop: '0.5rem' }}>{classes.length}</div>
          </div>
          <div style={{ backgroundColor: '#fce7f3', padding: '1.5rem', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>Pending Reviews</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ec4899', marginTop: '0.5rem' }}>5</div>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>👥 My Classes</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {classes.map((cls) => (
              <div key={cls.id} style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', padding: '1.5rem', borderRadius: '8px' }}>
                <h3 style={{ fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>{cls.name}</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', margin: '0.5rem 0' }}>Subject: {cls.subject}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                  <div style={{ backgroundColor: '#f0f4ff', padding: '0.75rem', borderRadius: '4px' }}>
                    <p style={{ fontSize: '0.8rem', color: '#666', margin: 0 }}>Students</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3b82f6', margin: '0.25rem 0 0 0' }}>{cls.students}</p>
                  </div>
                  <div style={{ backgroundColor: '#f0fdf4', padding: '0.75rem', borderRadius: '4px' }}>
                    <p style={{ fontSize: '0.8rem', color: '#666', margin: 0 }}>Avg Score</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981', margin: '0.25rem 0 0 0' }}>{cls.averageScore}%</p>
                  </div>
                </div>
                <button style={{ width: '100%', backgroundColor: '#3b82f6', color: 'white', padding: '0.5rem', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '1rem' }}>View Class</button>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>📹 Upload Lecture</h2>
          <div style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem' }}>
            <form onSubmit={handleUploadLecture} style={{ display: 'grid', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Subject</label>
                <input type="text" name="subject" placeholder="e.g., Mathematics" style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '4px', boxSizing: 'border-box' }} required />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Lecture Title</label>
                <input type="text" name="title" placeholder="e.g., Quadratic Equations" style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '4px', boxSizing: 'border-box' }} required />
              </div>
              <button type="submit" style={{ backgroundColor: '#10b981', color: 'white', padding: '0.75rem', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Upload Lecture</button>
            </form>
          </div>
          <div style={{ backgroundColor: '#f3f4f6', borderRadius: '8px', overflow: 'hidden' }}>
            {uploadedLectures.map((lecture) => (
              <div key={lecture.id} style={{ padding: '1rem', borderBottom: '1px solid #d1d5db' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>{lecture.title}</p>
                    <p style={{ color: '#666', fontSize: '0.85rem', margin: 0 }}>{lecture.subject} • {lecture.date}</p>
                  </div>
                  <button style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>View</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>📝 Create Exam</h2>
          <div style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem' }}>
            <form onSubmit={handleCreateExam} style={{ display: 'grid', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Subject</label>
                <input type="text" name="subject" placeholder="e.g., Science" style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '4px', boxSizing: 'border-box' }} required />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Exam Title</label>
                <input type="text" name="title" placeholder="e.g., Mid-term Exam" style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '4px', boxSizing: 'border-box' }} required />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Number of Questions</label>
                <input type="number" name="questions" placeholder="30" style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '4px', boxSizing: 'border-box' }} required />
              </div>
              <button type="submit" style={{ backgroundColor: '#f59e0b', color: 'white', padding: '0.75rem', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Create Exam</button>
            </form>
          </div>
          <div style={{ backgroundColor: '#f3f4f6', borderRadius: '8px', overflow: 'hidden' }}>
            {createdExams.map((exam) => (
              <div key={exam.id} style={{ padding: '1rem', borderBottom: '1px solid #d1d5db' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>{exam.title}</p>
                    <p style={{ color: '#666', fontSize: '0.85rem', margin: 0 }}>{exam.subject} • {exam.questions} Questions • {exam.date}</p>
                  </div>
                  <button style={{ backgroundColor: '#f59e0b', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Edit</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>✅ Pending Submissions</h2>
          <div style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ backgroundColor: '#f3f4f6' }}>
                <tr>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Assignment</th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Subject</th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Due Date</th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Submitted</th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Pending</th>
                </tr>
              </thead>
              <tbody>
                {pendingSubmissions.map((submission) => (
                  <tr key={submission.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem' }}>{submission.assignment}</td>
                    <td style={{ padding: '1rem' }}>{submission.subject}</td>
                    <td style={{ padding: '1rem' }}>{submission.dueDate}</td>
                    <td style={{ padding: '1rem', color: '#10b981', fontWeight: 'bold' }}>{submission.submissions}</td>
                    <td style={{ padding: '1rem', color: '#f59e0b', fontWeight: 'bold' }}>{submission.pending}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>📊 Student Progress</h2>
          <div style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ backgroundColor: '#f3f4f6' }}>
                <tr>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Student Name</th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Class</th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Score</th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Attendance</th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Submitted</th>
                </tr>
              </thead>
              <tbody>
                {studentProgress.map((student) => (
                  <tr key={student.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem' }}>{student.name}</td>
                    <td style={{ padding: '1rem' }}>{student.class}</td>
                    <td style={{ padding: '1rem', color: '#3b82f6', fontWeight: 'bold' }}>{student.score}%</td>
                    <td style={{ padding: '1rem' }}>{student.attendance}%</td>
                    <td style={{ padding: '1rem' }}>{student.submitted}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TeacherDashboard;
