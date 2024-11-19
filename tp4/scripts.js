// Función para pedir el nombre del usuario y mostrarlo en la página principal
function askName() {
    let name = prompt("¿Cuál es tu nombre?");
    document.getElementById("user-name").innerText = "Bienvenido, " + name + "!";
    document.getElementById("welcome-message").innerText = "¡Hola " + name + ", bienvenido a la página principal!";
}

// Función para pedir la edad del usuario y mostrar un mensaje en la galería
function askAge() {
    let age = prompt("¿Cuál es tu edad?");
    if (age > 20) {
        document.getElementById("user-age").innerText = "Tienes más de 20 años.";
    } else {
        document.getElementById("user-age").innerText = "Tienes 20 años o menos.";
    }
    document.getElementById("gallery-message").innerText = "¡Hola, bienvenido a la galería!";
}

// Funciones para los cálculos en la tabla
function multiplicar() {
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    alert("El resultado de la multiplicación es: " + (num1 * num2));
}

function elevar() {
    let num = parseFloat(prompt("Ingresa un número:"));
    alert("El resultado de elevar al cuadrado es: " + (num * num));
}

function restar() {
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    alert("El resultado de la resta es: " + (num1 - num2));
}

