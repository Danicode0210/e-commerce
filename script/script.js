import {data} from './data.js'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

showMovies(data)

function showMovies(hero) {
    main.innerHTML = ''
    hero.forEach((hero) => {
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
            <img src="${hero.image}" alt="">
            <div class="overview ">
               <h3 class="title">${hero.first_appearance}</h3>
               <br>   
               <h3 class="precio"><strong>${hero.precio}</strong></h3>
               <button  type="button"
               data-mdb-toggle="modal"
               data-mdb-target="#exampleModal" class="btn btn-info col-12 mt-1">Ver más</button>
               <button class="btn btn-primary col-12 mt-2 button">Añadir al carrito</button>
            </div>
            <!-- Modal -->
            <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            >
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${hero.first_appearance}</h5>
                    <button
                    type="button"
                    class="btn-close"
                    data-mdb-dismiss="modal"
                    aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body"> <img src="${hero.image}" alt=""></div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">
                    Continuar comprando
                    </button>
                </div>
                </div>
            </div>
            </div>
                    `
        main.appendChild(movieEl)
    });
}

let cart = []
const clickButtonProd = document.querySelectorAll('.button')
const clickButton = document.querySelector('.button-cart');
const tbody = document.querySelector('.tbody');




const carrito = () => {
    const myModal = new mdb.Modal(document.getElementById('myModal'))
    myModal.show()
}

const addToItemCart = ( element ) => {
    const button = element.target
    const item = button.closest('.movie');
    const itemTitle = item.querySelector('.title').textContent;
    const itemPrecio = item.querySelector('.precio').textContent;

    const product = {
        title: itemTitle,
        precio: itemPrecio,
        cantidad: 1
    }

    addItemCart( product );
}

const addItemCart = ( newProduct ) => {
    const inputElement = tbody.getElementsByClassName('input__element')
    for( let i = 0; i < cart.length; i++ ) {
        if(cart[i].title.trim() === newProduct.title.trim())
        {
            cart[i].cantidad++;
            const inputValue = inputElement[i]
            inputValue.value++;
            console.log(cart)
            carritoTotal()
            return null;
        }
    }
    cart.push( newProduct );
    renderCarrito()
}

const renderCarrito = () => {

    tbody.innerHTML = ''
    cart.map( item => {
        const tr = document.createElement('tr');
        tr.classList.add('ItemCarrito');
        const contenido = 
        `
        <th scope="row">1</th>
        <td class="table_productos"><h6 class="title">${item.title}</h6></td>
        <td class="table_precio">${item.precio}</td>
        <td class="table_cantidad">
        <input type="number" min="1" value=${item.cantidad} class="input__element">
        </td>
        <td><button class="btn btn-danger delete">X</button></td>
        `
        tr.innerHTML = contenido;
        tbody.append(tr);

        tr.querySelector('.delete').addEventListener('click', removeItemCart)
        tr.querySelector('.input__element').addEventListener('change', sumaCantidad)
    })
    carritoTotal()
}

const carritoTotal = () => {
    let total = 0;
    const itemCartTotal = document.querySelector('.itemCartTotal')
    cart.forEach( (item) => {
        const precio = Number(item.precio)
        total += precio*item.cantidad;
    })

    itemCartTotal.innerHTML = `Total $${total}` 
}

const removeItemCart = (element) => {
    const buttonDelete = element.target
    const tr = buttonDelete.closest('.ItemCarrito');
    const title = tr.querySelector('.title').textContent;
    for( let i = 0; i < cart.length; i++ ) {
        if(cart[i].title.trim() === title.trim()){
            cart.splice(i, 1);
        }
    }
    tr.remove();
    carritoTotal();
}


const sumaCantidad = (element) => {
    const sumaInput = element.target
    const tr = sumaInput.closest('.ItemCarrito')
    const title = tr.querySelector('.title').textContent;
    cart.forEach( item => {
        if (item.title.trim() === title.trim()) {
            sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value
            item.cantidad = sumaInput.value;
            carritoTotal()
        }
    } )
    console.log(cart)
}

clickButton.addEventListener('click', carrito);
clickButtonProd.forEach(btn => {
    btn.addEventListener('click', addToItemCart)});

