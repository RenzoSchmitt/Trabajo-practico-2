//Designamos clases
class Alumno{
    nombre 
    constructor(nombre){
        this.nombre = nombre;
    }
}
class curso{
    Lengua = [""]
    Historia = [""]
    Ingles = [""]
    nombre
    alumnos
    constructor(nombre){
        this.nombre = nombre;
        this.alumnos = [];
    }
    designarAlumno(alumno){
        this.alumnos.push(alumno);
    }
}
//Designar alumnos y curso
const al1 = new Alumno('Tomas');
const al2 = new Alumno('Franco');
const cur1 = new curso('Lengua');
const cur2 = new curso('Historia');
const cur3 = new curso('Ingles');
cur2.designarAlumno (al1);
cur1.designarAlumno(al2);