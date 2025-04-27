'use client';
import Link from 'next/link';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link href="/">TodoApp</Link>
      </div>
      <div className="navbar-links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/how-it-works">How It Works</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
      </div>
    </nav>
  );
}
