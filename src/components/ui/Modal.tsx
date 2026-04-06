import React from 'react';

interface ModalProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  children,
  onClose,
  footer,
  size = 'md',
}) => {
  if (!isOpen) return null;

  const maxWidth =
    size === 'sm' ? '420px' : size === 'lg' ? '900px' : '600px';

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          backdropFilter: 'blur(4px)',
          animation: 'fadeIn 250ms ease-out',
        }}
        onClick={onClose}
      >
        <div
          style={{
            backgroundColor: 'var(--bg-primary)',
            borderRadius: '1rem',
            boxShadow: 'var(--shadow-xl)',
            maxWidth,
            width: '92%',
            maxHeight: '90vh',
            overflow: 'auto',
            animation: 'slideUp 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1.75rem 2rem',
              borderBottom: '1px solid var(--border-color)',
              background: 'linear-gradient(135deg, #f9fafb 0%, #fff 100%)',
            }}
          >
            <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>{title}</h2>
            <button
              className="btn btn-sm"
              onClick={onClose}
              style={{
                background: 'var(--bg-tertiary)',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>
          </div>

          <div style={{ padding: '2rem' }}>
            <style>{`
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              @keyframes slideUp {
                from { 
                  opacity: 0;
                  transform: translateY(20px);
                }
                to { 
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>
            {children}
          </div>

          {footer && (
            <div
              style={{
                padding: '1.5rem 2rem',
                borderTop: '1px solid var(--border-color)',
                display: 'flex',
                gap: 'var(--spacing-md)',
                justifyContent: 'flex-end',
                background: 'linear-gradient(135deg, #f9fafb 0%, #fff 100%)',
                borderBottomLeftRadius: '1rem',
                borderBottomRightRadius: '1rem',
              }}
            >
              {footer}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
