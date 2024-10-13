 
function encodeText() {
    const inputText = document.getElementById('inputText').value;
    const encoded = btoa(unescape(encodeURIComponent(inputText)));
    document.getElementById('resultText').value = encoded;
}

function decodeText() {
    const inputText = document.getElementById('inputText').value;
    try {
        const decoded = decodeURIComponent(escape(atob(inputText)));
        document.getElementById('resultText').value = decoded;
    } catch (e) {
        alert('The input is not a valid Base64 encoded string.');
    }
}
 
