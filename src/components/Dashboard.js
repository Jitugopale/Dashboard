import React from 'react';

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
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)', // Attractive shadow effect
      padding: '20px',
    },
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Full screen height to center the container
      backgroundColor: '#f3f4f6', // Light gray background for contrast
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
