const productos = [{nombre: 'frutilla 🍓', icono: '', }, {nombre: 'banana 🍌', 
icono: ''}, {nombre: 'manzana 🍏', icono: ''}]
const fragmentMercado = document.createDocumentFragment()
const frutasTemplate = document.querySelector('#frutas-template')
const mercado = document.querySelector('#mercado')

productos.forEach(({nombre}) => {
  const clone = frutasTemplate.content.firstElementChild.cloneNode(true)
  clone.querySelector('#producto-nombre').textContent = nombre
  clone.querySelector('#producto-btn').dataset.fruta = nombre
  fragmentMercado.appendChild(clone)
})

mercado.appendChild(fragmentMercado)

/////////////////////// carrito /////////////////////////////////////////////
const fragmentCarrito = new DocumentFragment()
const carritoTemplate = document.querySelector('#carrito-template')
const carrito = document.querySelector('#carrito')
const btnAgregar = document.querySelectorAll('#producto-btn')

const canasta = {}

function agregarCarrito(e) {
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1
  }

  if (producto.titulo in canasta) {
    producto.cantidad = canasta[producto.titulo].cantidad + 1
  }
  
  canasta[producto.titulo] = producto

  actualizarCarritoHtml()
}

const actualizarCarritoHtml = () => {
  carrito.textContent = ''
  Object.values(canasta).forEach(item => {
    const clone = carritoTemplate.content.firstElementChild.cloneNode(true)
    clone.querySelector('#carrito-nombre').textContent = item.titulo
    clone.querySelector('#carrito-cantidad').textContent = item.cantidad

    fragmentCarrito.appendChild(clone)    
  })
  carrito.appendChild(fragmentCarrito)  
}

btnAgregar.forEach(btn => btn.addEventListener('click', agregarCarrito))


