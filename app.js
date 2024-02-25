let numeroSecreto = 0;
let Intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p', `Acertaste el número en ${Intentos} ${(Intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById("reiniciar").removeAttribute( "disabled" );
  } else {
      if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El  número secreto es menor');
    } else {
        asignarTextoElemento('p', 'El  número secreto es mayor');
    }
    Intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector(' #valorUsuario').value = '';
}

function condicionesIniciales() {
  asignarTextoElemento('h1', 'NESD, Juego del número secreto!');
  asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  Intentos = 1;
}

function reiniciarJuego() {
  //limpiar caja
  limpiarCaja();
  //indicar mensaje de intervalo de numeros
  //gererar numero aleatorio
  //Inicializar el numero de intentos
  condicionesIniciales();
    //Deshabilitar el boton de juego nuevo
  document.querySelector('#reiniciarJuego').setAttribute("disabled", true);
}

condicionesIniciales();

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(listaNumerosSorteados);
  console.log(numeroGenerado);
  //Si ya sorteamos todos los numeros
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p', 'Ya se asignaron todos los numeros posibles');
  }

  //Si el # generado esta incluido dentro de la lista
  if (listaNumerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
  } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }


asignarTextoElemento('h1', 'NESD, Juego del número secreto!');
asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);

