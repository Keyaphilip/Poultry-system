import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <div style={styles.logoContainer}>
                <h1 style={styles.logo}>🐔 PoultryMarket</h1>
            </div>
            <div style={styles.links}>
                <Link to="/" style={styles.link}>Home</Link>
                <Link to="/marketplace" style={styles.link}>Marketplace</Link>
                <Link to="/dashboard" style={styles.link}>Dashboard</Link>
                <Link to="/login" style={styles.loginBtn}>Login</Link>
            </div>
        </nav>
    );
};

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 3rem',
        backgroundColor: '#1B5E20', // Deep Green
        color: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        margin: 0,
        fontSize: '1.8rem',
        fontWeight: 'bold',
        letterSpacing: '1px',
    },
    links: {
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
    },
    link: {
        color: 'rgba(255, 255, 255, 0.9)',
        textDecoration: 'none',
        fontSize: '1rem',
        fontWeight: '500',
        transition: 'color 0.2s',
    },
    loginBtn: {
        padding: '0.5rem 1.5rem',
        backgroundColor: 'white',
        color: '#1B5E20',
        textDecoration: 'none',
        borderRadius: '20px',
        fontWeight: 'bold',
        transition: 'background-color 0.2s',
    },
};

export default Navbar;
