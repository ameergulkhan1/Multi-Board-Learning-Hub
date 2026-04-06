import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar.tsx';
import { Footer } from '../components/layout/Footer.tsx';
import { Button } from '../components/ui/Button.tsx';
import { Modal } from '../components/ui/Modal.tsx';
import { SignUpModal } from '../components/auth/SignUpModal.tsx';
import { LoginModal } from '../components/auth/LoginModal.tsx';
import { ForgotPasswordModal } from '../components/auth/ForgotPasswordModal.tsx';

type UserRole = 'student' | 'teacher' | 'parent' | 'admin';

export const AuthLandingPage = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

  const handleSignUpClick = () => {
    setShowLoginModal(false);
    setShowSignUpModal(true);
  };

  const handleLoginClick = () => {
    setShowSignUpModal(false);
    setShowForgotPasswordModal(false);
    setShowLoginModal(true);
  };

  const handleForgotPasswordClick = () => {
    setShowLoginModal(false);
    setShowForgotPasswordModal(true);
  };

  const handleLoginSuccess = (role: UserRole) => {
    // Role-based routing
    const dashboardRoutes: Record<UserRole, string> = {
      student: '/student-dashboard',
      teacher: '/teacher-dashboard',
      parent: '/parent-dashboard',
      admin: '/admin-dashboard',
    };
    
    navigate(dashboardRoutes[role]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 50%, #f3f4f6 100%)' }}>
      <Navbar brand="🎓 Multi-Board Learning Hub" />

      <style>{`
        .hero-section {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #a78bfa 100%);
          color: white;
          padding: 5rem 2rem 3rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(79, 70, 229, 0.15);
        }
        .hero-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          border-radius: 50%;
        }
        .hero-section::after {
          content: '';
          position: absolute;
          bottom: -30%;
          left: -10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%);
          border-radius: 50%;
        }
        .hero-content {
          position: relative;
          z-index: 2;
        }
        .hero-content h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          font-weight: 900;
          letter-spacing: -1.5px;
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .hero-content p {
          font-size: 1.45rem;
          margin-bottom: 2.5rem;
          opacity: 1;
          font-weight: 700;
          line-height: 1.7;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: none;
          display: inline-block;
          letter-spacing: 0.2px;
        }
        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
          padding-bottom: 2rem;
        }
        .cta-btn {
          padding: 1rem 2.5rem;
          font-size: 1rem;
          font-weight: 700;
          border-radius: 1rem;
          border: none;
          cursor: pointer;
          transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          letter-spacing: 0.3px;
        }
        .cta-btn-primary {
          background: white;
          color: #4f46e5;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
        .cta-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
          background: #f8f9ff;
        }
        .cta-btn-secondary {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          color: white;
          border: 2px solid white;
        }
        .cta-btn-secondary:hover {
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
        }
        .feature-card {
          transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
          background: white;
          border-top: 4px solid #4f46e5;
        }
        .feature-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 15px 40px rgba(79, 70, 229, 0.2);
          border-top-color: #7c3aed;
        }
        .feature-card .icon {
          font-size: 3rem;
          margin-bottom: 1.25rem;
          display: block;
        }
        .feature-card h3 {
          color: #1f2937;
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }
        .feature-card p {
          color: #6b7280;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .stats-section {
          background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
          padding: 3rem 0;
          margin: 3rem 0;
        }
        .stat-card {
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          transition: all 300ms ease-out;
        }
        .stat-card:hover {
          border-color: #4f46e5;
          box-shadow: 0 8px 20px rgba(79, 70, 229, 0.1);
        }
        .stat-card .number {
          font-size: 2.5rem;
          font-weight: 900;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }
        .stat-card .label {
          color: #6b7280;
          font-weight: 600;
          font-size: 0.95rem;
        }
        .cta-main-section {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #a78bfa 100%);
          color: white;
          padding: 5rem 2rem;
          text-align: center;
          border-radius: 2rem;
          box-shadow: 0 20px 50px rgba(79, 70, 229, 0.3);
          margin: 4rem auto;
          max-width: 800px;
          position: relative;
          overflow: hidden;
        }
        .cta-main-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          border-radius: 50%;
        }
        .cta-main-section > * {
          position: relative;
          z-index: 2;
        }
        .cta-main-section h2 {
          color: white;
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 900;
          letter-spacing: -1px;
        }
        .cta-main-section p {
          color: rgba(255, 255, 255, 0.95);
          font-size: 1.15rem;
          margin-bottom: 2.5rem;
          line-height: 1.7;
          font-weight: 500;
        }
        .section-title {
          font-size: 2.75rem;
          color: #1f2937;
          margin-bottom: 1rem;
          font-weight: 900;
          letter-spacing: -1px;
        }
        .section-subtitle {
          color: #6b7280;
          font-size: 1.15rem;
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.25rem;
          }
          .hero-content p {
            font-size: 1.1rem;
          }
          .cta-buttons {
            gap: 1rem;
          }
          .cta-btn {
            padding: 0.75rem 1.5rem;
            font-size: 0.9rem;
          }
          .section-title {
            font-size: 2rem;
          }
          .cta-main-section h2 {
            font-size: 1.75rem;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1>Welcome to Your Learning Journey</h1>
          <p>🚀 Master 8 comprehensive modules • 🤖 AI-powered guidance • 🎯 Interactive tools • 👥 Learn together, grow faster</p>
          
          <div className="cta-buttons">
            <button
              className="cta-btn cta-btn-primary"
              onClick={() => setShowLoginModal(true)}
            >
              ➜ Login
            </button>
            <button
              className="cta-btn cta-btn-secondary"
              onClick={() => setShowSignUpModal(true)}
            >
              ➜ Sign Up Free
            </button>
          </div>
        </div>
      </section>

      <main style={{ flex: 1, padding: '3rem 2rem', maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        {/* Features Section */}
        <section style={{ marginTop: '2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title">Why Teachers & Students Love Us</h2>
            <p className="section-subtitle">Everything you need for effective learning in one platform</p>
          </div>

          <div className="grid grid-3" style={{ gap: '2.5rem' }}>
            {[
              { icon: '📊', title: 'Smart Dashboard', desc: 'Real-time progress tracking and complete analytics' },
              { icon: '📚', title: 'Rich Content', desc: 'Interactive textbooks and engaging study materials' },
              { icon: '✅', title: 'Assessments', desc: 'Adaptive testing with instant detailed feedback' },
              { icon: '🤖', title: 'AI Assistant', desc: 'Get instant expert answers 24/7' },
              { icon: '👥', title: 'Collaboration', desc: 'Study groups and peer learning experience' },
              { icon: '🎓', title: 'Teacher Tools', desc: 'Parent communication & comprehensive reports' },
            ].map((feature, idx) => (
              <div key={idx} className="card feature-card">
                <span className="icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">Trusted by Learners Worldwide</h2>
            <p className="section-subtitle">Join our growing community of educators and students</p>
          </div>
          
          <div className="grid grid-3" style={{ gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            {[
              { number: '50K+', label: 'Active Students' },
              { number: '1000+', label: 'Expert Teachers' },
              { number: '95%', label: 'Success Rate' },
            ].map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="number">{stat.number}</div>
                <p className="label">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-main-section">
          <h2>Ready to Transform Your Learning?</h2>
          <p>Start your educational journey today and unlock your full potential with our comprehensive platform</p>
          <button
            className="cta-btn cta-btn-primary"
            onClick={() => setShowSignUpModal(true)}
            style={{ marginTop: '1rem' }}
          >
            ➜ Create Free Account
          </button>
        </section>
      </main>

      <Footer />

      {/* Modals */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSuccess={handleLoginSuccess}
        onSignUpClick={handleSignUpClick}
        onForgotPasswordClick={handleForgotPasswordClick}
      />
      <SignUpModal
        isOpen={showSignUpModal}
        onClose={() => setShowSignUpModal(false)}
        onSuccess={handleLoginSuccess}
      />
      <ForgotPasswordModal
        isOpen={showForgotPasswordModal}
        onClose={() => setShowForgotPasswordModal(false)}
        onLoginClick={handleLoginClick}
      />
    </div>
  );
};
