import React from 'react';
import '../App.css'; // Assuming you have styles defined in this file

const Dashboard = () => {
  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)', // Two buttons per row
      gap: '20px',
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%', // Adjusted width for better responsiveness
      maxWidth: '600px', // Limit the max width to avoid excessive space on large screens
      margin: 'auto', // Center the container
      backgroundColor: '#ffffff', // Lighter background for a clean, professional feel
      borderRadius: '15px', // Softer rounded corners
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Subtle shadow for a floating effect
      padding: '30px',
      animation: 'fadeIn 1s ease-in-out', // Fade-in effect on page load
    },
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Full screen height to center the container
      background: 'linear-gradient(135deg, #A2C2E8, #F3F8FF)', // Soft gradient background for an elegant look
    },
    button: {
      padding: '16px 36px',
      fontSize: '16px',
      fontWeight: '600',
      color: '#ffffff',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)', // Subtle shadow to make buttons look elevated
      transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
      width: '100%', // Make the buttons full width inside the grid container
      minHeight: '50px', // Minimum height for buttons for better touch responsiveness
      letterSpacing: '1px', // Added spacing to text for a cleaner look
    },
    buttonHover: {
      backgroundColor: '#0056b3', // Slightly darker blue on hover
      transform: 'scale(1.05)', // Slight grow on hover for an interactive feel
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)', // Slightly bigger shadow for more emphasis on hover
    },
    buttonFocus: {
      outline: 'none',
      boxShadow: '0 0 10px rgba(0, 123, 255, 0.8)', // Blue glow on focus
    },
    '@keyframes fadeIn': {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
  };
  
  

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          Aadhar
        </button>
        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          Passport
        </button>
        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          PAN
        </button>
        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          GST
        </button>
        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          Voter
        </button>
        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          Udyan Aadhar
        </button>
        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          PanLink Aadhar
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
