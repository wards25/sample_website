// Function to download a file without authorization
function downloadWithoutAuthorization() {
    const fileData = 'Sample file content';

    const blob = new Blob([fileData], { type: 'text/plain' });

    // Create a URL for the Blob object
    const url = URL.createObjectURL(blob);

    // Create an anchor element
    const a = document.createElement('a');

    // Set the href attribute to the URL
    a.href = url;

    // Set the download attribute to the desired filename
    a.download = 'sample.txt'; // Replace 'sample.txt' with your desired filename

    // Programmatically trigger a click event on the anchor element
    a.click();

    // Clean up by revoking the URL
    URL.revokeObjectURL(url);
}


// Function to download a file with authorization
function downloadWithAuthorization() {
   window.location.href = 'login.html';
}

// Event listeners for the buttons
document.getElementById('noAuthButton').addEventListener('click', downloadWithoutAuthorization);
document.getElementById('authButton').addEventListener('click', downloadWithAuthorization);
