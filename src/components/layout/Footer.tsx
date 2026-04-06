import React from 'react';

interface FooterProps {
  copyrightText?: string;
  links?: { label: string; href: string }[];
}

export const Footer: React.FC<FooterProps> = ({
  copyrightText = '© 2026 Multi-Board Learning Hub. All rights reserved.',
  links = [],
}) => {
  return (
    <footer 
      style={{
        background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
        color: 'white',
        padding: '3rem 2rem',
        marginTop: 'auto',
        borderTop: '2px solid rgba(79, 70, 229, 0.3)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: '600', color: 'white' }}>
              🎓 Multi-Board Learning Hub
            </p>
            <p style={{ margin: '0.5rem 0 0', color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>
              Empowering learners worldwide
            </p>
          </div>

          {links.length > 0 && (
            <ul
              style={{
                display: 'flex',
                gap: '2rem',
                justifyContent: 'flex-end',
                listStyle: 'none',
                margin: 0,
                padding: 0,
                flexWrap: 'wrap',
              }}
            >
              {links.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      transition: 'all 300ms ease-out',
                      paddingBottom: '0.25rem',
                      borderBottom: '2px solid transparent',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = 'white';
                      (e.target as HTMLElement).style.borderBottomColor = '#4f46e5';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = 'rgba(255, 255, 255, 0.8)';
                      (e.target as HTMLElement).style.borderBottomColor = 'transparent';
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '2rem',
          textAlign: 'center'
        }}>
          <p style={{ 
            margin: 0, 
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '0.85rem'
          }}>
            {copyrightText}
          </p>
          <p style={{ 
            margin: '0.75rem 0 0',
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '0.8rem'
          }}>
            Built with ❤️ for educators and learners
          </p>
        </div>
      </div>
    </footer>
  );
};
