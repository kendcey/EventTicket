let timerInterval;
let totalTime = 600; // 10 minutes in seconds
const ticketPrice = 5.50; // $5.00 + $0.50 processing fee

// Initialize timer
function initTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    totalTime--;
    const minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    
    document.getElementById('timer').textContent = `${minutes}:${seconds}`;

    if (totalTime <= 0) {
        clearInterval(timerInterval);
        alert("Sorry, your time to complete the form has expired. Please click OK to try again.");
        resetForm();
        location.reload();
    }
}

function calculateTotal() {
    const ticketsInput = document.getElementById('tickets');
    const tickets = parseInt(ticketsInput.value);
    const totalElement = document.getElementById('total');
    const ticketsError = document.getElementById('ticketsError');

    if (isNaN(tickets) || tickets < 1 || tickets > 3) {
        ticketsError.textContent = 'Please enter a number between 1-3';
        ticketsInput.style.borderColor = 'red';
        totalElement.textContent = '$0.00';
    } else {
        ticketsError.textContent = '';
        ticketsInput.style.borderColor = '#ddd'; // Reset border color to default
        const total = tickets * ticketPrice;
        totalElement.textContent = `$${total.toFixed(2)}`;
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function resetForm() {
    document.getElementById('registrationForm').reset();
    document.getElementById('total').textContent = '$0.00';
    clearErrors();
    window.scrollTo(0, 0);
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(error => {
        error.textContent = '';
    });
}

function completePurchase() {
    const tickets = document.getElementById('tickets').value;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    let isValid = true;

    // Clear previous errors
    clearErrors();

    // Validate tickets
    if (!tickets || isNaN(tickets) || tickets < 1 || tickets > 3) {
        document.getElementById('ticketsError').textContent = 'Please enter a number between 1-3';
        isValid = false;
    }

    // Validate name
    if (!name) {
        document.getElementById('nameError').textContent = 'This field is required';
        isValid = false;
    }

    // Validate email
    if (!email) {
        document.getElementById('emailError').textContent = 'This field is required';
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        isValid = false;
    }

    if (isValid) {
        const total = document.getElementById('total').textContent;
        clearInterval(timerInterval);
        alert(`Thank you for your purchase! Your total is ${total}. Please allow 24 hours for electronic delivery.`);
        resetForm();
        initTimer(); // Restart timer for new transaction
    }
}

// Event listeners
document.getElementById('tickets').addEventListener('input', calculateTotal);
window.onload = initTimer;
