// 
// Dado este array:
// let arrayNumeros1 = [ 4, 5, 3, 8, 2, 7, 1, 6]
// let arrayNumeros2 = [ 4, 2, 7, 1, 6]
// o cualquier otro array solo con números

// 1) Mostrar por consola la suma de todos los valores
// 2) Mostrar por consola el promedio
// 3) Encontrar los valores máximo y mínimo
// 4) Sumar los valores con índice par y restar los impares
// Hay que mostrar por consola cada resultado

let arrayNumeros1 = [ 4, 5, 3, 8, 2, 7, 1, 6]
let arrayNumeros2 = [ 4, 2, 7, 1, 6]

//...1
let sumaArrayNumeros1 = 0;
let sumaArrayNumeros2 = 0;

for (let i = 0; i < arrayNumeros1.length; i ++) {    
    sumaArrayNumeros1 += arrayNumeros1[i]
}
console.log(sumaArrayNumeros1);

for (let i = 0; i < arrayNumeros2.length; i ++) {    
    sumaArrayNumeros2 += arrayNumeros2[i]
}
console.log(sumaArrayNumeros2);

//...2
let promArrayNumeros1 = 0
let promArrayNumeros2 = 0

console.log(promArrayNumeros1 = sumaArrayNumeros1 / arrayNumeros1.length);
console.log(promArrayNumeros2 = sumaArrayNumeros2 / arrayNumeros2.length);

//...3
let valorMaxArrayNumeros1 = Math.max(arrayNumeros1)
console.log(valorMaxArrayNumeros1);

let valorMaxArrayNumeros2 = Math.max(arrayNumeros2)
console.log(valorMaxArrayNumeros2);
