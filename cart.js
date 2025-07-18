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

// Function to add an item to the cart
// productId: The unique ID of the product
// quantityKey: The selected quantity (e.g., '250gm', '500gm', '1kg', 'piece')
// count: The number of units of this specific quantity (e.g., 2 for two 250gm packs)
function addToCart(productId, quantityKey, count) {
    // Find the product in the global 'products' array (from products.js)
    const product = getProductById(productId); // Use getProductById
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }

    // Check if the selected quantity key exists for this product
    if (!product.prices[quantityKey]) {
        console.error(`Quantity key "${quantityKey}" not found for product "${productId}"`);
        return;
    }

    // Create a unique identifier for the cart item based on product ID and quantity key
    const cartItemId = generateCartItemId(productId, quantityKey);

    // Find if the item already exists in the cart
    const existingItemIndex = cart.findIndex(item => item.cartItemId === cartItemId);

    if (existingItemIndex > -1) {
        // If item exists, update its count
        cart[existingItemIndex].count += parseInt(count, 10); // Ensure count is treated as a number
    } else {
        // If item does not exist, add it to the cart
        cart.push({
            cartItemId: cartItemId, // Unique ID for this specific cart entry
            id: productId,
            name: product.name,
            image: product.image,
            quantityKey: quantityKey, // e.g., '250gm'
            pricePerUnit: product.prices[quantityKey], // Price for one unit of this quantity
            count: parseInt(count, 10) // Ensure count is treated as a number
        });
    }
    saveCart(); // Save the updated cart to localStorage
    updateCartIcon(); // Update the cart count in the UI
    alert('Item added to cart!'); // Inform the user
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
    return cart;
}

// Function to calculate the total price of all items in the cart
function calculateCartTotal() {
    return cart.reduce((total, item) => total + (item.pricePerUnit * item.count), 0);
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
document.addEventListener('DOMContentLoaded', () => {
    renderCart();
    updateCartIcon();

    // 🔁 Attach event listener to clear cart button
    const clearCartBtn = document.getElementById('clear-cart-btn');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', () => {
            clearCart();
            renderCart();
        });
    }
});