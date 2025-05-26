// cart.js

// Function to get the cart items from local storage
function getCart() {
    const cartData = localStorage.getItem('aamodaCart');
    return cartData ? JSON.parse(cartData) : [];
}

// Function to save the cart items to local storage
function updateCart(cart) {
    localStorage.setItem('aamodaCart', JSON.stringify(cart));
    updateCartIcon(); // Update the cart icon count whenever the cart changes
}

// Function to add an item to the cart
function addToCart(productId, quantityKey, selectedProduct) {
    const cart = getCart();
    const existingItem = cart.find(item => item.productId === productId && item.quantityKey === quantityKey);

    if (existingItem) {
        existingItem.count++;
    } else {
        cart.push({
            cartItemId: generateCartItemId(productId, quantityKey), // Unique ID for each cart item
            productId: productId,
            name: selectedProduct.name,
            pricePerUnit: selectedProduct.prices[quantityKey],
            quantityKey: quantityKey,
            image: selectedProduct.image,
            count: 1
        });
    }
    updateCart(cart);
}

// Function to generate a unique cart item ID
function generateCartItemId(productId, quantityKey) {
    return `${productId}-${quantityKey.replace(/\s+/g, '-')}`; // Replace spaces for safety
}

// Function to remove an item from the cart
function removeCartItem(cartItemId) {
    const cart = getCart();
    const updatedCart = cart.filter(item => item.cartItemId !== cartItemId);
    updateCart(updatedCart);
}

// Function to update the quantity of an item in the cart
function updateCartItem(cartItemId, newCount) {
    const cart = getCart();
    const itemIndex = cart.findIndex(item => item.cartItemId === cartItemId);
    if (itemIndex !== -1) {
        cart[itemIndex].count = parseInt(newCount);
        if (cart[itemIndex].count < 1) {
            removeCartItem(cartItemId); // Remove if quantity becomes less than 1
        } else {
            updateCart(cart);
        }
    }
}

// Function to clear the entire cart
function clearCart() {
    localStorage.removeItem('aamodaCart');
    updateCartIcon();
}

// Function to get the number of items in the cart for the icon
function getCartItemCount() {
    const cart = getCart();
    return cart.reduce((total, item) => total + item.count, 0);
}

// Function to update the cart icon in the navigation
function updateCartIcon(elementToUpdate = document.getElementById('cart-icon-count')) {
    if (elementToUpdate) {
        elementToUpdate.textContent = getCartItemCount();
    }
}

// Function to calculate total weight of items in the cart based on the provided products data
function calculateTotalWeight(products) {
    const cart = getCart();
    let totalWeightInGrams = 0;
    cart.forEach(item => {
        const product = products.find(p => p.id === item.productId);
        if (product && product.weights && product.weights[item.quantityKey]) {
            totalWeightInGrams += product.weights[item.quantityKey] * item.count;
        }
    });
    return totalWeightInGrams / 1000; // Convert to kilograms for easier handling
}

// Call updateCartIcon on page load to set initial count
updateCartIcon();