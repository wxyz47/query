document.getElementById('decodeButton').addEventListener('click', function() {
    const inputText = document.getElementById('input').value;
    const match = inputText.match(/tgWebAppData=(.*?)(?:&|$)/);
    
    if (match) {
        const encodedData = match[1];
        const decodedData = decodeURIComponent(encodedData);
        const output = decodedData
            .replace(/%22/g, '"')  // Mengganti %22 dengan "
            .replace(/%2C/g, ',');  // Mengganti %2C dengan ,

        document.getElementById('output').value = output;
    } else {
        document.getElementById('output').value = 'Data tidak ditemukan!';
    }
});

// Menyalin output ke clipboard
document.getElementById('copyButton').addEventListener('click', function() {
    const outputTextArea = document.getElementById('output');
    outputTextArea.select();
    document.execCommand('copy');
    alert('Output telah disalin ke clipboard!');
});
