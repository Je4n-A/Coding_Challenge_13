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
                const { company, price, name } = product.fields;
                const imageUrl = product.fields.image[0].url;
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `
                    <img src="${imageUrl}" alt="${name}" style="width: 100px; height: 100px;">
                <div>
                    <h2>${name}</h2>
                    <p>Company: ${company}</p>
                    <p>Price: $${(price / 100).toFixed(2)}</p>
                <div>
                `;
                productList.appendChild(productDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
            const productList = document.getElementById('product-list');
            productList.innerHTML = '<p>Failed to load products. Please try again later.</p>';
        });
});