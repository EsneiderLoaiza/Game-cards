let iconos = []
let selecciones = []

generarTablero()

function cargarIconos() {
    
    iconos = [
        '<i class="fa fa-bug" aria-hidden="true"></i>',
        '<i class="fa fa-gamepad" aria-hidden="true"></i>',
        '<i class="fa fa-rss" aria-hidden="true"></i>',
        '<i class="fa fa-laptop" aria-hidden="true"></i>',
        '<i class="fa fa-cloud" aria-hidden="true"></i>',
        '<i class="fa fa-microchip" aria-hidden="true"></i>',
        '<i class="fa fa-bug" aria-hidden="true"></i>',
        '<i class="fa fa-gamepad" aria-hidden="true"></i>',
        '<i class="fa fa-rss" aria-hidden="true"></i>',
        '<i class="fa fa-laptop" aria-hidden="true"></i>',
        '<i class="fa fa-cloud" aria-hidden="true"></i>',
        '<i class="fa fa-microchip" aria-hidden="true"></i>',
    ]
}

function generarTablero() {
    cargarIconos()
    selecciones = []
    let game = document.getElementById("game")
    let tarjetas = []
    for (let i = 0; i < 12; i++) {
        tarjetas.push(`
            <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})"> 
            <div class="tarjeta" id="tarjeta${i}">
                <div class="cara trasera" >
                    <img src="IES.png">
                </div>

                <div class="cara superior" id="superior${i}">

                    <div class="icono-superior">

                        ${iconos[0]}
                    </div>
                </div>
            </div>     
        </div>
        `)
        if(i % 2 == 1){ /*Si "i" no es multiplo de 2*/ 
            iconos.splice(0,1)/*Se elimina el primer elemento de iconos 0=primer elemento, 1=elementos a eliminar apartir de esa posición*/
        }
    }
    tarjetas.sort(()=>Math.random() - 0.5) /*Tarjeta aleatorias*/ 
    game.innerHTML = tarjetas.join(" ")
}

    

function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
}

function deseleccionar(selecciones) {
    setTimeout(() => {
        
        let superior1 = document.getElementById("superior" + selecciones[0])
        let superior2 = document.getElementById("superior" + selecciones[1])
        if (superior1.innerHTML != superior2.innerHTML) {

            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
        }else{
            
            superior1.style.background = "blue"
            superior2.style.background = "blue"
        }
    }, 1000);
}