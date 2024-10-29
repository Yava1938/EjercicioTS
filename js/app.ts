const calcularEdad = (fechaNacimiento:string): number =>{
    const nacimiento:Date = new Date (fechaNacimiento);
    const actual:Date = new Date();
 
    let diffTime: number = actual.getFullYear() - nacimiento.getFullYear();
     if (
        actual.getMonth() < nacimiento.getMonth() ||
        (actual.getMonth() === nacimiento.getMonth() && actual.getDate() < nacimiento.getDate())
    ) {
        diffTime--;
    }
    return diffTime
}
 
const fechaN:string = '1999-03-09'
const edad:number = calcularEdad(fechaN)
console.log(`Mi edad es: ${edad}`); 