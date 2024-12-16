document.getElementById('appointment-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const message = document.getElementById('message').value;

    // Save data to localStorage
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.push({ name, email, date, time, message });
    localStorage.setItem('appointments', JSON.stringify(appointments));

    // Show confirmation
    document.getElementById('appointment-form').classList.add('hidden');
    document.getElementById('confirmation').classList.remove('hidden');
});
