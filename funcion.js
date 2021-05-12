let iconos

function cargarIconos() {
    
}

function generarTablero() {
    cargarIconos()
    let game = document.getElementById("game")
    let tarjetas = []
    for (let i = 0; i < 24; i++) {
        tarjetas.push(`
            <div class="area-tarjeta"> 
            <div class="tarjeta">
                <div class="cara trasera">
                    <img src="IES.png">
                </div>

                <div class="cara superior">

                    <div class="icono-superior">

                        <i class="fa fa-gamepad" aria-hidden="true"></i>
                    </div>
                </div>
            </div>     
        </div>
        `)
    }
    game.innerHTML = tarjetas.join(" ")
}