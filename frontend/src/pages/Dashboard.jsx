import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [stats, setStats] = useState(null);
    // Mock Farmer ID for now
    const farmerId = 1;

    useEffect(() => {
        // In a real app, we'd fetch this from the API
        // fetch(`/api/analytics/farmer/${farmerId}`)...

        // Mock data for display
        setStats({
            totalOrders: 12,
            totalRevenue: 6000.00,
            pendingOrders: 2
        });
    }, []);

    if (!stats) return <p>Loading dashboard...</p>;

    return (
        <div style={styles.container}>
            <h2>Farmer Dashboard</h2>
            <div style={styles.statsGrid}>
                <div style={styles.statCard}>
                    <h3>Total Revenue</h3>
                    <p style={styles.statValue}>${stats.totalRevenue}</p>
                </div>
                <div style={styles.statCard}>
                    <h3>Total Orders</h3>
                    <p style={styles.statValue}>{stats.totalOrders}</p>
                </div>
                <div style={styles.statCard}>
                    <h3>Pending Orders</h3>
                    <p style={styles.statValue}>{stats.pendingOrders}</p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '2rem',
    },
    statsGrid: {
        display: 'flex',
        gap: '2rem',
        marginTop: '1rem',
    },
    statCard: {
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '1.5rem',
        minWidth: '200px',
        textAlign: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    },
    statValue: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#2E7D32',
        margin: '0.5rem 0 0',
    },
};

export default Dashboard;
