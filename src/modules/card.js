import humidIcon from '../resources/humidity.png'
import locationIcon from '../resources/placeholder.png'
import tempIcon from '../resources/thermometer.png'

function createCard(location,temperature,feels,humidity,condition,description){
    
    const container = document.querySelector('.content')
    container.innerHTML = ''

    const card = document.createElement('div')
    card.classList.add('card')

    const icon = document.createElement('img')
    icon.classList.add('weatherIcon')
    card.appendChild(icon)
    
    const temp = document.createElement('p')
    temp.classList.add('temp')
    temp.innerText = `${temperature}\u00B0`
    card.appendChild(temp)

    //div for feel
    const feel = document.createElement('div')
    feel.classList.add('feel')

    const fIcon = document.createElement('img')
    fIcon.src = tempIcon
    feel.appendChild(fIcon)

    const fText1 = document.createElement('p')
    fText1.innerText = 'Feels like:'
    feel.appendChild(fText1)

    const fText2 = document.createElement('p')
    fText2.setAttribute('id','input')
    fText2.innerText = `${feels}\u00B0`
    feel.appendChild(fText2)

    card.appendChild(feel)

    //div for Humidity
    const humid = document.createElement('div')
    humid.classList.add('humidy')

    const hIcon = document.createElement('img')
    hIcon.src = humidIcon
    humid.appendChild(hIcon)

    const hText1 = document.createElement('p')
    hText1.innerText = 'Humidity:'
    humid.appendChild(hText1)

    const hText2 = document.createElement('p')
    hText2.setAttribute('id','input')
    hText2.innerText = `${humidity}%`
    humid.appendChild(hText2)
    card.appendChild(humid)

    //div for location
    const area = document.createElement('div')
    area.classList.add('location')

    const aIcon = document.createElement('img')
    aIcon.src = locationIcon
    area.appendChild(aIcon)

    const aText = document.createElement('div')
    aText.innerText = location
    area.appendChild(aText)
    card.appendChild(area)


    const cond = document.createElement('p')
    cond.classList.add('condition')
    cond.innerText = condition
    card.appendChild(cond)

    const desc = document.createElement('p')
    desc.classList.add('description')
    desc.innerText = description
    card.appendChild(desc)
 

    container.appendChild(card)
}

export {createCard}