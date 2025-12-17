import React from 'react';

const Home = () => {
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1>Welcome to the Poultry Marketplace</h1>
                <p>Direct from the farm to your table.</p>
                <a href="/marketplace" style={styles.button}>Shop Now</a>
            </header>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '4rem',
    },
    header: {
        backgroundColor: '#f5f5f5',
        padding: '3rem',
        borderRadius: '8px',
    },
    button: {
        display: 'inline-block',
        marginTop: '1rem',
        padding: '0.8rem 1.5rem',
        backgroundColor: '#2E7D32',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '4px',
        fontWeight: 'bold',
    },
};

export default Home;
