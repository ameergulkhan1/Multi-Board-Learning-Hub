import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.ts';

interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

interface NavbarProps {
  brand?: string;
  items?: NavItem[];
  onMenuClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  brand = 'Multi-Board Learning Hub',
  items = [],
  onMenuClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav
      style={{
        background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
        boxShadow: '0 10px 30px rgba(79, 70, 229, 0.2)',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div 
        style={{ 
          fontSize: '1.5rem', 
          fontWeight: '800',
          color: 'white',
          letterSpacing: '-0.5px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}
      >
        {brand}
      </div>

      <button
        className="btn btn-secondary btn-sm"
        onClick={() => {
          setIsOpen(!isOpen);
          onMenuClick?.();
        }}
        style={{ 
          display: 'none',
          background: 'rgba(255, 255, 255, 0.2)',
          color: 'white',
          border: '2px solid rgba(255, 255, 255, 0.3)'
        }}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <ul
        style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          alignItems: 'center'
        }}
      >
        {items.map((item) => (
          <li key={item.href}>
            <a 
              href={item.href}
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '0.95rem',
                transition: 'all 300ms ease-out',
                paddingBottom: '0.25rem',
                borderBottom: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = 'white';
                (e.target as HTMLElement).style.borderBottomColor = 'white';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = 'rgba(255, 255, 255, 0.9)';
                (e.target as HTMLElement).style.borderBottomColor = 'transparent';
              }}
            >
              {item.label}
            </a>
          </li>
        ))}

        {/* User Info & Logout */}
        {user && (
          <>
            <li style={{ color: 'white', fontSize: '0.95rem', fontWeight: '500' }}>
              👤 {user.name}
            </li>
            <li>
              <button
                onClick={handleLogout}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.5)',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 300ms ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                  e.currentTarget.style.borderColor = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                }}
              >
                🚪 Logout
              </button>
            </li>
          </>
        )}
      </ul>

      <style>{`
        @media (max-width: 768px) {
          nav button { display: inline-block !important; }
          nav ul { 
            display: ${isOpen ? 'flex' : 'none'};
            flex-direction: column;
            position: absolute;
            top: 60px;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
            padding: 1.5rem 2rem;
            gap: 1rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }
        }
      `}</style>
    </nav>
  );
};
