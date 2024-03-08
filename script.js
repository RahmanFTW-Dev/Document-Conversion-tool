document.getElementById('conversionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const fileInput = document.getElementById('fileInput').files[0]; // Get the selected file
    const conversionType = document.getElementById('conversionType').value;
    
    // Create FormData object to send file and conversion type
    const formData = new FormData();
    formData.append('file', fileInput);
    formData.append('conversionType', conversionType);
    
    // Make a POST request to the API Gateway endpoint
    fetch('https://zng7h85xn7.execute-api.ap-south-1.amazonaws.com/convert', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response data
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = `<p>${data.message}</p>`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
