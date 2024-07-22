const carrito = document.querySelector("#carrito");

const listaCursos = document.querySelector("#lista-cursos");

const contenedorCarrito = document.querySelector("#lista-carrito tbody");

const limpiarCarrito = document.querySelector("#vaciar-carrito");


const agregarCurso = (e) => {
    e.preventDefault()
    if(e.target.classList.contains("agregar-carrito")){
        //console.log('agregando al carrito');
        console.log(e.target)
    }
}

const cargarEventListeners = ()=>{
    listaCursos.addEventListener("click", agregarCurso)
}

cargarEventListeners()