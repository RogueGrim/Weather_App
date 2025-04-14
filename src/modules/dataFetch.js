async function getData(search){
    try{
        let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search}?key=3VSZXWHM5JVRWNMZKQ87FV58E&unitGroup=metric`,{mode:'cors'})

        const Data = await response.json()

        console.log(Data)

        const address = Data.address
        const temperature = Data.currentConditions.temp
        const feels = Data.currentConditions.feelslike
        const humidity = Data.currentConditions.humidity
        const conditions = Data.currentConditions.conditions
        const description = Data.description
        const icon = Data.currentConditions.icon

        return {address,temperature,feels,humidity,conditions,description,icon}
    }
    catch(response){
        console.log(response)
        throw response
        
    }
    

}

export {getData}