const ventamep = 674.18; //Valor de venta dolar mep
const compramep = 673.50; //Valor de compra dolar mep

alert("Bienvenido a tu simulador de dolar MEP favorito")

while (true){
const dolar = prompt("Escribí 'venta' o 'compra' acorde a su consulta sobre dolar MEP. Para salir del menu escribí 'ESC'") .toUpperCase ()

if (dolar === "COMPRA"){
alert("El precio de compra es de $" + compramep)
}
else if(dolar === "VENTA") { 
alert("El precio de venta es de $" + ventamep)
}
else if(dolar === "ESC"){
    alert("Saliendo..")
    break;
}
else{
    alert("Respuesta no válida. Por favor escriba 'venta' o 'compra' para recibir la cotización actual o 'ESC' para salir del menu")
}}