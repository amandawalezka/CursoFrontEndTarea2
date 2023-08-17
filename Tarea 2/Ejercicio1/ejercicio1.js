let numero = parseFloat(prompt("Entre un número del 1 al 10:"));

  if (numero < 10) {
    if (numero % 2 === 0) {
      alert("El número es par y menor que 10.");
    } else {
      alert("El número es impar y menor a 10.");
    }
  } else if (numero === 10) {
    alert("El número es igual a 10.");
  } 
