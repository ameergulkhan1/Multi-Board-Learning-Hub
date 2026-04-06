import React from 'react';

interface Material {
  id: string;
  title: string;
  subject: string;
  type: 'notes' | 'pdf' | 'video' | 'document';
  uploadDate: string;
  downloads: number;
}

interface Props {
  materials: Material[];
}

export const StudyMaterials: React.FC<Props> = ({ materials }) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'notes':
        return '📝';
      case 'pdf':
        return '📄';
      case 'video':
        return '🎥';
      case 'document':
        return '📋';
      default:
        return '📌';
    }
  };

  return (
    <div className="card dashboard-card">
      <h2 className="card-title">📖 Study Materials</h2>
      <div className="materials-table">
        <table>
          <thead>
            <tr>
              <th>Material</th>
              <th>Subject</th>
              <th>Type</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {materials.map((material) => (
              <tr key={material.id}>
                <td>{material.title}</td>
                <td>{material.subject}</td>
                <td>
                  <span className="type-badge">
                    {getTypeIcon(material.type)} {material.type}
                  </span>
                </td>
                <td>{material.uploadDate}</td>
                <td>
                  <button className="btn btn-sm btn-secondary">Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
