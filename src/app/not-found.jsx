import React from 'react';

const NotFound = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.errorCode}>404</h1>
            <h2 style={styles.message}>Page Not Found</h2>
            <a
                href="/"
                style={styles.homeLink}
            >
                Go Back to Home
            </a>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#0d113b', // Keep the background color as is
        color: '#ffffff',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        gap: '50px',
    },
    errorCode: {
        fontSize: '8rem',
        fontWeight: 'bold',
        color: '#6c63ff', // Updated to a vibrant purple
        margin: '0',
    },
    message: {
        fontSize: '2rem',
        fontWeight: '600',
        margin: '0',
        color: '#a78bfa', // Updated to a softer purple
    },
    homeLink: {
        fontSize: '1rem',
        color: '#ffffff',
        textDecoration: 'none',
        backgroundColor: '#6c63ff', // Updated to match the purple theme
        padding: '10px 20px',
        borderRadius: '5px',
        transition: 'all 0.3s ease',
        border: 'none',
        cursor: 'pointer',
    },
};

export default NotFound;
