const inputField = document.getElementById('input-field');
const encryptButton = document.getElementById('encrypt-button');
const decryptButton = document.getElementById('decrypt-button');
const resultDiv = document.getElementById('result');
const copyButton = document.getElementById('copy-button');
const resultText = document.getElementById('result-text');


function encrypt(text) {
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
        switch (text[i]) {
            case 'e':
                encryptedText += 'enter';
                break;
            case 'i':
                encryptedText += 'imes';
                break;
            case 'a':
                encryptedText += 'ai';
                break;
            case 'o':
                encryptedText += 'ober';
                break;
            case 'u':
                encryptedText += 'ufat';
                break;
            default:
                encryptedText += text[i];
        }
    }
    return encryptedText;
}

function decrypt(text) {
    let decryptedText = '';
    let temp = '';
    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'e' && text.substring(i, i + 5) === 'enter') {
            decryptedText += 'e';
            i += 4;
        } else if (text[i] === 'i' && text.substring(i, i + 4) === 'imes') {
            decryptedText += 'i';
            i += 3;
        } else if (text[i] === 'a' && text.substring(i, i + 2) === 'ai') {
            decryptedText += 'a';
            i += 1;
        } else if (text[i] === 'o' && text.substring(i, i + 4) === 'ober') {
            decryptedText += 'o';
            i += 3;
        } else if (text[i] === 'u' && text.substring(i, i + 4) === 'ufat') {
            decryptedText += 'u';
            i += 3;
        } else {
            decryptedText += text[i];
        }
    }
    return decryptedText;
}


encryptButton.addEventListener('click', () => {
    const text = inputField.value.toLowerCase();
    const encryptedText = encrypt(text);
    resultDiv.innerText = encryptedText;
});

decryptButton.addEventListener('click', () => {
    const text = inputField.value.toLowerCase();
    const decryptedText = decrypt(text);
    resultDiv.innerText = decryptedText;
});
copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(resultText.textContent);
    alert('Texto copiado al portapapeles');
});
