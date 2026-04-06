import React, { useState } from 'react';

interface ExamData {
  title: string;
  subject: string;
  class: string;
  duration: string;
  totalMarks: string;
  passingMarks: string;
  date: string;
  description: string;
}

interface Props {
  onCreate?: (data: ExamData) => void;
}

export const CreateExam: React.FC<Props> = ({ onCreate }) => {
  const [formData, setFormData] = useState<ExamData>({
    title: '',
    subject: '',
    class: '',
    duration: '60',
    totalMarks: '100',
    passingMarks: '40',
    date: '',
    description: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate?.(formData);
    setFormData({
      title: '',
      subject: '',
      class: '',
      duration: '60',
      totalMarks: '100',
      passingMarks: '40',
      date: '',
      description: '',
    });
  };

  return (
    <div className="card dashboard-card">
      <h2 className="card-title">📝 Create New Exam</h2>
      <form onSubmit={handleSubmit} className="exam-form">
        <div className="form-group">
          <label htmlFor="title">Exam Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="e.g., Mid-term Examination"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
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
            <label htmlFor="class">Class</label>
            <select
              id="class"
              name="class"
              value={formData.class}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Class</option>
              <option value="Class 9">Class 9</option>
              <option value="Class 10">Class 10</option>
              <option value="Class 11">Class 11</option>
              <option value="Class 12">Class 12</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Exam Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="duration">Duration (minutes)</label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
              min="10"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="totalMarks">Total Marks</label>
            <input
              type="number"
              id="totalMarks"
              name="totalMarks"
              value={formData.totalMarks}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="passingMarks">Passing Marks</label>
            <input
              type="number"
              id="passingMarks"
              name="passingMarks"
              value={formData.passingMarks}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Exam instructions and details"
            rows={3}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-lg">
          Create Exam
        </button>
      </form>
    </div>
  );
};
