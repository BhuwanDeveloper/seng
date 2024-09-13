document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Validate input
    if (!name || !email || !date || !time) {
        alert('Please fill in all fields.');
        return;
    }

    // Create appointment entry
    const appointmentEntry = `${name} (${email}) - ${date} at ${time}`;

    // Add appointment to the list
    const appointmentsList = document.getElementById('appointmentsList');
    const listItem = document.createElement('li');
    listItem.textContent = appointmentEntry;
    appointmentsList.appendChild(listItem);

    // Clear form fields
    document.getElementById('appointmentForm').reset();
});
