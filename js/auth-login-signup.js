function toggleForm() {
    document.getElementById('login-form').style.display =
        document.getElementById('login-form').style.display === 'none' ? 'block' : 'none';
    document.getElementById('signup-form').style.display =
        document.getElementById('signup-form').style.display === 'none' ? 'block' : 'none';
}

let users = JSON.parse(localStorage.getItem('users')) || [];

// ------------------ Signup -------------------
document.getElementById('signup').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
        alert('Name must contain only letters and spaces.');
        return;
    }

    if (users.some(user => user.email === email)) {
        alert('Email already exists!');
        return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    localStorage.setItem('cart', JSON.stringify([])); // Clear cart on signup

    alert('Signup successful!');
    window.location.href = "dashboard.html";
});


// ------------------ Login -------------------
document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert('Login successful!');
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('cart', JSON.stringify([])); //  Clear cart on login
        window.location.href = "dashboard.html";
    } else {
        alert('Invalid email or password!');
    }
});
