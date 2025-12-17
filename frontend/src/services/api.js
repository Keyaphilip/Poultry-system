const API_URL = "http://localhost:8080/api";

export const getProducts = async () => {
    const response = await fetch(`${API_URL}/products`);
    return response.json();
};

export const getVerifiedProducts = async () => {
    const response = await fetch(`${API_URL}/products/verified`);
    return response.json();
};

export const searchProducts = async (category, maxPrice, location) => {
    const params = new URLSearchParams();
    if (category) params.append("category", category);
    if (maxPrice) params.append("maxPrice", maxPrice);
    if (location) params.append("location", location);

    const response = await fetch(`${API_URL}/products/search?${params.toString()}`);
    return response.json();
};

export const placeOrder = async (orderData) => {
    const response = await fetch(`${API_URL}/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
    });
    if (!response.ok) throw new Error("Failed to place order");
    return response.json();
};
