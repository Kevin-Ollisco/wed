

// creamos una fucincio para mostrar calculadora
function mostrarCalculadora(precio) {
    // ocultamos los servicio
    document.getElementById("servicios").classList.add("hidden");
    // mostramos la calculadora
    const calculadora = document.getElementById("calculadora");
    calculadora.style.display = "block";
    document.getElementById("precio").value = precio;
    document.getElementById("horas").focus();
}

function volverServicios() {
    document.getElementById("servicios").classList.remove("hidden");
    document.getElementById("calculadora").style.display = "none";
}

function calcularTotal() {
    let precioPorHora = parseFloat(document.getElementById("precio").value);
    let horas = parseInt(document.getElementById("horas").value) || 0;
    let minutos = parseInt(document.getElementById("minutos").value) || 0;
    let total = (horas + (minutos / 60)) * precioPorHora;
    document.getElementById("total").textContent = total.toFixed(2);
}
