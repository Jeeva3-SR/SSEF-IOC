import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="title-container">
          <h1 className="main-title">
            <span className="title-gradient">Server-Side Engineering</span>
            <span className="title-shadow">Fundamentals</span>
          </h1>
          <p className="subtitle">
            Master the core concepts of modern backend development
          </p>
        </div>
        
        <div className="interactive-diagram">
          <div className="server-node pulse-animation">
            <div className="node-icon">🖥️</div>
            <div className="node-label">Server</div>
          </div>
          
          <div className="network-connection">
            <div className="connection-line"></div>
            <div className="data-packets">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="packet" style={{ animationDelay: `${i * 0.2}s` }}>📦</div>
              ))}
            </div>
          </div>
          
          <div className="client-node pulse-animation" style={{ animationDelay: '0.3s' }}>
            <div className="node-icon">📱</div>
            <div className="node-label">Client</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;