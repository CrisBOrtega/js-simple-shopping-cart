let articulosCarrito = []

const carrito = document.querySelector("#carrito");

const listaCursos = document.querySelector("#lista-cursos");

const contenedorCarrito = document.querySelector("#lista-carrito tbody");


const limpiarCarrito = ()=> {

    //forma lenta
    //contenedorCarrito.innerHTML = "";

    //forma rapida
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }

}

const carritoHTML = () => {

    //limpiar HTML
    limpiarCarrito()

    //recorre los articulos en el carrito
    articulosCarrito.forEach(articulo => {
        const { imagen , titulo , precio , cantidad , id } = articulo;
        const row = document.createElement("tr");
        row.innerHTML = `
                <td>
                    <img src="${imagen}"  width="100">
                </td>
                <td>${titulo}</td>
                <td>${precio}</td>
                <td>${cantidad}</td>
                <td>
                    <a href="#" class="borrar-curso" data-id="${id}">X</a>
                </td>
        `;
        //agregar esta celda al tbody
        contenedorCarrito.appendChild(row);
    })
}

const leerDatosCurso= (curso) => {

    //crear objeto con la info del curso
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad : 1
    }
    //console.log(infoCurso);
    //agregar elementos al arreglo de carrito
    articulosCarrito = [ ...articulosCarrito, infoCurso]
    console.log(articulosCarrito)
    carritoHTML()
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


