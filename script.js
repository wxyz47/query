document.getElementById('decodeButton').addEventListener('click', function() {
    const inputText = document.getElementById('input').value;
    const match = inputText.match(/tgWebAppData=(.*?)(?:&|$)/);

    if (match) {
        const encodedData = match[1];
        const decodedData = decodeURIComponent(encodedData);

        // Memperbaiki format output
        const output = decodedData
            .replace(/%7B/g, '{') // Mengganti %7B dengan {
            .replace(/%22/g, '"') // Mengganti %22 dengan "
            .replace(/%2C/g, ',') // Mengganti %2C dengan ,
            .replace(/%7D/g, '}') // Mengganti %7D dengan }
            .replace(/%20/g, ' '); // Mengganti %20 dengan spasi

        // Menampilkan output ke textarea
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
});

// Fitur untuk menghapus input
document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('input').value = '';
    document.getElementById('output').value = ''; // Menghapus output juga
});
