document.getElementById('decodeButton').addEventListener('click', function() {
    const inputText = document.getElementById('input').value;
    const match = inputText.match(/tgWebAppData=(.*?)(?:&|$)/);

    if (match) {
        const encodedData = match[1];
        let decodedData = decodeURIComponent(encodedData);
        decodedData = decodedData
            .replace(/%22/g, '"')
            .replace(/%7B/g, '{')
            .replace(/%7D/g, '}')
            .replace(/%3A/g, ':')
            .replace(/%2C/g, ',')
            .replace(/%20/g, ' ')
            .replace(/&user=/, '&user=');

        document.getElementById('output').value = decodedData;
    } else {
        document.getElementById('output').value = 'Data tidak ditemukan!';
    }
});

document.getElementById('copyButton').addEventListener('click', function() {
    const outputTextArea = document.getElementById('output');
    outputTextArea.select();
    document.execCommand('copy');
    alert('Output berhasil disalin!');
});

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('input').value = '';
    document.getElementById('output').value = '';
});
