// Function to show the popup
function showUpdatePopup() {
  const popup = document.getElementById('update-popup');
  popup.style.display = 'flex';
}

// Redirect to the new version
document.getElementById('update-button').addEventListener('click', () => {
  window.location.href = 'https://newversion.example.com'; // Replace with the new version URL
});

// Close the popup
document.getElementById('close-button').addEventListener('click', () => {
  const popup = document.getElementById('update-popup');
  popup.style.display = 'none';
});

// Trigger the popup (example: after 5 seconds)
setTimeout(showUpdatePopup, 5000);
