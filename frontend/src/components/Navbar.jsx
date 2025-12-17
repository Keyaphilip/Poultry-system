import React from 'react';

const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <h1 style={styles.logo}>Poultry Marketplace</h1>
            <div style={styles.links}>
                <a href="/" style={styles.link}>Home</a>
                <a href="/marketplace" style={styles.link}>Marketplace</a>
                <a href="/dashboard" style={styles.link}>Dashboard</a>
            </div>
        </nav>
    );
};

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#2E7D32', // Green for agriculture
        color: 'white',
    },
    logo: {
        margin: 0,
        fontSize: '1.5rem',
    },
    links: {
        display: 'flex',
        gap: '1.5rem',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1rem',
    },
};

export default Navbar;
