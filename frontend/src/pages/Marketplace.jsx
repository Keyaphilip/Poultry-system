import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';

const Marketplace = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                console.error("Failed to fetch products", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p>Loading products...</p>;

    return (
        <div style={styles.container}>
            <h2>Marketplace</h2>
            <div style={styles.grid}>
                {products.map((product) => (
                    <div key={product.id} style={styles.card}>
                        <img
                            src={product.imageUrls && product.imageUrls.length > 0 ? product.imageUrls[0] : 'https://via.placeholder.com/150'}
                            alt={product.name}
                            style={styles.image}
                        />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p><strong>Price:</strong> ${product.price}</p>
                        <p><strong>Farmer:</strong> {product.farmer?.farmName || 'Unknown'}</p>
                        <button style={styles.button}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '2rem',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '2rem',
    },
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '1rem',
        textAlign: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    image: {
        width: '100%',
        height: '150px',
        objectFit: 'cover',
        borderRadius: '4px',
    },
    button: {
        marginTop: '0.5rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#2E7D32',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default Marketplace;
