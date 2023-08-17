 // Inicializa variables para los tipos de triángulos
 const RECTANGULAR = "rectángulo";
 const ACUTANGULO = "acutángulo";
 const OBTUSANGULO = "obtusángulo";

 // Inicializa un array para almacenar los ángulos
 const angles = [];

 // Lee las medidas de los ángulos de 10 triángulos
 for (let i = 1; i <= 10; i++) {
   const angle1 = parseFloat(prompt(`Ingrese el angúlo 1 del triángulo ${i}:`));
   const angle2 = parseFloat(prompt(`Ingrese el angúlo 2 del triángulo ${i}:`));
   const angle3 = parseFloat(prompt(`Ingrese el angúlo 3 del triángulo ${i}:`));

   // Almacena los ángulos en un array
   angles.push([angle1, angle2, angle3]);
 }

 // Function determinar el tipo de triángulo
 function determineTipoTriangulo(angles) { 
   angles.sort((a, b) => a - b); // Ordena los ángulos en orden ascendente

   const [a, b, c] = angles;

   if (a + b > c) {
     if (a * a + b * b === c * c) {
       return RECTANGULAR;
     } else if (a * a + b * b < c * c) {
       return OBTUSANGULO;
     } else {
       return ACUTANGULO;
     }
   } else {
     return "no es un triángulo válido";
   }
 }

 // Analiza y muestra los tipos de triángulos
 for (let i = 0; i < angles.length; i++) {
   const triangleType = determineTipoTriangulo(angles[i]);
   console.log(`Triángulo ${i + 1} es ${triangleType}.`);
 }