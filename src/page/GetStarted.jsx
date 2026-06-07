import React from 'react';
import { Link } from 'react-router-dom';

function GetStarted() {
  return (
    <div style={styles.container}>

      {/* Welcome Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Welcome to <span style={styles.highlight}>HMS</span></h1>
        <p style={styles.subtitle}>Your trusted hospital management system</p>
      </div>

      {/* Who are you section */}
      <h2 style={styles.chooseTitle}>Who are you?</h2>
      <p style={styles.chooseSubtitle}>Select your role to get started</p>

      <div style={styles.cards}>
        {/* Patient Card */}
        <div style={styles.card}>
          <div style={styles.cardIcon}>🧑‍⚕️</div>
          <h3 style={styles.cardTitle}>I'm a Patient</h3>
          <p style={styles.cardText}>Register to book appointments with specialist doctors from home.</p>
          <Link to="/user/patient/register" style={styles.cardBtn}>Register as Patient</Link>
        </div>

        {/* Doctor Card */}
        <div style={styles.card}>
          <div style={styles.cardIcon}>👨‍⚕️</div>
          <h3 style={styles.cardTitle}>I'm a Doctor</h3>
          <p style={styles.cardText}>Join our platform to manage appointments and help patients.</p>
          <Link to="/user/doctor/register" style={styles.cardBtnOutline}>Register as Doctor</Link>
        </div>
      </div>

      {/* Already have account */}
      <p style={styles.loginText}>
        Already have an account?{' '}
        <Link to="/user/login" style={styles.loginLink}>Login here</Link>
      </p>

    </div>
  );
}

const styles = {
  container: {
    minHeight: '90vh',
    backgroundColor: '#0f0f0f',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 40px',
    textAlign: 'center',
  },
  header: {
    marginBottom: '50px',
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '10px',
  },
  highlight: {
    color: '#00bcd4',
  },
  subtitle: {
    color: '#aaaaaa',
    fontSize: '18px',
  },
  chooseTitle: {
    fontSize: '28px',
    color: '#ffffff',
    marginBottom: '8px',
  },
  chooseSubtitle: {
    color: '#aaaaaa',
    fontSize: '16px',
    marginBottom: '40px',
  },
  cards: {
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '40px',
  },
  card: {
    backgroundColor: '#1e1e1e',
    border: '1px solid #333',
    borderRadius: '16px',
    padding: '40px 30px',
    width: '260px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardIcon: {
    fontSize: '50px',
    marginBottom: '16px',
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: '20px',
    marginBottom: '12px',
  },
  cardText: {
    color: '#aaaaaa',
    fontSize: '14px',
    lineHeight: 1.7,
    marginBottom: '24px',
  },
  cardBtn: {
    padding: '10px 24px',
    backgroundColor: '#00bcd4',
    color: '#000',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '14px',
    textDecoration: 'none',
  },
  cardBtnOutline: {
    padding: '10px 24px',
    border: '2px solid #00bcd4',
    color: '#00bcd4',
    borderRadius: '8px',
    fontSize: '14px',
    textDecoration: 'none',
  },
  loginText: {
    color: '#aaaaaa',
    fontSize: '15px',
  },
  loginLink: {
    color: '#00bcd4',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
};

export default GetStarted;