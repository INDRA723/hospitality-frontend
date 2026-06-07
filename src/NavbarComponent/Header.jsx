import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        🏥 <span style={styles.logoText}>HMS</span>
      </div>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/about" style={styles.link}>About Us</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
      </ul>
      <div style={styles.buttons}>
        <Link to="/user/login" style={styles.loginBtn}>Login</Link>
        <Link to="/user/patient/register" style={styles.registerBtn}>Register</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px 40px',
    backgroundColor: '#1a1a1a',
    borderBottom: '2px solid #00bcd4',
    position: 'sticky',
    top: 0,
    zIndex: 9999,
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#00bcd4',
  },
  logoText: {
    marginLeft: '8px',
    letterSpacing: '2px',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '30px',
  },
  link: {
    color: '#cccccc',
    fontSize: '15px',
  },
  buttons: {
    display: 'flex',
    gap: '12px',
  },
  loginBtn: {
    padding: '8px 20px',
    border: '1px solid #00bcd4',
    borderRadius: '6px',
    color: '#00bcd4',
    fontSize: '14px',
  },
  registerBtn: {
    padding: '8px 20px',
    backgroundColor: '#00bcd4',
    borderRadius: '6px',
    color: '#000',
    fontSize: '14px',
    fontWeight: 'bold',
  },
};

export default Header;