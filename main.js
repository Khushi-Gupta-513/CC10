document.addEventListener('DOMContentLoaded', function () {
    const sizeDropdown = document.getElementById('size');
    const priceDisplay = document.getElementById('product-price');

    const sizePriceMapping = {
        'small': 100,
        'medium': 120,
        'large': 150
    };

    sizeDropdown.addEventListener('change', function () {
        const selectedSize = sizeDropdown.value;
        const updatedPrice = sizePriceMapping[selectedSize];
        priceDisplay.textContent = `$${updatedPrice}`;
    });
});

