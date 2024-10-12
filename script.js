document.getElementById('decodeButton').addEventListener('click', function() {
    // Ambil input dari textarea
    const inputText = document.getElementById('input').value;

    // Mencari bagian tgWebAppData
    const match = inputText.match(/tgWebAppData=(.*?)(?:&|$)/);
    if (match) {
        const encodedData = match[1];
        // Decode data
        const decodedData = decodeURIComponent(encodedData);
        // Format output
        const output = decodedData.replace(/%22/g, '"').replace(/%2C/g, ',');
        
        // Tampilkan output di elemen <pre>
        document.getElementById('output').innerText = output;
    } else {
        document.getElementById('output').innerText = 'Data tidak ditemukan!';
    }
});
