const instrumento = document.querySelectorAll('.instrumento')
const lista = document.getElementById('instrumentoSelect')
lista.addEventListener('change',(select)=>{
    const seleccion = select.target.value
    console.log(seleccion)
    instrumento.forEach(element => {
        if(seleccion === 'all'){
            element.style.display = 'block'
        }else
        if(seleccion === element.id){
            element.style.display = 'block'
        }else{
            element.style.display = 'none'
        }
    });
})