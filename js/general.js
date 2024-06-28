(function(){
    const listElements = document.querySelectorAll('.perfil');
    
    const addClick = ()=>{
        listElements.forEach(element =>{
            console.log('estoy dentro');
        })
    }
    addClick();
})();