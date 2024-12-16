document.addEventListener('DOMContentLoaded', function () {
    const appointmentsList = document.getElementById('appointments-list');
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];

    if (appointments.length === 0) {
        appointmentsList.innerHTML = '<tr><td colspan="5">No appointments found.</td></tr>';
        return;
    }

    appointments.forEach(appointment => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${appointment.name}</td>
            <td>${appointment.email}</td>
            <td>${appointment.date}</td>
            <td>${appointment.time}</td>
            <td>${appointment.message || '-'}</td>
        `;
        appointmentsList.appendChild(row);
    });
});
