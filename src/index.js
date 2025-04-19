import './modules/style.css'
import { getInput } from './modules/getInput'
import { createGIF } from './modules/gifLoader'

function pageLayout(){

    const container = document.querySelector('.heading')

    const title = document.createElement('h1')
    title.innerText = 'The Weather App'

    container.appendChild(title)

    const div = document.createElement('form')
    div.classList.add('searchDiv')
    const search = document.createElement('input')
    search.classList.add('searchBar')
    search.required = true

    const btn = document.createElement('button')
    btn.innerText = 'Search'
    btn.classList.add('submit')

    div.appendChild(search)
    div.appendChild(btn)

    container.appendChild(div)
}

pageLayout()
getInput()