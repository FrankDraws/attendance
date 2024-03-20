// Function to get current date in MM/DD/YYYY format
function getCurrentDate() {
    let today = new Date();
    let month = String(today.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-indexed
    let day = String(today.getDate()).padStart(2, '0');
    let year = today.getFullYear();
    return month + '/' + day + '/' + year;
}

// Update the heading with the current date
document.getElementById('currentDate').innerText = getCurrentDate();