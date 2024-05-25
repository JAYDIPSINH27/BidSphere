import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/tenders', label: 'Tenders' },
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/about', label: 'About Us' },
  { path: '/contact', label: 'Contact' },
  { path: '/login', label: 'Login' },
  { path: '/register', label: 'Register' },
];

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Link to="/">BidSphere</Link>
      </div>
      <ul className={styles.navbarLinks}>
        {navLinks.map(link => (
          <li key={link.path}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default memo(NavBar);
