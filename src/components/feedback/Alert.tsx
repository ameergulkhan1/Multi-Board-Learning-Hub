import React from 'react';

interface AlertProps {
  type?: 'success' | 'danger' | 'warning' | 'info';
  title?: string;
  message: string;
  onClose?: () => void;
}

export const Alert: React.FC<AlertProps> = ({
  type = 'info',
  title,
  message,
  onClose,
}) => {
  return (
    <div className={`alert alert-${type}`}>
      {title && <strong>{title}</strong>}
      <p>{message}</p>
      {onClose && (
        <button
          className="btn btn-sm"
          onClick={onClose}
          style={{ marginTop: '0.5rem' }}
        >
          Close
        </button>
      )}
    </div>
  );
};
