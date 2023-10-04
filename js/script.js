const ventamep = 701.01; // Valor de venta dolar mep
const compramep = 700.32; // Valor de compra dolar mep
const ventablue = 800; // Valor de venta dolar blue
const comprablue = 795; // Valor de compra dolar blue

alert("Bienvenido a tu simulador de dolar favorito");

let salir = false;

while (!salir) {
  let dolar = prompt("Escribe 'BLUE' o 'MEP' para información sobre su cotización diaria. Para salir del menú, escribe 'ESC'").toUpperCase();

  if (dolar === "BLUE") {
    let tipoOperacion = prompt("Escribe 'Compra' o 'Venta' para información sobre su cotización diaria.").toUpperCase();

    if (tipoOperacion === "VENTA") {
      let cantidadDolares = parseFloat(prompt("¿Cuántos dólares quieres vender?"));
      if (!isNaN(cantidadDolares)) {
        const total = cantidadDolares * ventablue;
        alert(`El total que recibirías por vender ${cantidadDolares} dólares al precio de venta del dólar blue es de $${total}`);
      } else {
        alert("Cantidad no válida. Por favor, ingresa un número válido.");
      }
    } else if (tipoOperacion === "COMPRA") {
      let cantidadDolares = parseFloat(prompt("¿Cuántos dólares quieres comprar?"));
      if (!isNaN(cantidadDolares)) {
        const total = cantidadDolares * comprablue;
        alert(`El total que pagarías por comprar ${cantidadDolares} dólares al precio de compra del dólar blue es de $${total}`);
      } else {
        alert("Cantidad no válida. Por favor, ingresa un número válido.");
      }
    } else {
      alert("Respuesta no válida. Por favor, escribe 'Compra' o 'Venta'.");
    }
  } 
  else if (dolar === "MEP") {
    let tipoOperacionMEP = prompt("Escribe 'Compra' o 'Venta' para información sobre su cotización diaria.").toUpperCase();

    if (tipoOperacionMEP === "VENTA") {
      let cantidadDolares = parseFloat(prompt("¿Cuántos dólares quieres vender?"));
      if (!isNaN(cantidadDolares)) {
        const total = cantidadDolares * ventamep;
        alert(`El total que recibirías por vender ${cantidadDolares} dólares al precio de venta del dólar MEP es de $${total}`);
      } else {
        alert("Cantidad no válida. Por favor, ingresa un número válido.");
      }
    } else if (tipoOperacionMEP === "COMPRA") {
      let cantidadDolares = parseFloat(prompt("¿Cuántos dólares quieres comprar?"));
      if (!isNaN(cantidadDolares)) {
        const total = cantidadDolares * compramep;
        alert(`El total que pagarías por comprar ${cantidadDolares} dólares al precio de compra del dólar MEP es de $${total}`);
      } else {
        alert("Cantidad no válida. Por favor, ingresa un número válido.");
      }
    } else {
      alert("Respuesta no válida. Por favor, escribe 'Compra' o 'Venta'.");
    }
  } else if (dolar === "ESC") {
    alert("Saliendo del simulador de cotizaciones de dólar...");
    salir = true;
  } else {
    alert("Respuesta no válida. Por favor, escribe 'blue', 'MEP' o 'ESC'.");
  }
}



