   // Inicializar un array para almacenar números enteros
   const numEnteros = [];

   // Lee y almacena 10 núm. enteros en el array
   for (let i = 1; i <= 10; i++) {
     const num = parseInt(prompt(`Ingrese número entero ${i}:`));
     numEnteros.push(num);
   }

   // Función para ordenar el array en orden ascendente
   function sortAscending(arr) { 
     return arr.slice().sort((a, b) => a - b);
   }

   // Función para ordenar el array en orden descendente
   function sortDescending(arr) {
     return arr.slice().sort((a, b) => b - a);
   }

   // Muestra el contenido del array en orden ascendente y descendente.
   const sortedAscending = sortAscending(numEnteros);
   const sortedDescending = sortDescending(numEnteros);

   console.log("Array en orden ascendente:", sortedAscending);
   console.log("Array en orden descendente:", sortedDescending);