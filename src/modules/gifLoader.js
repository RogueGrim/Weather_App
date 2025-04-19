async function getGif(value){
   let gif = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=IFL6SLWI6ka2mtyR1V6Wvx0sF2g3Gcbv&s=${value}`, {mode: 'cors'})
   const response = await gif.json()
   return response.data.images.original.url
}

async function createGIF(input){
   const container = document.querySelector('.content')
   const img = document.createElement('img')
   container.appendChild(img)

   const path = await getGif(input)
   img.src = path
}

export {createGIF}