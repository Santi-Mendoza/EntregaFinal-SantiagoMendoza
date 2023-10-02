const formAlumnos = document.querySelector('#formAlumno')
const inputAlumno = document.querySelector('#inputAlumno')
const inputNota = document.querySelector('#inputNota')
const divListaAlumnos = document.querySelector('#listaAlumnos')
const seccionAlumnos = document.querySelector('#seccionAlumnos')

const alumnos = JSON.parse(localStorage.getItem('alumnos')) || []
mostrarAlumnos()

class Alumno {
constructor({ nombre, nota }) {
    this.nombre = nombre
    this.nota = nota
}
}

formAlumnos.onsubmit = e => {
e.preventDefault()

const nombre = inputAlumno.value
const nota = inputNota.value

const alumno = new Alumno({ nombre, nota })

guardarAlumno(alumno)
}

function guardarAlumno(alumno) {
alumnos.push(alumno)
localStorage.setItem('alumnos', JSON.stringify(alumnos))
mostrarAlumnos()
}

function mostrarAlumnos() {
if (alumnos.length > 0) {
    seccionAlumnos.style.display = 'block'
    let listaAlumnosHtml = '<ul>'
    for (const alumno of alumnos) {
    listaAlumnosHtml += `<li>${alumno.nombre}</li>`
    }
    divListaAlumnos.innerHTML = listaAlumnosHtml + '</ul>'
}
}
