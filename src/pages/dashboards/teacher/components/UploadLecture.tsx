import React, { useState } from 'react';

interface Props {
  onUpload?: (data: LectureData) => void;
}

interface LectureData {
  title: string;
  subject: string;
  class: string;
  file: File | null;
  description: string;
}

export const UploadLecture: React.FC<Props> = ({ onUpload }) => {
  const [formData, setFormData] = useState<LectureData>({
    title: '',
    subject: '',
    class: '',
    file: null,
    description: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpload?.(formData);
    setFormData({ title: '', subject: '', class: '', file: null, description: '' });
  };

  return (
    <div className="card dashboard-card">
      <h2 className="card-title">📤 Upload New Lecture</h2>
      <form onSubmit={handleSubmit} className="upload-form">
        <div className="form-group">
          <label htmlFor="title">Lecture Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter lecture title"
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

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Brief description of the lecture"
            rows={3}
          />
        </div>

        <div className="form-group">
          <label htmlFor="file">Upload Video/File</label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            accept="video/*,.pdf,.doc,.docx"
            required
          />
          {formData.file && <p className="file-name">Selected: {formData.file.name}</p>}
        </div>

        <button type="submit" className="btn btn-primary btn-lg">
          Upload Lecture
        </button>
      </form>
    </div>
  );
};
