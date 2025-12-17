import React from 'react';

const Home = () => {
    return (
        <div style={styles.container}>
            {/* Hero Section */}
            <div style={styles.hero}>
                <div style={styles.heroOverlay}>
                    <h1 style={styles.heroTitle}>Fresh Poultry, Directly from Farmers</h1>
                    <p style={styles.heroSubtitle}>Connecting you with the best local poultry farmers for organic, fresh, and quality products.</p>
                    <a href="/marketplace" style={styles.ctaButton}>Shop Now</a>
                </div>
            </div>

            {/* Features Section */}
            <div style={styles.features}>
                <div style={styles.featureCard}>
                    <img src="/feature-organic.png" alt="Organic Feed" style={styles.featureImage} />
                    <h3>100% Organic</h3>
                    <p>Our farmers use sustainable practices to ensure the healthiest poultry for your family.</p>
                </div>
                <div style={styles.featureCard}>
                    <img src="/feature-farmer.png" alt="Verified Farmer" style={styles.featureImage} />
                    <h3>Verified Farmers</h3>
                    <p>Every farmer is vetted and verified to ensure trust and quality in every transaction.</p>
                </div>
                <div style={styles.featureCard}>
                    <img src="/feature-payment.png" alt="Secure Payment" style={styles.featureImage} />
                    <h3>Secure Payments</h3>
                    <p>Experience hassle-free and secure transactions with our integrated payment system.</p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    hero: {
        backgroundImage: "url('/hero.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    heroOverlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '3rem',
        borderRadius: '10px',
        textAlign: 'center',
        color: 'white',
        maxWidth: '800px',
    },
    heroTitle: {
        fontSize: '3.5rem',
        marginBottom: '1rem',
        fontWeight: 'bold',
    },
    heroSubtitle: {
        fontSize: '1.2rem',
        marginBottom: '2rem',
        lineHeight: '1.6',
    },
    ctaButton: {
        display: 'inline-block',
        padding: '1rem 2.5rem',
        backgroundColor: '#FFC107', // Gold accent
        color: '#333',
        textDecoration: 'none',
        borderRadius: '50px',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        transition: 'transform 0.2s',
    },
    features: {
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        padding: '4rem 2rem',
        backgroundColor: '#f9f9f9',
    },
    featureCard: {
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '10px',
        textAlign: 'center',
        maxWidth: '300px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        transition: 'transform 0.3s',
    },
    featureImage: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '8px',
        marginBottom: '1rem',
    },
};

export default Home;
