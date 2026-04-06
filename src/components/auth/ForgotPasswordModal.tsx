import React, { useState } from 'react';
import { Modal } from '../ui/Modal.tsx';
import { Alert } from '../feedback/Alert.tsx';

interface ForgotPasswordFormData {
  email: string;
}

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick?: () => void;
}

export const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({
  isOpen,
  onClose,
  onLoginClick,
}) => {
  const [formData, setFormData] = useState<ForgotPasswordFormData>({
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData({ email: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (!formData.email) throw new Error('Email is required');
      if (!formData.email.includes('@')) throw new Error('Invalid email format');

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSuccess(true);
      setTimeout(() => {
        onClose();
        setSuccess(false);
        setFormData({ email: '' });
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      title="Reset Your Password"
      onClose={onClose}
      size="sm"
      footer={
        !success && (
          <>
            <button className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button
              className="btn btn-primary"
              onClick={handleSubmit}
              disabled={loading}
              style={{
                minWidth: '140px'
              }}
            >
              {loading ? '⏳ Sending...' : 'Send Reset Link'}
            </button>
          </>
        )
      }
    >
      <style>{`
        .forgot-password-wrapper {
          animation: fadeIn 300ms ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      {error && (
        <div style={{ marginBottom: '1rem' }}>
          <Alert type="danger" message={error} />
        </div>
      )}

      {success ? (
        <div className="forgot-password-wrapper" style={{ textAlign: 'center', padding: '1rem 0' }}>
          <Alert
            type="success"
            message="✓ Password reset link sent! Check your email inbox."
          />
          <p style={{ color: 'var(--text-secondary)', marginTop: '1.25rem', fontSize: '0.95rem', lineHeight: '1.7' }}>
            We've sent a password reset link to <strong>{formData.email}</strong>. 
            Please check your inbox and follow the instructions to reset your password.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '1rem' }}>
            Didn't receive the email? Check your spam folder or try again.
          </p>
        </div>
      ) : (
        <form className="forgot-password-wrapper">
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
            Enter your email address and we'll send you a link to reset your password.
          </p>

          <div className="form-group">
            <label className="form-label">📧 Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder="your@email.com"
              required
              disabled={loading}
            />
          </div>
        </form>
      )}

      {success && (
        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', marginTop: '1.5rem', textAlign: 'center' }}>
          <button
            className="btn btn-secondary"
            style={{
              width: '100%'
            }}
            onClick={onLoginClick}
          >
            Back to Login
          </button>
        </div>
      )}

      {!success && (
        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', marginTop: '1.5rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
            Remember your password?
          </p>
          <button
            className="btn btn-secondary"
            style={{
              width: '100%'
            }}
            onClick={onLoginClick}
          >
            Back to Login
          </button>
        </div>
      )}
    </Modal>
  );
};
