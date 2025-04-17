let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartContainer = document.getElementById('cart-items');
const totalPriceDiv = document.getElementById('total-price');

// Initialize quantities
cart = cart.map(p => ({ ...p, quantity: p.quantity || 1 }));

function updateCartDisplay() {
  cartContainer.innerHTML = "";
  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalPriceDiv.textContent = "";
    document.querySelector('.pay-btn').style.display = "none";
    return;
  }

  cart.forEach((product, index) => {
    const div = document.createElement("div");
    div.classList.add("product-card");
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.category}</p>
      <p>₹${product.price} x ${product.quantity} = ₹${product.price * product.quantity}</p>
      <div class="quantity-controls">
        <button onclick="changeQuantity(${index}, -1)">➖</button>
        <span>${product.quantity}</span>
        <button onclick="changeQuantity(${index}, 1)">➕</button>
      </div>
    `;
    cartContainer.appendChild(div);
  });

  updateTotalPrice();
  localStorage.setItem('cart', JSON.stringify(cart));
}

function changeQuantity(index, delta) {
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  updateCartDisplay();
}

function updateTotalPrice() {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  totalPriceDiv.textContent = `Total Price: ₹${total}`;
}

updateCartDisplay();
