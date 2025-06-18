// cart.js
// This file handles all shopping cart logic, including adding, updating, removing items,
// and persisting the cart data in localStorage.

let cart = []; // Initialize an empty cart array

// Function to load the cart from localStorage when the page loads
function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    updateCartIcon(); // Update the cart count displayed in the navbar
}

// Function to save the current cart state to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// In cart.js - Find and modify your addToCart function
function addToCart(productId, quantityKey, count) {
    const product = getProductById(productId); // This gets product details (from 'products' array, likely from products.js)

    if (!product) {
        console.error('Product not found:', productId);
        return;
    }

    // Ensure product.prices[quantityKey] exists before proceeding
    if (!product.prices || typeof product.prices[quantityKey] === 'undefined') {
        console.error(`Price for quantity key "<span class="math-inline">\{quantityKey\}" not found for product "</span>{productId}".`);
        return;
    }

    const pricePerUnit = product.prices[quantityKey];

    const existingItem = cart.find(item => item.id === productId && item.quantityKey === quantityKey);

    if (existingItem) {
        existingItem.count += count;
    } else {
        // Generate a unique cart item ID (ensure generateCartItemId is defined in cart.js)
        const cartItemId = generateCartItemId(productId, quantityKey);

        cart.push({
            cartItemId: cartItemId,     // Unique ID for this specific cart entry
            id: productId,              // Product ID
            name: product.name,         // <-- ADD THIS LINE (if not already present)
            image: product.image,       // <-- ADD THIS LINE (if not already present)
            quantityKey: quantityKey,   // e.g., '250gm'
            count: count,               // Number of units of this specific quantity
            pricePerUnit: pricePerUnit  // Price for a single unit of this quantity
        });
    }
    saveCart(); // Save changes to localStorage
    updateCartIcon(); // Update cart icon
    console.log("Item added to cart:", { productId, quantityKey, count, product });
}
function calculateTotalWeight() {
    let totalWeight = 0; // in grams
    const currentCart = getCart();

    currentCart.forEach(item => {
        const product = getProductById(item.id); // Assuming getProductById is accessible here

        if (product && product.weights && typeof product.weights[item.quantityKey] !== 'undefined') {
            totalWeight += product.weights[item.quantityKey] * item.count;
        } else {
            console.warn(`Weight data for product ID ${item.id}, quantity key ${item.quantityKey} not found or invalid.`);
            // You might want to handle this error or assign a default weight
        }
    });
    return totalWeight; // Returns total weight in grams
}
// Function to update the quantity of an item in the cart
// cartItemId: The unique identifier of the cart item (product ID + quantity key)
// newCount: The new count for this item
function updateCartItem(cartItemId, newCount) {
    const itemIndex = cart.findIndex(item => item.cartItemId === cartItemId);
    if (itemIndex > -1) {
        const parsedNewCount = parseInt(newCount, 10);
        if (!isNaN(parsedNewCount) && parsedNewCount > 0) {
            cart[itemIndex].count = parsedNewCount;
            saveCart(); // Save changes
            updateCartIcon(); // Update cart icon
        } else if (!isNaN(parsedNewCount) && parsedNewCount <= 0) {
            // If new count is 0 or less, remove the item
            removeCartItem(cartItemId);
        }
    }
}

// Function to remove an item from the cart
// cartItemId: The unique identifier of the cart item
function removeCartItem(cartItemId) {
    cart = cart.filter(item => item.cartItemId !== cartItemId);
    saveCart(); // Save changes
    updateCartIcon(); // Update cart icon
}

// Function to get the current cart contents
function getCart() {
    // Ensure this correctly loads from localStorage
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
}

// Function to calculate the total price of all items in the cart
// In cart.js
function calculateCartTotal() {
    return cart.reduce((total, item) => {
        // Ensure item.pricePerUnit and item.count are numbers
        const price = parseFloat(item.pricePerUnit) || 0;
        const count = parseInt(item.count) || 0;
        return total + (price * count);
    }, 0);
}
// Function to clear the entire cart
function clearCart() {
    cart = [];
    localStorage.removeItem('cart'); // Clear from localStorage
    updateCartIcon(); // Reset cart icon
}

// Function to update the number displayed on the cart icon in the navbar
function updateCartIcon() {
    const currentCart = getCart();
    const cartIconCountMobile = document.getElementById('cart-icon-count-mobile');
    const cartIconCountDesktop = document.getElementById('cart-icon-count-desktop');

    const itemCount = currentCart.reduce((sum, item) => sum + item.count, 0);

    if (cartIconCountMobile) {
        cartIconCountMobile.textContent = itemCount;
    }
    if (cartIconCountDesktop) {
        cartIconCountDesktop.textContent = itemCount;
    }
}

// Function to get product details by ID from the products array
function getProductById(productId) {
    return products.find(product => product.id === productId);
}

function generateCartItemId(productId, quantityKey) {
    return `${productId}-${quantityKey}`;
}


// Load the cart when the script is first loaded (on page load)
document.addEventListener('DOMContentLoaded', loadCart);