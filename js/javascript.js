





function seleccionarMascotaJugador(){

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
     let botonMascotaJugador = document.getElementById('boton-mascota')
      botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)


      let botonFuego = document.getElementById('boton-fuego')
      botonFuego.addEventListener('click', ataqueFuego)
      let botonAgua = document.getElementById('boton-agua')
      botonAgua.addEventListener('click' , ataqueAgua)
      let botonTierra = document.getElementById('boton-tierra')
      botonTierra.addEventListener('click', ataqueTierra)
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

    crearMensaje()
}

let ataqueEnemigo


function crearMensaje (){
    let sectionMensajes = document.getElementById('mensajes')


    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', la mascota del enemigo ataco con' + ataqueEnemigo + '- PENDIENTE 🎇'

    sectionMensajes.appendChild(parrafo)
}



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

//variables globales

let ataqueJugador
