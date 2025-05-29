document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    const productNameDetails = document.getElementById('product-name-details');
    const productImageDetails = document.getElementById('product-image-details');
    const productDescriptionDetails = document.getElementById('product-description-details');
    const productIngredientsDetails = document.getElementById('product-ingredients-details');
    const quantityDetailsSelect = document.getElementById('quantity-details-select');
    const addToCartDetailsBtn = document.getElementById('add-to-cart-details-btn');
    const addToCartMessage = document.getElementById('add-to-cart-message');

    const quantityInput = document.getElementById('item-quantity');
    const decreaseButton = document.getElementById('decrease-quantity');
    const increaseButton = document.getElementById('increase-quantity');

    if (productId) {
        const product = products.find(p => p.id === productId);

        if (product) {
            productNameDetails.textContent = product.name;
            productImageDetails.src = product.image;
            productImageDetails.alt = product.name;
            productDescriptionDetails.textContent = product.description || 'No description available.';
            productIngredientsDetails.textContent = product.ingredients ? product.ingredients.join(', ') : 'No ingredients listed.';

            // Populate quantity options
            for (const key in product.prices) {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = `${key} - ₹${product.prices[key]}`;
                quantityDetailsSelect.appendChild(option);
            }

            if (decreaseButton) {
                decreaseButton.addEventListener('click', () => {
                    let currentValue = parseInt(quantityInput.value);
                    if (currentValue > 1) {
                        quantityInput.value = currentValue - 1;
                    }
                });
            }

            if (increaseButton) {
                increaseButton.addEventListener('click', () => {
                    let currentValue = parseInt(quantityInput.value);
                    quantityInput.value = currentValue + 1;
                });
            }

            addToCartDetailsBtn.addEventListener('click', () => {
                const selectedQuantityKey = quantityDetailsSelect.value;
                const itemCount = parseInt(quantityInput.value); // Get the count from the number input

                if (selectedQuantityKey && !isNaN(itemCount) && itemCount > 0) {
                    addToCart(productId, selectedQuantityKey, itemCount); // Pass both key and count
                    addToCartMessage.style.display = 'block';
                    setTimeout(() => {
                        addToCartMessage.style.display = 'none';
                    }, 2000); // Hide message after 2 seconds
                    updateCartIcon();
                } else {
                    alert('Please select a quantity and a valid count.'); // Optional: Inform the user
                }
            });

            updateCartIcon(); // Ensure cart icon is updated on page load
        } else {
            document.querySelector('.container > .row').innerHTML = '<p class="text-danger">Product not found.</p>';
        }
    } else {
        document.querySelector('.container > .row').innerHTML = '<p class="text-danger">Invalid product ID.</p>';
    }
});

// Helper function to get product details (assuming it exists in your cart.js or a common utility file)
function getProductDetails(productId) {
    const products = getProducts(); // Assuming getProducts() is in products.js
    return products.find(product => product.id === productId);
}

// Function to add to cart (this function likely resides in your cart.js)
// Make sure it can handle productId, quantityKey, and count
function addToCart(productId, quantityKey, count) {
    let cart = getCart();
    const cartItemId = generateCartItemId(productId, quantityKey);
    const existingItem = cart.find(item => item.cartItemId === cartItemId);
    const productDetails = getProductDetails(productId);

    if (productDetails && productDetails.prices && productDetails.prices[quantityKey]) {
        const pricePerUnit = productDetails.prices[quantityKey];
        const name = productDetails.name;
        const image = productDetails.image;

        if (existingItem) {
            existingItem.count += count;
        } else {
            cart.push({
                cartItemId: cartItemId,
                id: productId,
                name: name,
                quantityKey: quantityKey,
                count: count,
                pricePerUnit: pricePerUnit,
                image: image
            });
        }
        saveCart(cart);
    } else {
        console.error('Error adding to cart: Product details or price not found.');
    }
}

// These functions should be in your cart.js file
function getCart() {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartIcon() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.count, 0);
    const cartIconCountDesktop = document.getElementById('cart-icon-count-desktop');
    const cartIconCountMobile = document.getElementById('cart-icon-count-mobile');
    if (cartIconCountDesktop) cartIconCountDesktop.textContent = totalItems;
    if (cartIconCountMobile) cartIconCountMobile.textContent = totalItems;
}

// This function should be in your cart.js file
function generateCartItemId(productId, quantityKey) {
    return `${productId}-${quantityKey}`;
}

// This function should be in your products.js file
function getProducts() {
    try {
        return JSON.parse(localStorage.getItem('products')) || [];
    } catch (error) {
        console.error("Error parsing products from localStorage:", error);
        return [];
    }
}