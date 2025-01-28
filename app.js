let amigos = [];
let regex =  /[^\p{L} ]/gu; //Regex que permite utilizar letras con acentos, diéresis, etc como nombres válidos.
let nombre_sorteado = '';

// Limpiar el registro en el elemento de texto donde se ingresan los nombres
function limpiarRegistro(){ document.getElementById('amigo').value = '';}

// Asignar amigo a la lista de amigos y verificar si el nombre ingresado es válido
function asignar_amigo(){
    let nombre_amigo = document.getElementById('amigo').value;

    if (!regex.test(nombre_amigo) && nombre_amigo != ''){
        amigos.push(nombre_amigo);
        limpiarRegistro();
        actualizar_amigos();
    } 
    else {alert('Por favor, inserte un nombre válido');}

}

// Añadir los amigos a una lista de html. Limpiar antes de añadir un nuevo elemento
function actualizar_amigos(){
    document.getElementById('listaAmigos').innerHTML = '';
    for (let amigo of amigos) {
        document.getElementById('listaAmigos').innerHTML += `<li>${amigo}</li>`;
    }
}

// Función para seleccionar aleatoriamente a un amigo (sorteo)
function sorteo(){

    if ( amigos != '' ) {
        let amigo_secreto = Math.floor(Math.random() * amigos.length);
        nombre_sorteado = amigos[amigo_secreto];
        amigos = [];
        actualizar_amigos();
        document.getElementById('resultado').innerHTML = `<li>¡El amigo secreto es ${nombre_sorteado}!</li>`;
    }
}