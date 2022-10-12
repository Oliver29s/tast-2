const conttenedor = document.getElementById("conttenedor")
const proximoEvento = eventosPasados(events,"date")
for(let event of proximoEvento ){
    imprimirEventos(event,conttenedor)
}
function eventosPasados(array,fecha){
    let acu =[]
    for(i = 0; i < array.length; i++){
        if(array[i].date < "2022-01-01"){
            acu.push(array[i])
        }
        
    }
    return acu

}
 function imprimirEventos(proximoEvento,conttenedor){
    conttenedor.innerHTML += `
            <div class=" card p-1" style="width: 25rem; ">
                <img src="${proximoEvento.image}" class="card-img-top" alt="imagen1">
                <div class="card-body">
                    <h5 class="card-title">${proximoEvento.name}</h5>
                    <p class="card-text">${proximoEvento.description}
                    </p>
                    <div class="d-flex justify-content-between">
                        <h6> Price: ${proximoEvento.price}</h6>
                        <a href="#" class="btn btn-primary">Details</a>

                    </div>
                </div>
            </div>
`

 }