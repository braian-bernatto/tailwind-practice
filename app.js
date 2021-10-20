const boton = document.querySelector('#boton')
const menu = document.querySelector('#menu')
const download = document.querySelector('.download')
const ul = document.querySelector('.items')

boton.addEventListener('click', ()=>{
  menu.classList.toggle('hidden')
})


download.addEventListener('click', cargarDatos)

const lista = ['Javascript', 'DOM', 'CSS', 'React']
const fragment = document.createDocumentFragment()
const templateLi = document.querySelector('#templateLi')

const clickItems = e => console.log(`diste Click en ${e.target.textContent}`)

function cargarDatos(){
  
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }

  lista.forEach(item => {
      const clone = templateLi.content.firstElementChild.cloneNode(true)
      clone.textContent = item
      clone.addEventListener('click', clickItems)
      fragment.appendChild(clone)
  })

  ul.appendChild(fragment)

}


////////////////////////////////////////carrito compras////////////////////////////
const productos = [{nombre: 'frutilla 🍓', icono: '', }, {nombre: 'banana 🍌', 
icono: ''}, {nombre: 'manzana 🍏', icono: ''}]

const fragmentMercado = document.createDocumentFragment()
const templateMercado = document.querySelector('#frutasTemplate')
const mercado = document.querySelector('#mercado')

productos.forEach(({nombre, icono}) => {
  const clone = templateMercado.content.firstElementChild.cloneNode(true)
  clone.querySelector('#producto-nombre').textContent = nombre
  clone.querySelector('#producto-icono').innerHTML = icono
  clone.querySelector('#producto-btn').addEventListener('click', actualizarCarrito)
  fragmentMercado.appendChild(clone)
})

mercado.appendChild(fragmentMercado)


////////////////////////////// carrito template/////////////////////////////
const carritoLista = document.querySelector('#carrito')
const carritoFragment = document.createDocumentFragment('div')
const templateCarrito = document.querySelector('#carrito-template')
const carrito = []

function agregarProducto() {
  let clone
  carrito.forEach(({nombre, cantidad}) => {
    clone = templateCarrito.content.firstElementChild.cloneNode(true)  
    clone.querySelector('#carrito-nombre').textContent = nombre
    clone.querySelector('#carrito-cantidad').textContent = cantidad
    carritoFragment.appendChild(clone)
  })
  carritoLista.appendChild(carritoFragment)
}

function actualizarCarrito(e) {
  let producto = e.target.parentElement.querySelector('#producto-nombre').textContent
  if (!carrito.some(item => item.nombre === producto)) {
    carrito.push({nombre: producto, cantidad: 1})
   }else{
     carrito.forEach(item => {
        if (item.nombre === producto) {
         item.cantidad ++
         return
        }
     })
   }
    
  limpiarHtml()
  agregarProducto()
}

function limpiarHtml() {
  while (carritoLista.firstChild) {
    carritoLista.removeChild(carritoLista.firstChild)
  }
}

////////////////////////////// carrito template/////////////////////////////