<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your Cart - Aamoda Pickles</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        /* Existing styles from your previous response */
        .cart-item {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
            width: 70%;
            margin-left: auto;
            margin-right: auto;
            gap: 20px;
        }

        .cart-item img {
            max-width: 60px;
        }

        .cart-item-details {
            flex-grow: 1;
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .cart-item-quantity {
            display: flex;
            align-items: center;
        }

        .quantity-input-wrapper {
            display: flex;
            align-items: center;
            border: 1px solid #ccc;
            border-radius: 5px;
            overflow: hidden;
        }

        .quantity-input-wrapper button {
            background: none;
            border: none;
            padding: 8px 10px;
            cursor: pointer;
            font-size: 1em;
            line-height: 1;
        }

        .quantity-input-wrapper input[type="number"] {
            width: 40px;
            padding: 8px 5px;
            text-align: center;
            border: none;
            -webkit-appearance: none;
            -moz-appearance: textfield;
        }

        .quantity-input-wrapper {
            position: relative;
        }

        .quantity-input-wrapper::after {
            content: '▲\a▼';
            position: absolute;
            top: 50%;
            right: 5px;
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
            font-size: 0.7em;
            color: #555;
            pointer-events: none;
        }

        .cart-item-actions {
            margin-left: auto;
        }

        .cart-item-actions button {
            padding: 5px 10px;
            background-color: #dc3545;
            color: white;
            border: none;
            cursor: pointer;
        }

        .cart-total {
            text-align: right;
            font-size: 1.2em;
            font-weight: bold;
            margin-top: 20px;
            width: 70%;
            margin-left: auto;
            margin-right: auto;
        }

        .text-center {
            width: 70%;
            margin-left: auto;
            margin-right: auto;
            margin-top: 10px;
        }

        .text-center button,
        .text-center a {
            margin: 0 5px;
        }

        /* Mobile-specific quantity button styling */
        @media (max-width: 600px) {
            .quantity-input-wrapper {
                border: none;
            }

            .quantity-input-wrapper::after {
                display: none;
            }

            .quantity-btn {
                padding: 10px 15px;
                font-size: 1.2em;
                border: 1px solid #ccc;
                border-radius: 3px;
                margin: 0 5px;
            }

            .quantity-input {
                width: 50px;
                padding: 10px 5px;
                border: 1px solid #ccc;
                border-radius: 3px;
            }
        }

        /* Adjust cart item layout for mobile */
        @media (max-width: 600px) {
            .cart-item {
                flex-direction: column;
                align-items: flex-start;
            }

            .cart-item img {
                margin-bottom: 10px;
            }

            .cart-item-details {
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
            }

            .cart-item-quantity {
                margin-bottom: 10px;
            }

            .cart-item-actions {
                margin-left: 0;
            }
        }
    </style>
</head>

<body>
    <nav class="navbar navbar-expand-lg custom-navbar">
        <div class="container ">
            <a class="navbar-brand" href="#">
                <img src="logo.png" class="logo-image" alt="Aamoda Pickles Logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="bg">Menu</span>
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav m-auto">
                    <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="veg.html">Veg Pickles</a></li>
                    <li class="nav-item"><a class="nav-link" href="nonveg.html">Non-Veg Pickles</a></li>
                    <li class="nav-item"><a class="nav-link" href="specials.html">Specials</a></li>
                    <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                    <li class="nav-item">
                        <a class="nav-link" href="cart.html">
                            <i class="fas fa-shopping-cart"></i> Cart (<span id="cart-icon-count">0</span>)
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <header class="header text-center py-4">
        <h1>Your Shopping Cart</h1>
    </header>

    <section class="cart-section py-5 bg-light">
        <div class="container">
            <div id="cart-items" class="mb-4">
            </div>
            <div class="text-end mb-4">
                <h4>Total: ₹<span id="cart-total">0</span></h4>
            </div>
            <div class="text-center">
                <button class="btn btn-danger" id="clear-cart-btn">Clear Cart</button>
                <a href="checkout.html" class="btn btn-success" id="checkout-btn">Proceed to Checkout</a>
            </div>
        </div>
    </section>

    <section class="contact-section py-5 bg text-white">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-4 text-center mb-4 mb-md-0">
                    <img src="logo.png" class="img-fluid" style="max-height: 250px;" alt="Aamoda Pickles Logo">
                </div>
                <div class="col-md-8 text-center text-md-start">
                    <h2>Contact Us</h2>
                    <p>We'd love to hear from you! Connect with us through:</p>
                    <div class="d-flex flex-column flex-md-row justify-content-center justify-content-md-start gap-3">
                        <a href="https://wa.me/917731021234?text=Hi%2C%20I%27d%20like%20to%20place%20an%20order%20from%20Aamoda%20Pickles" class="btn btn-success">📞 WhatsApp</a>
                        <a href="https://www.instagram.com/aamodapickles" class="btn btn-light" target="_blank">📸 Instagram</a>
                        <a href="mailto:aamodapickles@gmail.com" class="btn btn-warning">📧 Email Us</a>
                        <a href="tel:7731021234" class="btn btn-primary">📱 Call: 7731021234</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer bg-warning text-center py-4">
        <p>© 2025 Aamoda Pickles. All rights reserved.</p>
        <div class="container mt-2">
            <a href="terms.html" class="text-red mx-2">Terms & Conditions</a> |
            <a href="shipping.html" class="text-red mx-2">Shipping Policy</a> |
            <a href="contact.html" class="text-red mx-2">Contact Us</a>
            <a href="refundpolicy.html" class="text-red mx-2">Cancel & refund Policy</a>
            <a href="privacypolicy.html" class="text-red mx-2">Privacy Policy</a>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="products.js"></script>
    <script src="cart.js"></script>
    <script>
        function renderCart() {
            const cartItemsContainer = document.getElementById('cart-items');
            const cartTotalElement = document.getElementById('cart-total');
            const cartData = getCart(); // Use the getCart() function from cart.js

            cartItemsContainer.innerHTML = '';

            if (cartData.length === 0) {
                cartItemsContainer.innerHTML = '<p class="text-center">Your cart is empty.</p>';
                cartTotalElement.textContent = '0';
                document.getElementById('checkout-btn').classList.add('disabled');
                document.getElementById('clear-cart-btn').classList.add('disabled');
                return;
            }

            document.getElementById('checkout-btn').classList.remove('disabled');
            document.getElementById('clear-cart-btn').classList.remove('disabled');

            let total = 0;
            cartData.forEach(item => {
                const itemTotal = item.pricePerUnit * item.count;
                total += itemTotal;

                const cartItemHtml = `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="cart-item-details">
                            <h4>${item.name} (${item.quantityKey})</h4>
                            <p>Price per unit: ₹${item.pricePerUnit}</p>
                            <div class="cart-item-quantity">
                                <label for="quantity-${item.cartItemId}" class="form-label me-2 mb-0">Quantity:</label>
                                <div class="quantity-input-wrapper">
                                    <button class="quantity-btn minus" onclick="changeQuantity('${item.cartItemId}', -1)">-</button>
                                    <input type="number" id="quantity-${item.cartItemId}" value="${item.count}" min="1" class="quantity-input" onchange="updateQuantity('${item.cartItemId}', this.value)">
                                    <button class="quantity-btn plus" onclick="changeQuantity('${item.cartItemId}', 1)">+</button>
                                </div>
                                <p class="mt-2">Item Total: ₹<span id="item-total-${item.cartItemId}">${itemTotal}</span></p>
                            </div>
                        </div>
                        <div class="cart-item-actions">
                            <button class="remove-item-btn" onclick="removeCartItem('${item.cartItemId}')">Remove</button>
                        </div>
                    </div>
                `;
                cartItemsContainer.innerHTML += cartItemHtml;
            });

            cartTotalElement.textContent = total;

            // Local function to handle quantity changes
            function changeQuantity(cartItemId, change) {
                const currentCart = getCart();
                const itemIndex = currentCart.findIndex(item => item.cartItemId === cartItemId);
                if (itemIndex !== -1) {
                    const newCount = Math.max(1, currentCart[itemIndex].count + change);
                    updateCartItem(cartItemId, newCount); // Use the updateCartItem function from cart.js
                    renderCart(); // Re-render to update the display
                }
            }

            // Local function to handle direct input quantity changes
            function updateQuantity(cartItemId, newQuantity) {
                const parsedQuantity = Math.max(1, parseInt(newQuantity));
                if (!isNaN(parsedQuantity)) {
                    updateCartItem(cartItemId, parsedQuantity); // Use the updateCartItem function from cart.js
                    renderCart(); // Re-render to update the display
                }
            }

            // Attach local functions to the window if needed for onclick (though event listeners are generally preferred)
            window.changeQuantity = changeQuantity;
            window.updateQuantity = updateQuantity;
        }

        document.addEventListener('DOMContentLoaded', () => {
            renderCart(); // Initial render of the cart
            updateCartIcon(); // Ensure cart icon is updated on page load
        });

        // Event listener for clearing the entire cart
        document.getElementById('clear-cart-btn').addEventListener('click', () => {
            clearCart(); // Use the clearCart function from cart.js
            renderCart(); // Re-render to show empty cart
        });
    </script>
</body>

</html>