document.getElementById('decodeButton').addEventListener('click', function() {
    const input = document.getElementById('input').value;
    const urlPattern = /tgWebAppData=([^&]+)/;
    const match = input.match(urlPattern);
    
    if (match) {
        // Decode the matched group
        const decodedData = decodeURIComponent(match[1]);
        document.getElementById('output').value = decodedData;
    } else {
        document.getElementById('output').value = 'tgWebAppData not found.';
    }
});
