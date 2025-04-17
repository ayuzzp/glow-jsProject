document.getElementById('payment-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const pincode = document.getElementById('pincode').value;
  const phone = document.getElementById('phone').value;
  const payment = document.querySelector('input[name="payment"]:checked').value;

  // Save details to localStorage
  const userDetails = { name, address, city, pincode, phone, payment };
  localStorage.setItem('glowUserDetails', JSON.stringify(userDetails));

  // Redirect to confirmation page
  window.location.href = 'confirmation.html';
});
