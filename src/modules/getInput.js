import { getData } from "./dataFetch"
import { createCard } from  "./card"
import { importIcon } from "./iconImport"
import { changeBackground } from "./backgroundChange"

function getInput(){
    const target = document.querySelector('.submit')
    const input = document.querySelector('.searchBar')

    target.addEventListener('click',async(e)=>{
        e.preventDefault()
        try{
            let {address,temperature,feels,humidity,conditions,description,icon} = await getData(input.value)
            createCard(address,temperature,feels,humidity,conditions,description)
            importIcon(icon)
            changeBackground(icon)
        }
        catch(error){
            alert('Please Enter a valid Location')
        }
        
    })
}

export {getInput}