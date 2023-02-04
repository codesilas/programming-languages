// typescript funciona en desarrollo
// una vez compilado se vuelve javascript

let entero = 1; // inferencia de tipo
// entero = "dos" => error

let unNumero: number = 1;
let unTexto: string = "una cadena de texto";
let isTypescript: boolean = true;


// any permite operar como en js, no es buena practica
let javascriptStyle: any = "lo que sea";
javascriptStyle = 123;

// arrays
let unaLista: string[] = ["hola", "mundo"];
let otraLista: [string, string] = ["hello", "world"];

// clases

class Auto {
    private numPuertas: number;
    private velocidad: number;
    private marca: string;

    constructor(numPuertas: number, velocidad: number, marca: string) {
        this.numPuertas = numPuertas;
        this.velocidad = velocidad;
        this.marca = marca;
    }

    // es buena practica usar getters y setters
    // encapsulamiento: permitir modificar propiedades solo atravez
    // de metodos

    // get devolverá el valor de una propiedad
    getNumeroPuertas(): number {
        return this.numPuertas;
    }

    // set asignará un valor a una propiedad
    setNumeroPuertas(numPuertas: number) {
        this.numPuertas = this.numPuertas;
    }
}

const ferrari = new Auto(2, 123, "ferrari");
console.log(ferrari);

// diferencia entre class e interface
// class = molde, que siempre es lo mismo
// interface = contrato, que garantiza que las implementaciones
// tendrán lo indicado en la interfaz

interface PersonaInterface {
    nombre: string;
    edad: number;
    dni?: string; // el simnbolo "?" hace que sea opcional
}

interface Alumno extends PersonaInterface {
    curso: string;
}

const PersonaInterface: PersonaInterface = {
    nombre: 'Juan',
    edad: 30,
}

const alumno: Alumno = {
    nombre: 'Juan',
    edad: 30,
    curso: "Angular"
}

