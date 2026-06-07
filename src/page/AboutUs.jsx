import React from 'react';

function AboutUs() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>
      <p style={styles.subtitle}>Providing quality healthcare management since 2024</p>

      <div style={styles.content}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>🏥 Our Mission</h2>
          <p style={styles.cardText}>
            To provide an easy, reliable, and efficient hospital management system
            that connects patients with specialist doctors from the comfort of their homes.
          </p>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>👨‍⚕️ Our Team</h2>
          <p style={styles.cardText}>
            We have a dedicated team of healthcare professionals and software engineers
            working together to make healthcare accessible to everyone.
          </p>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>🎯 Our Vision</h2>
          <p style={styles.cardText}>
            To become the most trusted digital healthcare platform,
            making quality medical care available to every individual regardless of location.
          </p>
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
  content: {
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
    width: '300px',
    textAlign: 'left',
  },
  cardTitle: { color: '#00bcd4', fontSize: '20px', marginBottom: '16px' },
  cardText: { color: '#aaaaaa', fontSize: '14px', lineHeight: 1.8 },
};

export default AboutUs;