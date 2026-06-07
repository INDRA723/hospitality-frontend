import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Your Health, <span style={styles.highlight}>Our Priority</span>
          </h1>
          <p style={styles.heroSubtitle}>
            Book appointments with specialist doctors from the comfort of your home.
            Fast, easy, and reliable healthcare management.
          </p>
          <div style={styles.heroButtons}>
            <Link to="/about" style={styles.secondaryBtn}>Learn More</Link>
            <Link to="/register" style={styles.primaryBtn}>Get Started</Link>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div style={styles.howItWorks}>
        <h2 style={styles.sectionTitle}>How It Works</h2>
        <p style={styles.sectionSubtitle}>Get started in 3 simple steps</p>
        <div style={styles.steps}>
          <div style={styles.step}>
            <div style={styles.stepNumber}>1</div>
            <h3 style={styles.stepTitle}>Create Account</h3>
            <p style={styles.stepText}>Register as a patient by filling in your basic details to get started.</p>
          </div>
          <div style={styles.stepArrow}>→</div>
          <div style={styles.step}>
            <div style={styles.stepNumber}>2</div>
            <h3 style={styles.stepTitle}>Find a Doctor</h3>
            <p style={styles.stepText}>Browse our list of specialist doctors and choose the right one for you.</p>
          </div>
          <div style={styles.stepArrow}>→</div>
          <div style={styles.step}>
            <div style={styles.stepNumber}>3</div>
            <h3 style={styles.stepTitle}>Book Appointment</h3>
            <p style={styles.stepText}>Schedule your appointment online and get treated from home.</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div style={styles.features}>
        {[
          { icon: '🩺', title: 'Expert Doctors', desc: 'Consult with certified specialists' },
          { icon: '📅', title: 'Easy Booking', desc: 'Schedule appointments in seconds' },
          { icon: '🔒', title: 'Secure & Private', desc: 'Your data is always protected' },
        ].map((f, i) => (
          <div key={i} style={styles.featureCard}>
            <div style={styles.featureIcon}>{f.icon}</div>
            <h3 style={styles.featureTitle}>{f.title}</h3>
            <p style={styles.featureDesc}>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  hero: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: '0px',
  },
  heroContent: { maxWidth: '700px' },
  heroTitle: {
    fontSize: '52px',
    fontWeight: 'bold',
    marginBottom: '20px',
    lineHeight: 1.2,
  },
  highlight: { color: '#00bcd4' },
  heroSubtitle: {
    fontSize: '18px',
    color: '#aaaaaa',
    marginBottom: '40px',
    lineHeight: 1.7,
  },
  heroButtons: { display: 'flex', gap: '16px', justifyContent: 'center' },
  primaryBtn: {
    padding: '14px 36px',
    backgroundColor: '#00bcd4',
    color: '#000',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '16px',
  },
  secondaryBtn: {
    padding: '14px 36px',
    border: '2px solid #00bcd4',
    color: '#00bcd4',
    borderRadius: '8px',
    fontSize: '16px',
  },
  howItWorks: {
    padding: '80px 40px',
    backgroundColor: '#0f0f0f',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '36px',
    color: '#ffffff',
    marginBottom: '10px',
  },
  sectionSubtitle: {
    color: '#aaaaaa',
    fontSize: '16px',
    marginBottom: '50px',
  },
  steps: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  step: {
    backgroundColor: '#1e1e1e',
    border: '1px solid #333',
    borderRadius: '12px',
    padding: '30px',
    width: '220px',
  },
  stepNumber: {
    width: '50px',
    height: '50px',
    backgroundColor: '#00bcd4',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#000',
    margin: '0 auto 16px auto',
  },
  stepTitle: {
    color: '#ffffff',
    fontSize: '18px',
    marginBottom: '10px',
  },
  stepText: {
    color: '#aaaaaa',
    fontSize: '14px',
    lineHeight: 1.7,
  },
  stepArrow: {
    fontSize: '30px',
    color: '#00bcd4',
    fontWeight: 'bold',
  },
  features: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    padding: '60px 40px',
    backgroundColor: '#111111',
    flexWrap: 'wrap',
  },
  featureCard: {
    backgroundColor: '#1e1e1e',
    borderRadius: '12px',
    padding: '30px',
    width: '250px',
    textAlign: 'center',
    border: '1px solid #333',
  },
  featureIcon: { fontSize: '40px', marginBottom: '16px' },
  featureTitle: { fontSize: '18px', marginBottom: '10px', color: '#00bcd4' },
  featureDesc: { color: '#aaaaaa', fontSize: '14px' },
};

export default HomePage;