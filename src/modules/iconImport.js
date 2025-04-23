function importIcon(icon){
    import(`../resources/${icon}.svg`)
    .then((e)=>{
        document.querySelector('.weatherIcon').src = e.default
    
    })
}

export {importIcon}