import React from 'react';

interface Alert {
  id: string;
  type: 'warning' | 'info' | 'achievement';
  title: string;
  message: string;
  date: string;
}

interface AlertsSectionProps {
  alerts: Alert[];
}

export const AlertsSection: React.FC<AlertsSectionProps> = ({ alerts }) => {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <div className="section-header">🔔 Updates & Alerts</div>
      <div className="alerts-container">
        {alerts.map((alert) => (
          <div key={alert.id} className={`alert-card ${alert.type}`}>
            <div className="alert-icon">
              {alert.type === 'achievement' && '🎉'}
              {alert.type === 'warning' && '⚠️'}
              {alert.type === 'info' && 'ℹ️'}
            </div>
            <div className="alert-content">
              <p className="alert-title">{alert.title}</p>
              <p className="alert-message">{alert.message}</p>
              <p className="alert-date">{alert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
