import React, { useState } from 'react';
import { Modal } from '../ui/Modal.tsx';
import { Button } from '../ui/Button.tsx';
import { Alert } from '../feedback/Alert.tsx';
import { useAuth } from '../../hooks/useAuth.ts';

type UserRole = 'student' | 'teacher' | 'parent' | 'admin';

interface SignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
  role: UserRole;
  agreeToTerms: boolean;
}

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (role: UserRole) => void;
}

export const SignUpModal: React.FC<SignUpModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const { login } = useAuth();
  const [formData, setFormData] = useState<SignUpFormData>({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    role: 'student',
    agreeToTerms: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleGoogleSignUp = async () => {
    setGoogleLoading(true);
    try {
      // Simulate Google OAuth flow
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Generate unique ID for the user
      const userId = `user_${Date.now()}`;
      
      // Log in with the complete user data
      login({
        id: userId,
        name: formData.fullName || 'Google User',
        email: formData.email,
        role: formData.role,
      });

      setSuccess(true);
      setTimeout(() => {
        onSuccess?.(formData.role);
        onClose();
        setSuccess(false);
        setFormData({
          email: '',
          password: '',
          confirmPassword: '',
          fullName: '',
          role: 'student',
          agreeToTerms: false,
        });
      }, 2000);
    } catch (err) {
      setError('Google sign-up failed. Please try again.');
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Validation
      if (!formData.fullName.trim()) {
        throw new Error('Full name is required');
      }
      if (!formData.role) {
        throw new Error('Please select your role');
      }
      if (!formData.email.includes('@')) {
        throw new Error('Valid email is required');
      }
      if (formData.password.length < 8) {
        throw new Error('Password must be at least 8 characters');
      }
      if (formData.password !== formData.confirmPassword) {
        throw new Error('Passwords do not match');
      }
      if (!formData.agreeToTerms) {
        throw new Error('Please agree to terms and conditions');
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Generate unique ID for the user
      const userId = `user_${Date.now()}`;
      
      // Log in with the complete user data
      login({
        id: userId,
        name: formData.fullName,
        email: formData.email,
        role: formData.role,
      });

      setSuccess(true);
      setTimeout(() => {
        onSuccess?.(formData.role);
        onClose();
        setSuccess(false);
        setFormData({
          email: '',
          password: '',
          confirmPassword: '',
          fullName: '',
          role: 'student',
          agreeToTerms: false,
        });
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      title="Create Your Account"
      onClose={onClose}
      size="md"
      footer={
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
            {loading ? '⏳ Creating...' : 'Sign Up'}
          </button>
        </>
      }
    >
      <style>{`
        .signup-form-wrapper {
          animation: fadeIn 300ms ease-out;
        }
        .google-btn {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 2px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          background: white;
          color: var(--text-primary);
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all var(--transition-base);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .google-btn:hover {
          background: var(--bg-tertiary);
          border-color: var(--primary-color);
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }
        .google-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
        .divider {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
        .divider::before,
        .divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--border-color);
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

      {success && (
        <div style={{ marginBottom: '1rem' }}>
          <Alert
            type="success"
            message="Account created! Redirecting to dashboard..."
          />
        </div>
      )}

      {!success && (
        <>
          <button
            type="button"
            className="google-btn"
            onClick={handleGoogleSignUp}
            disabled={googleLoading || loading}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            {googleLoading ? '⏳ Creating with Google...' : 'Sign up with Google'}
          </button>

          <div className="divider">or</div>
        </>
      )}

      <form style={{ display: success ? 'none' : 'block' }} className="signup-form-wrapper">
        <div className="form-group">
          <label className="form-label">� Select Your Role</label>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.75rem',
            marginBottom: '1rem'
          }}>
            {[
              { value: 'student' as UserRole, label: '🎓 Student', description: 'Learning progress & quizzes' },
              { value: 'teacher' as UserRole, label: '👨‍🏫 Teacher', description: 'Class control & assessments' },
              { value: 'parent' as UserRole, label: '👨‍👩‍👧 Parent', description: 'Child monitoring' },
              { value: 'admin' as UserRole, label: '⚙️ Admin', description: 'System management' }
            ].map((role) => (
              <button
                key={role.value}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, role: role.value }))}
                disabled={loading || success}
                style={{
                  padding: '0.75rem',
                  border: formData.role === role.value ? '2px solid #4f46e5' : '2px solid #e5e7eb',
                  borderRadius: '0.75rem',
                  background: formData.role === role.value ? '#f0f4ff' : 'white',
                  color: '#1f2937',
                  cursor: 'pointer',
                  transition: 'all 300ms ease',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  textAlign: 'left',
                  boxShadow: formData.role === role.value ? '0 4px 12px rgba(79, 70, 229, 0.15)' : 'none',
                  transform: formData.role === role.value ? 'translateY(-2px)' : 'none'
                }}
              >
                <div>{role.label}</div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>{role.description}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">�📝 Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="form-control"
            placeholder="John Doe"
            required
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label className="form-label">📧 Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            placeholder="you@example.com"
            required
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label className="form-label">🔐 Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            placeholder="At least 8 characters"
            required
            disabled={loading}
          />
          <small style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem', display: 'block' }}>
            Must contain at least 8 characters
          </small>
        </div>

        <div className="form-group">
          <label className="form-label">✓ Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="form-control"
            placeholder="Re-enter your password"
            required
            disabled={loading}
          />
        </div>

        <div className="form-checkbox">
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <label htmlFor="agreeToTerms" style={{ margin: 0 }}>
            I agree to <strong>Terms & Conditions</strong> and <strong>Privacy Policy</strong>
          </label>
        </div>
      </form>
    </Modal>
  );
};
