import React from 'react';

function ContactUs() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>
      <p style={styles.subtitle}>We're here to help you 24/7</p>

      <div style={styles.cards}>
        <div style={styles.card}>
          <div style={styles.icon}>📍</div>
          <h3 style={styles.cardTitle}>Address</h3>
          <p style={styles.cardText}>BTM Stage 1, 5th Cross<br />Bengaluru, Karnataka 560068</p>
        </div>
        <div style={styles.card}>
          <div style={styles.icon}>📞</div>
          <h3 style={styles.cardTitle}>Phone</h3>
          <p style={styles.cardText}>+91 9515828961</p>
        </div>
        <div style={styles.card}>
          <div style={styles.icon}>📧</div>
          <h3 style={styles.cardTitle}>Email</h3>
          <p style={styles.cardText}>support@hms.com</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '90vh',
    backgroundColor: '#0f0f0f',
    padding: '60px 40px',
    textAlign: 'center',
  },
  title: {
    fontSize: '42px',
    color: '#ffffff',
    marginBottom: '10px',
  },
  subtitle: {
    color: '#aaaaaa',
    fontSize: '18px',
    marginBottom: '50px',
  },
  cards: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#1e1e1e',
    border: '1px solid #333',
    borderRadius: '12px',
    padding: '40px 30px',
    width: '250px',
  },
  icon: { fontSize: '40px', marginBottom: '16px' },
  cardTitle: { color: '#00bcd4', fontSize: '18px', marginBottom: '10px' },
  cardText: { color: '#aaaaaa', fontSize: '14px', lineHeight: 1.7 },
};

export default ContactUs;