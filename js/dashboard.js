// js/dashboard.js

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = "index.html";
}

let allProducts = [];

async function fetchProducts() {
    const res = await fetch('data/db.json');  // Change this line to point to db.json
    const products = await res.json();
    allProducts = products;
    displayProducts(products);
}


function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    if (products.length === 0) {
        productList.innerHTML = '<p>No products available.</p>';
        return;
    }

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>${product.category}</p>
            <p>₹${product.price}</p>
        `;
        productList.appendChild(card);
    });
}

function filterProducts(category) {
    if (category === 'all') {
        displayProducts(allProducts);
    } else {
        const filtered = allProducts.filter(p => p.category.toLowerCase() === category);
        displayProducts(filtered);
    }
}
fetchProducts();



function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    if (products.length === 0) {
        productList.innerHTML = '<p>No products available.</p>';
        return;
    }

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>${product.category}</p>
            <p>₹${product.price}</p>
            <button onclick='addToCart(${JSON.stringify(product)})'>Buy</button>
        `;
        productList.appendChild(card);
    });
}

// ----------------------------------add to cart
window.addToCart = function(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
}

