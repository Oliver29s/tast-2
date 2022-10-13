const conttenedor = document.getElementById("conttenedor")
let fecha  = Date.parse(objeto.currentDate)
let data = objeto.events
function imprimirEventos(array,contenedor){
    for (let i = 0; i < array.length; i++)
     contenedor.innerHTML += 
    `
                <div class=" card p-1" style="width: 25rem; ">
                    <img src="${array[i].image}" class="card-img-top" alt="imagen1">
                    <div class="card-body">
                        <h5 class="card-title">${array[i].name}</h5>
                        <p class="card-text">${array[i].description}</p>    
                        <div class="d-flex justify-content-between">
                            <h6>Price: ${array[i].price}</h6>
                            <a href="#" class="btn btn-primary">Details</a>
    
                        </div>
                    </div>
                </div>
    `
 }
 imprimirEventos(data,conttenedor)