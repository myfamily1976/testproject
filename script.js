document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple validation
        if (username === '' || password === '') {
            messageDiv.textContent = 'Please fill in both fields.';
            messageDiv.style.color = 'red';
            return;
        }

        // Simulate sending data to a server
        login(username, password)
            .then(response => {
                if (response.success) {
                    messageDiv.textContent = 'Login successful!';
                    messageDiv.style.color = 'green';
                } else {
                    messageDiv.textContent = 'Invalid username or password.';
                    messageDiv.style.color = 'red';
                }
            })
            .catch(error => {
                messageDiv.textContent = 'An error occurred. Please try again.';
                messageDiv.style.color = 'red';
            });
    });
});

// Simulate a login function that interacts with a server
function login(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'user' && password === 'pass') {
                resolve({ success: true });
            } else {
                resolve({ success: false });
            }
        }, 1000); // Simulate network delay
    });
}