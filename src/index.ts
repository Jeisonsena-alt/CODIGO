/*let nombre: string = "Warlyn";
let nombreSecundario: string = "Warlyn";
let edad: number = 29.2;
let estaVivo: boolean = true;
let aceptoLosTerminos: boolean;
let vehiculoPrincipal: string = "Honda Pailot";
let vehiculoSecundario: string = "Hyundai Santa Fe";
let vehiculos: string[] = ["Hyundai", "Honda"];
let edades: number[] = [1, 2, 3, 4, 5, 6];
let genero: string = "Femeninos";
let generos: "masculino" | "femenino" | "nose";
let carreras: any = 50;
carreras = "50";
generos = "nose";


function devolverGenero(generos: string): string {

    if (generos == "Masculino" || generos == "Femenino") {
        return generos;
    }
    else {
        return "El genero es invalido: " + generos;
    }
}


function devolverGeneroSinIf(generos: "masculino" | "femenino"): string {
    return generos;
}

function devovlernombre(): string {
    return nombre;
}

console.log(devolverGeneroSinIf("masculino"));

function sumar(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

function divir(numero1: number, numero2: number): number {
    return numero1 / numero2;
}

function multiplicar(numero1: number, numero2: number): number {
    return numero1 * numero2;
}

function restar(numero1: number, numero2: number): number {
    return numero1 - numero2;
}

console.log(sumar(10, 10));
console.log(divir(20, 1));
console.log(multiplicar(10, 2));
console.log(restar(22, 2));


function calculadora(numero1: number, numero2: number, operacion: "*" | "+" | "-" | "/"): number {
    if (operacion == "*") {
        return numero1 * numero2;
    }
    else if (operacion == "-") {
        return numero1 - numero2
    }
    else if (operacion == "/") {
        return numero1 / numero2
    }
    else {
        return numero1 + numero2
    }

}

console.log("sumar:",calculadora(10, 10, "+"));
console.log("dividir:",calculadora(20, 16, "/"));
console.log("restar:",calculadora(10, 24, "-"));
console.log("multiplicar:",calculadora(22, 87, "*"));*/

/*
function contarDe1A10000(): void{
    let numero: number = 0;

    while(true){
        //numero += 1;
        console.log(numero);
        numero = numero + 2;
        if(numero > 10000){
            break;
            }
        
    }    

}       
console.log(contarDe1A10000()) */
/*function contarNumeros(): void {
    let numero: number = 0;

    while (true) {
        if (numero > 200) {

            break;
        }
       if (numero % 2 ==0) {
        console.log("par", numero)
       }else{console.log("impar", numero)}
       numero += 1;
    }

  }
console.log(contarNumeros()) */

/*function contarDe1Al100ForNumber(): void{

    let cantidadDeNumerosPares = 0;    
    let cantidadDeNumerosImpares = 0;
        for(let franco:number = 1170; franco <= 3423; franco = franco + 1){    
            if(franco % 2 === 0){
                cantidadDeNumerosPares = cantidadDeNumerosPares + 1;                
            }
            else{
                cantidadDeNumerosImpares = cantidadDeNumerosImpares + 1;
            }
        }
        
        console.log("Cantidad Total De Numeros Pares:", cantidadDeNumerosPares);
        console.log("Cantidad Total De Numeros Impares:", cantidadDeNumerosImpares);
}*/
/*
import * as readline from "node:readline" 

let contadorjeison: number = 0;
let estudiantes: string[] = ["1","2","3"];
while(contadorjeison > 100){
        console.log(contadorjeison);
}
    do{
        console.log("organizando materias", contadorjeison);
        contadorjeison++;
    }while(contadorjeison < estudiantes.length)  */  
    
/*import * as readline from "node:readline" 
    
    const r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    r1.question("cuantos Años Tienes", (respuesta:string)=>{
        console.log("tengo esta edad:",respuesta);
    });
    function manejarRespuesta(respuesta:string){
        console.log("tengo esta edad:", respuesta);
    } 

    console.log();*/
/*
import * as readline from "node:readline"

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function generarNumerosAleatorios(): number{
    return Math.floor(Math.random() * 100 + 1)
}

let numeroGanador:number = generarNumerosAleatorios();

function adivinar(): void{
    r1.question("adivine el numero del 1 al 100?", (respuesta: string) =>{
        const numero: number = parseInt(respuesta);

        if(numero === numeroGanador){
            console.log("Numero ganador felicidades recoja su premio", numeroGanador);
            r1.close();
        }
        else{
            console.log("Numero incorrecto vuelva a intertarlo:", numero);
            adivinar();
        }
    })
}

adivinar();*/


/*import * as readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nombre: string = "";
let apellido: string = "";
let edad: number = 0;
let sueldo: number = 0;
let cedula: string = "";

function Nombrecompleto(): void {
    rl.question("Ingrese su nombre: ", (respuesta: string) => {
        nombre = respuesta;
        Apellido();
    });
}   function Apellido(): void {
    rl.question("Ingrese sus Apellidos: ", (respuesta: string) => {
        apellido = respuesta;
        Edad();
    });
}  function Edad(): void {
    rl.question("Ingrese su edad (debe ser mayor de 18): ", (respuesta: string) => {
        edad = parseInt(respuesta);

        if (edad > 18) {
            pedirSueldo();
        } else {
            console.log("Edad no válida. Debe ser mayor de 18.");
            Edad();
        }
    });
}  function pedirSueldo(): void {
    rl.question("Ingrese su sueldo (debe ser mayor a 25000): ", (respuesta: string) => {
        sueldo = parseInt(respuesta);

        if (sueldo > 25000) {
            pedirCedula();
        } else {
            console.log("Sueldo no válido. Debe ser mayor a 25000.");
            pedirSueldo(); 
        }
    });
}function pedirCedula(): void {
    rl.question("Ingrese su cédula (11 caracteres exactos): ", (respuesta: string) => {
        cedula = respuesta;

        if (cedula.length === 11) {
            mostrarResultado();
        } else {
            console.log("Cédula no válida. Debe tener exactamente 11 caracteres.");
            pedirCedula(); 
        }
    });
} function mostrarResultado(): void {
    console.log("===== REGISTRO COMPLETO =====");
    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
    console.log("Edad:", edad);
    console.log("Sueldo:", sueldo);
    console.log("Cédula:", cedula);
    rl.close();
}

Nombrecompleto();*/


/*function determinarElDiaDeLaSemanaSwitch(dia: number): string {
    switch (dia) {
        case 1:
            return "Lunes";
        case 2:
            return "Martes";
        case 3:
            return "Miercoles";
        case 4:
            return "Jueves";
        case 5:
            return "Viernes";
        case 6:
            return "Sabado";
        case 7:
            return "Domingo";
        default:
            return "El dia: " + dia.toString() + " no es valido";
    } 
}
console.log(determinarElDiaDeLaSemanaSwitch(10));
r1.close();*/

function determinarTamanoPorAltura(altura: number): string {
    switch (true) {
        case (altura >= 140 && altura <= 150):
            return "Persona pequeña";
        case (altura >= 151 && altura <= 160):
            return "Persona mediana";
        case (altura >= 161 && altura <= 180):
            return "Persona grande";
        default:
            return "Persona fuera de lo normal";
    }
}

console.log(determinarTamanoPorAltura(140));
console.log(determinarTamanoPorAltura(151));
console.log(determinarTamanoPorAltura(1161));
console.log(determinarTamanoPorAltura(95));



/*function calificaciones(nota: number): string {
    switch (true) {
        case (nota >= 90 && nota <= 100):
            return "A";
        case (nota >= 80 && nota < 90):
            return "B";
        case (nota >= 70 && nota < 80):
            return "C";
        case (nota < 70):
            return "F";
        default:
            return "no estudiaste";
    }
}
console.log("suma cumlaude:", calificaciones(98));
console.log("magna cumlaude:", calificaciones(87));
console.log("cumlaude:", calificaciones(75));
console.log("no estudiaste:", calificaciones(60));*/


function isPrime(n: number): boolean {
    const divisors = [];
    for (let i = 1; i <= n; i++) {
        if (i % n) {
            divisors.push(i);
        }
    }

    console.info(divisors);

    return divisors.length === 2;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((n) => {
    console.info(n, isPrime(n));
});