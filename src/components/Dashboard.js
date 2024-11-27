import React from 'react';
import '../App.css'; // Assuming you have styles defined in this file

const Dashboard = () => {
  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, auto)', // Two buttons per row
      gap: '20px',
      justifyContent: 'center',
      alignItems: 'center',
      width: '400px', // Fixed width to make it a square
      height: '400px', // Fixed height to match width
      margin: 'auto', // Center the container
      backgroundColor: 'rgba(0, 0, 0, 0.7)', /* Dark overlay for better contrast */
      borderRadius: '20px', // Rounded corners
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
      padding: '20px',
    },
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Full screen height to center the container
      // background: 'linear-gradient(135deg, #74ebd5, #ACB6E5)', // Attractive gradient background
    },
    button: {
      padding: '15px 40px',
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#ffffff',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      boxShadow: '0 6px 10px rgba(0, 0, 0, 0.15)', // Subtle button shadow
      transition: 'transform 0.3s, background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
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
