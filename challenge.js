const mensaje = document.getElementById("result-text");
const emptyTextImg = document.getElementById("empty-text-image")
const emptyText1 = document.getElementById ("empty-text-text1")
const emptyText2 = document.getElementById ("empty-text-text2")
const textContainer = document.getElementById("text-container")
const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
function handleContainers(event) {
    const value = event.target.value
    if (value.length) {
        emptyText1.style.display = 'none'
        emptyText2.style.display = 'none'
        emptyTextImg.style.display = 'none'
        textContainer.style.display = 'block'
    } else {
        emptyText1.style.display = 'block'
        emptyText2.style.display = 'block'
        emptyTextImg.style.display = 'block'
        textContainer.style.display = 'none'
    }
}
document.getElementById('input-text').addEventListener('input', handleContainers)

function encriptar(value, operation) {
    value = value.toLowerCase();
    const isEncrypting = operation === "enc"
    const evaluateValue = isEncrypting ? 0 : 1
    const replaceValue = isEncrypting ? 1 : 0

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (value.includes(matrizCodigo[i][evaluateValue])) {
            value = value.replaceAll(matrizCodigo[i][evaluateValue],
                matrizCodigo[i][replaceValue])
        }
    }
    mensaje.innerHTML = value;
}

function copyToClipBoard() {

    var content = document.getElementById('result-text');
    
    content.select();
    document.execCommand('copy');

    alert("Copied!");
}






















