 // Prompt the user to enter the number of letters
 const N = parseInt(prompt("Entre el número de letras deseadas para formar una palabra:"));

 if (isNaN(N) || N <= 0) {
   alert("Entrada inválida. Por favor ingrese un número positivo válido.");
 } else {
   let cuentaDeVocales = 0;
   let CuentaDeConsonantes = 0;
   let i = 1;

   // Read and analyze each letter
   while (i <= N) {
     const letra = prompt(`Ingrese la letra ${i}:`).toLowerCase();

     if (letra.length === 1 && letra.match(/[a-z]/)) {
       if (
         letra === "a" || letra === "e" || letra === "i" ||
         letra === "o" || letra === "u"
       ) {
        cuentaDeVocales++;
       } else {
        CuentaDeConsonantes++;
       }
       i++;
     } else {
       alert("Entrada inválida. Por favor ingrese una sola letra.");
     }
   }

   // Display the results
   alert(`Número de vocales: ${cuentaDeVocales}\nNúmero de consonantes: ${CuentaDeConsonantes}`);
 }