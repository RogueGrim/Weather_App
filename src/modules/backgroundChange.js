import video from '../resources/background/main.mp4'
import { createClient } from 'pexels'

function backgroundLoader(){
   const container = document.createElement('video')
   container.classList.add('video')
   container.autoplay = true
   container.muted = true
   container.loop = true
   container.src = video
   document.body.appendChild(container)
}


const client = createClient('qeCIdWKBFMNzM9G09AFOLhzi95DIdDbElu8WOt1Gg7DU2UzlVI849R9w');

async function changeBackground(status) {

   const container = document.querySelector('.video')

    try {
        const response = await client.videos.search({ query:status,size:'medium'});
        console.log(response);
        container.src = response.videos[0].video_files[0].link
    } catch (error) {
        console.error('Error fetching searched videos:', error);
    }
}


export {changeBackground,backgroundLoader}