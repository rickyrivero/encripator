const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = 'none';
    inputTexto.value = ""
}

function encriptar(encriptarTexto){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    encriptarTexto = encriptarTexto.toLowerCase();

    for(let i = 0; i < matriz.length; i++){
        if(encriptarTexto.includes(matriz[i][0])){
            encriptarTexto = encriptarTexto.replaceAll
            (matriz[i][0],matriz[i][1]);
        }
    }
    return encriptarTexto;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    inputTexto.value = ""
}

function desencriptar(desencriptarTexto){
    let matriz = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    desencriptarTexto = desencriptarTexto.toLowerCase();

    for(let i = 0; i < matriz.length; i++){
        if(desencriptarTexto.includes(matriz[i][1])){
            desencriptarTexto = desencriptarTexto.replaceAll
            (matriz[i][1],matriz[i][0]);
        }
    }
    return desencriptarTexto;
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
}