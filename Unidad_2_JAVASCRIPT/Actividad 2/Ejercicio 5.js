let numero = parseInt(prompt("Introduce un número:"));
let multi5 = 5;
let multi3 = 3;

if (numero % 2 === 0 && numero % multi5 === 0) {
    document.write("El número " + numero + " es par y es múltiplo de " + multi5 + ".");
} else if (numero % 2 === 0 && numero % multi3 === 0) {
    document.write("El número " + numero + " es par y es múltiplo de " + multi3 + ".");
} else if (numero % 2 === 0) {
    document.write("El número " + numero + " es par pero no es múltiplo de " + multi3 + " ni de " + multi5 + ".");
} else if (numero % multi5 === 0) {
    document.write("El número " + numero + " no es par pero es múltiplo de " + multi5 + ".");
} else if (numero % multi3 === 0) {
    document.write("El número " + numero + " no es par pero es múltiplo de " + multi3 + ".");
} else {
    document.write("El número " + numero + " no es par ni múltiplo de " + multi3 + " ni de " + multi5 + ".");
}
