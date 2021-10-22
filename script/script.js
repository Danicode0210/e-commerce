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
               ${hero.first_appearance}
               <button  type="button"
               data-mdb-toggle="modal"
               data-mdb-target="#exampleModal" class="btn btn-info col-12 mt-1">Ver más</button>
               <button class="btn btn-primary col-12 mt-2">Añadir al carrito</button>
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


