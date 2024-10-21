document.addEventListener('DOMContentLoaded', function () {
    const sizeDropdown = document.getElementById('size');
    const priceDisplay = document.getElementById('product-price');
    const purchaseButton = document.getElementById('purchase-btn');

    const sizePriceMapping = {
        'small': { price: 100, stock: true },
        'medium': { price: 120, stock: true },
        'large': { price: 150, stock: false }
    };

    sizeDropdown.addEventListener('change', function () {
        const selectedSize = sizeDropdown.value;
        const sizeDetails = sizePriceMapping[selectedSize];

        // Update price
        priceDisplay.textContent = `$${sizeDetails.price}`;

        // Disable button if out of stock
        if (sizeDetails.stock) {
            purchaseButton.disabled = false;
        } else {
            purchaseButton.disabled = true;
        }
    });
});
