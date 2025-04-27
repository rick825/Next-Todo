'use client';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Todo App. All rights reserved.</p>
      </div>
    </footer>
  );
}
