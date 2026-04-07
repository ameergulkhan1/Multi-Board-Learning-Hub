import { Button } from '../components/ui/Button.tsx';

export const LandingPage = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: 'var(--primary-color)',
          color: 'white',
          padding: 'var(--spacing-2xl)',
          textAlign: 'center',
        }}
      >
        <h1>Welcome to Multi-Board Learning Hub</h1>
        <p style={{ fontSize: '1.25rem', marginTop: 'var(--spacing-md)' }}>
          Comprehensive Learning Platform for Students & Educators
        </p>
      </header>

      {/* Features Section */}
      <section style={{ padding: 'var(--spacing-2xl)', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
          Key Features
        </h2>
        <div className="grid grid-3">
          {[
            {
              icon: '📊',
              title: 'Dashboard',
              desc: 'Monitor learning progress with intuitive analytics',
            },
            {
              icon: '📚',
              title: 'Smart Textbook',
              desc: 'Interactive study materials and resources',
            },
            {
              icon: '✅',
              title: 'Assessments',
              desc: 'Comprehensive testing and evaluation tools',
            },
            {
              icon: '📝',
              title: 'Examinations',
              desc: 'Conduct and manage exams efficiently',
            },
            {
              icon: '🤖',
              title: 'AI Assistant',
              desc: 'Intelligent query resolution system',
            },
            {
              icon: '👥',
              title: 'Collaboration',
              desc: 'Connect and learn together with peers',
            },
          ].map((feature, idx) => (
            <div key={idx} className="card">
              <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>
                {feature.icon}
              </div>
              <h4>{feature.title}</h4>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          backgroundColor: 'var(--primary-color)',
          color: 'white',
          padding: 'var(--spacing-2xl)',
          textAlign: 'center',
        }}
      >
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of students transforming their learning experience</p>
        <Button variant="primary" size="lg" style={{ marginTop: 'var(--spacing-lg)' }}>
          Sign Up Now
        </Button>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#212529',
          color: 'white',
          padding: 'var(--spacing-xl)',
          textAlign: 'center',
        }}
      >
        <p>© 2024 Multi-Board Learning Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};
