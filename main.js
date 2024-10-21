document.addEventListener('DOMContentLoaded', function () {
    const sizeDropdown = document.getElementById('size');
    const priceDisplay = document.getElementById('product-price');
    const purchaseButton = document.getElementById('purchase-btn');
    const productList = document.getElementById('product-list');
    const form = document.getElementById('add-product-form');

    const sizePriceMapping = {
        'small': { price: 100, stock: true },
        'medium': { price: 120, stock: true },
        'large': { price: 150, stock: false }
    };

    sizeDropdown.addEventListener('change', function () {
        const selectedSize = sizeDropdown.value;
        const sizeDetails = sizePriceMapping[selectedSize];
        priceDisplay.textContent = `$${sizeDetails.price}`;
        purchaseButton.disabled = !sizeDetails.stock;
    });

    purchaseButton.addEventListener('click', function () {
        const selectedSize = sizeDropdown.value;
        const sizeDetails = sizePriceMapping[selectedSize];
        alert(sizeDetails.stock ? 'Purchase successful!' : 'Sorry, this product is out of stock.');
    });

    // Add new products dynamically
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const productName = document.getElementById('new-product-name').value;
        const productPrice = document.getElementById('new-product-price').value;
        const productSize = document.getElementById('new-product-size').value;
        const li = document.createElement('li');
        li.textContent = `${productName} - $${productPrice} - Size: ${productSize}`;
        productList.appendChild(li);
    });

    // Event delegation to handle clicks on dynamically added products
    productList.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            const price = event.target.textContent.split('- $')[1].split(' -')[0];
            alert(`Product price is $${price}`);
        }
    });
});
