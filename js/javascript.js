
//volviendo a repazar alv.


//el error esta desde la funcion de ataqueAgua, ataqueFuego, ataqueTierra. En adelante. 
//o posiblemente el error este en la funcion de combate. ya que funcionaria bien la funcion de ataque aleatorioenemigo


function seleccionarMascotaJugador(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque').style.display = 'block'

    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota').style.display = 'none'

    let inputHypodoge = document.getElementById('hypodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById ('mascota-jugador')

    if (inputHypodoge.checked){
        spanMascotaJugador.innerHTML = 'Hypodoge'
    }else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }else {
        alert ("Tienes que selecionar")

    }
    seleccionarMascotaEnemigo()
    
}

window.addEventListener('load',iniciarJuego)


function iniciarJuego (){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque').style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar').style.display = 'none'



     let botonMascotaJugador = document.getElementById('boton-mascota')
      botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)


      let botonFuego = document.getElementById('boton-fuego')
      botonFuego.addEventListener('click', ataqueFuego)
      let botonAgua = document.getElementById('boton-agua')
      botonAgua.addEventListener('click' , ataqueAgua)
      let botonTierra = document.getElementById('boton-tierra')
      botonTierra.addEventListener('click', ataqueTierra)


      let botonReiniciar = document.getElementById('boton-reiniciar')
      botonReiniciar.addEventListener('click', reiniciarJuego)
}

function reiniciarJuego(){
    location.reload()
}

function ataqueFuego (){
    ataqueJugador='Fuego'
    ataqueAleatorioEnemigo ()
}

function ataqueAgua (){
    ataqueJugador='Agua'
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador='Tierra'
    ataqueAleatorioEnemigo()
}


function ataqueAleatorioEnemigo (){
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'Fuego'

    }else if (ataqueAleatorio == 2){
        ataqueEnemigo = 'Agua'

    }else if (ataqueAleatorio == 3){
        ataqueEnemigo = 'Tierra'
    }
    combate()
}

let ataqueEnemigo


function crearMensaje (resultado){
    let sectionMensajes = document.getElementById('mensajes')


    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', la mascota del enemigo ataco con ' + ataqueEnemigo + ' - ' + resultado

    sectionMensajes.appendChild(parrafo)
}


function combate (){
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    let spanVidasJugador = document.getElementById('vidas-jugador')


    if(ataqueEnemigo==ataqueJugador){
        crearMensaje('Empate')
       } else if (ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra'){
        crearMensaje("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
       } else if (ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego'){
        crearMensaje("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
       } else if (ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua'){
        crearMensaje("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML= vidasEnemigo
       }else {
        crearMensaje ("Perdiste")
        vidasJugador --
        spanVidasJugador.innerHTML = vidasJugador
       }
       revisarVidas()
}

function revisarVidas (){
    if (vidasEnemigo==0){
        crearMensajeFinal("Felicitaciones, ganaste 🎈")
    }else if (vidasJugador==0){
        crearMensajeFinal("Perdiste. 🎃")

    }
}

function crearMensajeFinal (resultadoFinal){
    let sectionMensajes = document.getElementById('mensajes')


    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)


    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar').style.display = 'block'
}




let vidasJugador = 3
let vidasEnemigo = 3




function aleatorio (min, max){
    return Math.floor(Math.random()*(max-min +1)+ min)
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio (1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatoria==1){
        spanMascotaEnemigo.innerHTML='Hipodoge'
    }else if (mascotaAleatoria==2){
        spanMascotaEnemigo.innerHTML='Capipepo'
    }else if (mascotaAleatoria==3){
        spanMascotaEnemigo.innerHTML='Ratigueya'
    }
}



let ataqueJugador

