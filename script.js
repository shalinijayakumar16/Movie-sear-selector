const container = document.querySelector('.container');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const submitButton = document.getElementById('submit');
const paymentModal = document.getElementById('paymentModal');
const closeModal = document.getElementById('closeModal');
const okButton = document.getElementById('okButton');
const paymentMessage = document.getElementById('paymentMessage');

// Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;

    const ticketPrice = +movieSelect.value;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// Seat click event
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('sold')) {
        e.target.classList.toggle('selected'); // Toggle seat selection
        updateSelectedCount(); // Update the count and total
    }
});

// Movie select event
movieSelect.addEventListener('change', updateSelectedCount);

// Initialize count and total to zero on load
document.addEventListener('DOMContentLoaded', () => {
    count.innerText = 0;
    total.innerText = 0;
});

// Submit button event
submitButton.addEventListener('click', () => {
    if (count.innerText > 0) {
        const selectedSeatsCount = count.innerText;
        const ticketPrice = total.innerText;
        paymentMessage.innerText = `Your payment of RS.${ticketPrice} for ${selectedSeatsCount} seat(s) is successful!`;
        paymentModal.style.display = 'block';
    } else {
        alert("Please select at least one seat.");
    }
});

// Close modal event
closeModal.addEventListener('click', () => {
    paymentModal.style.display = 'none';
});

// OK button event
okButton.addEventListener('click', () => {
    paymentModal.style.display = 'none';
    // Reset the selection after payment
    document.querySelectorAll('.row .seat.selected').forEach(seat => {
        seat.classList.remove('selected');
    });
    updateSelectedCount(); // Reset the count and total
});






