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
                const itemCount = parseInt(quantityInput.value);

                if (selectedQuantityKey && !isNaN(itemCount) && itemCount > 0) {
                    addToCart(productId, selectedQuantityKey, itemCount); // Call addToCart from cart.js
                    addToCartMessage.style.display = 'block';
                    setTimeout(() => {
                        addToCartMessage.style.display = 'none';
                    }, 2000);
                } else {
                    alert('Please select a quantity and a valid count.');
                }
            });

        } else {
            document.querySelector('.container > .row').innerHTML = '<p class="text-danger">Product not found.</p>';
        }
    } else {
        document.querySelector('.container > .row').innerHTML = '<p class="text-danger">Invalid product ID.</p>';
    }
});