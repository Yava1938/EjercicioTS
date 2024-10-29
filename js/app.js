var calcularEdad = function (fechaNacimiento) {
    var nacimiento = new Date(fechaNacimiento);
    var actual = new Date();
    var diffTime = actual.getFullYear() - nacimiento.getFullYear();
    if (actual.getMonth() < nacimiento.getMonth() ||
        (actual.getMonth() === nacimiento.getMonth() && actual.getDate() < nacimiento.getDate())) {
        diffTime--;
    }
    console.log("diffTime: ", diffTime);
    return diffTime;
};
var fechaN = '1999-03-09';
var edad = calcularEdad(fechaN);
console.log("Mi edad es: ".concat(edad));
