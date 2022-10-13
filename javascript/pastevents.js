
const contenedor3 = document.getElementById("contenedor3")
let fecha2 = Date.parse(objeto.currentDate)
let data2 = objeto.events

console.log(fecha2)

function filtrarEventosFuturo (data,fecha) {
   let filtrado = data.filter(function(item) {return Date.parse(item.date) < fecha } )
    return filtrado 
}

let arrayFiltrado2 = filtrarEventosFuturo (data2,fecha2)



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
imprimirEventos(arrayFiltrado2,contenedor3)