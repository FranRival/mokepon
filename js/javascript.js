





function seleccionarMascotaJugador(){

    if (document.getElementById('hypodoge').checked){
        alert("Seleccionaste a Hypodoge")
    }
}

window.addEventListener('load',iniciarJuego)


function iniciarJuego (){
     let botonMascotaJugador = document.getElementById('boton-mascota')
      botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

}

/*saber cual de los circulos fue seleccionado*/ 