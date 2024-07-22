const carrito = document.querySelector("#carrito");

const listaCursos = document.querySelector("#lista-cursos");

const contenedorCarrito = document.querySelector("#lista-carrito tbody");

const limpiarCarrito = document.querySelector("#vaciar-carrito");

const leerDatosCurso= (curso) => {

    //crear objeto con la info del curso
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad : 1
    }
    console.log(infoCurso);
}

const agregarCurso = (e) => {
    e.preventDefault()
    if(e.target.classList.contains("agregar-carrito")){
        const cursoSeleccionado = e.target.parentElement.parentElement
        leerDatosCurso(cursoSeleccionado)
    }
}

//leer el contenido del HTML  al que dimos clic
//y extraer la informacion del curso



const cargarEventListeners = ()=>{
    listaCursos.addEventListener("click", agregarCurso)
}

cargarEventListeners()


