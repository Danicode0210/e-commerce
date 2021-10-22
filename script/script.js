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
            <div class="movie-info">
                <h3>${hero.name}</h3>
                <span class="green">0.9</span>
            </div>
            <div class="overview">
            <a>Ver más</a> 
               ${hero.first_appearance}
            
               <button class="btn btn-primary">Añadir al carrito</button>
            </div>
        `
        main.appendChild(movieEl)
    });
}