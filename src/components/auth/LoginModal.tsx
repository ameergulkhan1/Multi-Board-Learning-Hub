import React, { useState } from 'react';
import { Modal } from '../ui/Modal.tsx';
import { Alert } from '../feedback/Alert.tsx';
import { useAuth } from '../../hooks/useAuth.ts';

type UserRole = 'student' | 'teacher' | 'parent' | 'admin';

interface LoginFormData {
  email: string;
  password: string;
  role: UserRole;
  rememberMe: boolean;
}

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (role: UserRole) => void;
  onSignUpClick?: () => void;
  onForgotPasswordClick?: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  onSignUpClick,
  onForgotPasswordClick,
}) => {
  const { login } = useAuth();
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    role: 'student',
    rememberMe: false,
  });
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    try {
      // Simulate Google OAuth flow
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Generate unique ID for the user
      const userId = `user_${Date.now()}`;
      
      // Log in with the complete user data
      login({
        id: userId,
        name: 'Google User',
        email: formData.email,
        role: formData.role,
      });

      setSuccess(true);
      setTimeout(() => {
        onSuccess?.(formData.role);
        onClose();
        setSuccess(false);
        setFormData({ email: '', password: '', role: 'student', rememberMe: false });
      }, 1500);
    } catch (err) {
      setError('Google login failed. Please try again.');
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (!formData.email) throw new Error('Email is required');
      if (!formData.password) throw new Error('Password is required');
      if (!formData.role) throw new Error('Please select your role');

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Generate unique ID for the user
      const userId = `user_${Date.now()}`;
      
      // Log in with the complete user data
      login({
        id: userId,
        name: formData.email.split('@')[0], // Use email prefix as name for demo
        email: formData.email,
        role: formData.role,
      });

      setSuccess(true);
      setTimeout(() => {
        onSuccess?.(formData.role);
        onClose();
        setSuccess(false);
        setFormData({ email: '', password: '', role: 'student', rememberMe: false });
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      title="Welcome Back"
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
              minWidth: '120px'
            }}
          >
            {loading ? '⏳ Logging in...' : 'Login'}
          </button>
        </>
      }
    >
      <style>{`
        .login-form-wrapper {
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
        .password-recovery-link {
          display: inline-block;
          color: var(--primary-color);
          font-size: 0.95rem;
          font-weight: 500;
          transition: color var(--transition-fast);
        }
        .password-recovery-link:hover {
          color: var(--primary-dark);
          text-decoration: underline;
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
          <Alert type="success" message="Login successful! Redirecting..." />
        </div>
      )}

      {!success && (
        <>
          <button
            type="button"
            className="google-btn"
            onClick={handleGoogleLogin}
            disabled={googleLoading || loading}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            {googleLoading ? '⏳ Signing in with Google...' : 'Sign in with Google'}
          </button>

          <div className="divider">or</div>

          <form style={{ display: success ? 'none' : 'block' }} className="login-form-wrapper">
            <div className="form-group">
              <label className="form-label">👤 Select Your Role</label>
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
          <label className="form-label">📧 Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            placeholder="your@email.com"
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
            placeholder="Enter your password"
            required
            disabled={loading}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div className="form-checkbox">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              disabled={loading}
            />
            <label htmlFor="rememberMe" style={{ margin: 0 }}>Remember me</label>
          </div>

          <button
            type="button"
            className="password-recovery-link"
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
            onClick={onForgotPasswordClick}
          >
            Forgot Password?
          </button>
        </div>
            </form>
          </>
      )}

      <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', marginTop: '1.5rem', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
          Don't have an account?
        </p>
        <button
          className="btn btn-secondary"
          style={{
            width: '100%',
            fontWeight: '600',
          }}
          onClick={onSignUpClick}
        >
          Create Account
        </button>
      </div>
    </Modal>
  );
};
