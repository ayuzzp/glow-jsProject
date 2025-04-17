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
        <button onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
      `;
      container.appendChild(div);
    });
  });
  