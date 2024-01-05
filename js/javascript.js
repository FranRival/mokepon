





function seleccionarMascotaJugador(){

    let inputHypodoge = document.getElementById('hypodoge')
    let inputcapipepo = document.getElementById('capipepo')
    let inputratigueya = document.getElementById('ratigueya')

    if (inputHypodoge.checked){
        alert("Seleccionaste a Hypodoge")
    }else if (inputcapipepo.checked){
        alert("Seleccionaste a Capipepo")
    } else if (inputratigueya.checked){
        alert("Seleccionaste Ratigueya")
    }else {
        alert ("Tienes que selecionar")

    }
    
}

window.addEventListener('load',iniciarJuego)


function iniciarJuego (){
     let botonMascotaJugador = document.getElementById('boton-mascota')
      botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

}

/*saber cual de los circulos fue seleccionado*/ 