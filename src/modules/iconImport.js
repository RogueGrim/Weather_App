function importIcon(icon){
    import(`../resources/${icon}.svg`)
    .then((e)=>{
        console.log(e)
        document.querySelector('.weatherIcon').src = e.default


    })
}

export {importIcon}