import React, { useEffect, useState } from 'react';
import { getProducts, searchProducts, placeOrder } from '../services/api';
import BuyModal from '../components/BuyModal';

const Marketplace = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [category, setCategory] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        setLoading(true);
        try {
            const data = await getProducts();
            setProducts(data);
        } catch (error) {
            console.error("Failed to fetch products", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Note: The backend search API might need adjustment to handle name search if not already implemented.
            // For now, we'll filter client-side for name, and use API for category/price if needed.
            // Or better, let's use the searchProducts API we defined.
            const data = await searchProducts(category, maxPrice, null); // Location null for now

            // Client-side filter for name since our basic search API might not support it yet
            const filtered = data.filter(p =>
                p.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setProducts(filtered);
        } catch (error) {
            console.error("Search failed", error);
        } finally {
            setLoading(false);
        }
    };

    const openBuyModal = (product) => {
        setSelectedProduct(product);
    };

    const closeBuyModal = () => {
        setSelectedProduct(null);
    };

    const handleConfirmOrder = async (productId, quantity) => {
        try {
            // Mock customer ID for now
            const orderData = {
                productId: productId,
                customerId: 2,
                quantity: quantity
            };
            await placeOrder(orderData);
            alert("Order placed successfully!");
            closeBuyModal();
            loadProducts(); // Refresh to update stock
        } catch (error) {
            alert("Failed to place order: " + error.message);
        }
    };

    // Helper to get image based on product name (simple mapping)
    const getProductImage = (name) => {
        const n = name.toLowerCase();
        if (n.includes('chicken')) return '/product-chicken.png';
        if (n.includes('egg')) return '/product-eggs.png';
        if (n.includes('feed')) return '/product-feed.png'; // This might be missing, browser will handle 404
        return 'https://via.placeholder.com/150?text=Poultry';
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h2>Marketplace</h2>

                {/* Search & Filter Bar */}
                <form onSubmit={handleSearch} style={styles.searchBar}>
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={styles.input}
                    />
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        style={styles.select}
                    >
                        <option value="">All Categories</option>
                        <option value="MEAT">Meat</option>
                        <option value="EGGS">Eggs</option>
                        <option value="FEED">Feed</option>
                    </select>
                    <input
                        type="number"
                        placeholder="Max Price"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        style={styles.input}
                    />
                    <button type="submit" style={styles.searchBtn}>Search</button>
                </form>
            </div>

            {loading ? (
                <p>Loading products...</p>
            ) : (
                <div style={styles.grid}>
                    {products.map((product) => (
                        <div key={product.id} style={styles.card}>
                            <img
                                src={getProductImage(product.name)}
                                alt={product.name}
                                style={styles.image}
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Product' }}
                            />
                            <div style={styles.cardContent}>
                                <h3>{product.name}</h3>
                                <p style={styles.desc}>{product.description}</p>
                                <p style={styles.price}>${product.price}</p>
                                <p style={styles.farmer}>Farmer: {product.farmer?.farmName || 'Unknown'}</p>
                                <button
                                    onClick={() => openBuyModal(product)}
                                    style={styles.buyBtn}
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {selectedProduct && (
                <BuyModal
                    product={selectedProduct}
                    onClose={closeBuyModal}
                    onConfirm={handleConfirmOrder}
                />
            )}
        </div>
    );
};

const styles = {
    container: {
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    header: {
        marginBottom: '2rem',
    },
    searchBar: {
        display: 'flex',
        gap: '1rem',
        marginTop: '1rem',
        flexWrap: 'wrap',
    },
    input: {
        padding: '0.5rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        flex: '1',
        minWidth: '200px',
    },
    select: {
        padding: '0.5rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        minWidth: '150px',
    },
    searchBtn: {
        padding: '0.5rem 1.5rem',
        backgroundColor: '#1B5E20',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '2rem',
    },
    card: {
        border: '1px solid #eee',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        transition: 'transform 0.2s',
        backgroundColor: 'white',
    },
    image: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
    },
    cardContent: {
        padding: '1.5rem',
    },
    desc: {
        color: '#666',
        fontSize: '0.9rem',
        margin: '0.5rem 0',
    },
    price: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#1B5E20',
        margin: '0.5rem 0',
    },
    farmer: {
        fontSize: '0.8rem',
        color: '#888',
        marginBottom: '1rem',
    },
    buyBtn: {
        width: '100%',
        padding: '0.7rem',
        backgroundColor: '#FFC107',
        color: '#333',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold',
    },
};

export default Marketplace;
