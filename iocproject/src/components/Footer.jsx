import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Server-Side Engineering Guide</p>
        <p>Created with React for educational purposes</p>
        </div>
    </footer>
  );
};

export default Footer;