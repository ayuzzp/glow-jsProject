// Skin type based product recommendations
const productsBySkinType = {
  oily: [
    { name: "Oil Control Face Wash", price: 299, image: "assets/skintype/oily1.jpg" },
    { name: "Charcoal Clay Mask", price: 399, image: "assets/skintype/oily2.jpg" },
    { name: "Charcoal Clay Mask", price: 399, image: "assets/skintype/oily3.jpg" }
  ],
  dry: [
    { name: "Hydrating Moisturizer", price: 349, image: "assets/skintype/dry1.jpg" },
    { name: "Hydrating Moisturizer", price: 349, image: "assets/skintype/dry2.jpg" },
    { name: "Hydrating Moisturizer", price: 349, image: "assets/skintype/dry3.jpg" }
  ],
  combination: [
    { name: "Balancing Cleanser", price: 399, image: "assets/skintype/combo1.jpg" },
    { name: "Balancing Cleanser", price: 399, image: "assets/skintype/combo2.jpg" }
  ],
  sensitive: [
    { name: "Soothing Cream", price: 299, image: "assets/skintype/sens1.jpg" },
    { name: "Soothing Cream", price: 378, image: "assets/skintype/sens2.jpg" }
  ]
};

// Handle skin type form submission
document.getElementById("skin-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const type = document.getElementById("skin-type").value;
  const recommendations = productsBySkinType[type] || [];
  const container = document.getElementById("recommendations");

  container.innerHTML = "";

  recommendations.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product-card");
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
    `;

    const button = document.createElement("button");
    button.textContent = "Add to Cart 🛒";
    button.addEventListener("click", () => addToCart(product));

    div.appendChild(button);
    container.appendChild(div);
  });
});

// Add product to cart with quantity management
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existingIndex = cart.findIndex(p => p.name === product.name);

  if (existingIndex !== -1) {
    cart[existingIndex].quantity += 1;
  } else {
    product.quantity = 1;
    cart.push(product);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}
