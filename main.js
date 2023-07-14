

let comprar = confirm("¿Deseas terminar tu compra?")

function solicitarNombre (){
	let nombreIngresado = prompt ("Ingresa tu nombre")
}
solicitarNombre()

function solicitarTelefono (){
	let telefonoIngresado = parseInt (prompt("Ingresa tu número de contacto"))
}
solicitarTelefono()

function solicitarCorreo (){
	let correoIngresado = prompt ("Ingresa tu correo electrónico")
}
solicitarCorreo()

    alert("Tu monto a pagar es de $500")
let montoAPagar = 500
let pagoCliente = parseInt(prompt("Ingresa la cantidad a pagar"))
if(pagoCliente >= montoAPagar){
    alert("Gracias por tu compra")
}else if(pagoCliente < 200){
    console.error("No es posible realizar tu compra")
}else if(pagoCliente > 200 && pagoCliente < 500){
    console.error("Tu compra no puede ser realizada")
}else{
    console.error("Error, por favor ingresa un número")
}

let terminar = "si";
do{
	terminar = prompt ("Contesta con un SI para terminar");
	console.log(terminar);
}while(terminar === "si");
