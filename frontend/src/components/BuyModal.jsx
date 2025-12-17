import React, { useState } from 'react';

const BuyModal = ({ product, onClose, onConfirm }) => {
    const [quantity, setQuantity] = useState(1);

    if (!product) return null;

    const totalPrice = (product.price * quantity).toFixed(2);

    const handleSubmit = (e) => {
        e.preventDefault();
        onConfirm(product.id, quantity);
    };

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <h2 style={styles.title}>Buy {product.name}</h2>
                <p>{product.description}</p>
                <p><strong>Price per unit:</strong> ${product.price}</p>

                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.inputGroup}>
                        <label>Quantity:</label>
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.total}>
                        <strong>Total:</strong> ${totalPrice}
                    </div>

                    <div style={styles.actions}>
                        <button type="button" onClick={onClose} style={styles.cancelBtn}>Cancel</button>
                        <button type="submit" style={styles.confirmBtn}>Confirm Order</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    modal: {
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        width: '400px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
    title: {
        marginTop: 0,
        color: '#1B5E20',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        marginTop: '1.5rem',
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    },
    input: {
        padding: '0.5rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '1rem',
    },
    total: {
        fontSize: '1.2rem',
        textAlign: 'right',
        color: '#1B5E20',
    },
    actions: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '1rem',
    },
    cancelBtn: {
        padding: '0.5rem 1rem',
        backgroundColor: '#ccc',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    confirmBtn: {
        padding: '0.5rem 1rem',
        backgroundColor: '#1B5E20',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold',
    },
};

export default BuyModal;
