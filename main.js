document.addEventListener('DOMContentLoaded', function() {
    fetch('https://www.course-api.com/javascript-store-products') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const productList = document.getElementById('product-list');
            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p>Price: $${product.price}</p>
                `;
                productList.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});