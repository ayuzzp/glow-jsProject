const form = document.getElementById('product-form');
const tableBody = document.getElementById('productTableBody');
let products = JSON.parse(localStorage.getItem('products')) || [];
let editIndex = null;

function renderProducts() {
  tableBody.innerHTML = '';
  products.forEach((product, index) => {
    tableBody.innerHTML += `
      <tr>
        <td><img src="${product.image}" alt="${product.name}" width="60"></td>
        <td>${product.name}</td>
        <td>₹${product.price}</td>
        <td>
          <button onclick="editProduct(${index})">Edit</button>
          <button onclick="deleteProduct(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('productName').value;
  const price = document.getElementById('productPrice').value;
  const image = document.getElementById('productImage').value;

  const product = { name, price, image };

  if (editIndex === null) {
    products.push(product); // Create
  } else {
    products[editIndex] = product; // Update
    editIndex = null;
  }

  localStorage.setItem('products', JSON.stringify(products));
  form.reset();
  renderProducts();
});

function editProduct(index) {
  const product = products[index];
  document.getElementById('productName').value = product.name;
  document.getElementById('productPrice').value = product.price;
  document.getElementById('productImage').value = product.image;
  editIndex = index;
}

function deleteProduct(index) {
  products.splice(index, 1); // Delete
  localStorage.setItem('products', JSON.stringify(products));
  renderProducts();
}

renderProducts();
