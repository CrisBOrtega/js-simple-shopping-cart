let articulosCarrito = []

const carrito = document.querySelector("#carrito");

const listaCursos = document.querySelector("#lista-cursos");

const contenedorCarrito = document.querySelector("#lista-carrito tbody");

const vaciarCarrito = document.querySelector("#vaciar-carrito");


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

    //verificar si ya existe el curso
    const existe =  articulosCarrito.some(curso => curso.id === infoCurso.id)
    if(existe){
        //actualizamos la cantidad
        const cursos = articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad = curso.cantidad + 1;
                return curso
            }
            return curso
        })
        articulosCarrito = [ ...cursos ]
    }else{
        //agregar elementos al arreglo de carrito
        articulosCarrito = [ ...articulosCarrito, infoCurso]
    }


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

const eliminarArticulo = (e) => {
    //console.log("desde eliminar curso")
    //console.log(e.target.classList)
    if(e.target.classList.contains("borrar-curso")){
        //console.log(e.target.getAttribute("data-id"));
        const cursoId = e.target.getAttribute('data-id');
        //eliminar el curso del carrito utilizando filter
        articulosCarrito = articulosCarrito.filter(articulo => articulo.id !== cursoId);
        console.log(articulosCarrito)
        carritoHTML()

    }
}

const cargarEventListeners = ()=>{
    listaCursos.addEventListener("click", agregarCurso)
    //eliminar un curso del carrito
    carrito.addEventListener("click", eliminarArticulo)
    //vaciar el carrito de compras
    vaciarCarrito.addEventListener("click" , (e)=> {
        e.preventDefault()
        //console.log("vaciar Carrito")
        articulosCarrito = []
        limpiarCarrito()
    })
}

cargarEventListeners()


