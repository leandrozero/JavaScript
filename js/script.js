
const ventamep = 674.83; // Valor de venta dolar mep
const compramep = 675.54; // Valor de compra dolar mep
const ventablue = 717; // Valor de venta dolar blue
const comprablue = 712; // Valor de compra dolar blue*/

alert("Bienvenido a tu simulador de dolar favorito");

while (true) {
  let dolar = prompt("Escribí 'blue' o 'MEP' para información sobre su cotización diaria. Para salir del menú, escribí 'ESC'").toUpperCase();

  if (dolar === "BLUE") {
    let tipoOperacion = prompt("Escribí 'Compra' o 'Venta' para información sobre su cotización diaria.").toUpperCase();

    if (tipoOperacion === "VENTA") {
      alert("El precio de venta del dólar blue es de $" + ventablue)
    } else if (tipoOperacion === "COMPRA") {
      alert("El precio de compra del dólar blue es de $" + comprablue)
    } else {
      alert("Respuesta no válida. Por favor, escribe 'Compra' o 'Venta'.")
    }
  } 
  else if (dolar === "MEP") {
    let tipoOperacionMEP = prompt("Escribí 'Compra' o 'Venta' para información sobre su cotización diaria.").toUpperCase();

    if (tipoOperacionMEP === "VENTA") {
      alert("El precio de venta del dólar MEP es de $" + ventamep)
    } else if (tipoOperacionMEP === "COMPRA") {
      alert("El precio de compra del dólar MEP es de $" + compramep)
    } 
    } else {
        alert("Saliendo...")
        break
  }
}
