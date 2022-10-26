
const htmlEl = document.querySelector(".main-container")
const estadoSelecionado = document.querySelectorAll(".estado")
const arrayDeEstados = Array.from(estadoSelecionado)
const totalDeath = document.querySelector(".mortes-total")
const mortesBrasil = document.querySelector(".mortes-total-Brasil")
const bodyWid = document.querySelector(".body-wid")


// Display info when clicked


function api(){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        mode: 'cors'
      };
      fetch(`https://coronavirus.m.pipedream.net/`, requestOptions)
        .then(response => response.json())
        .then(data =>

          callStatesInfo(data)
      
        )    
}

function callStatesInfo(data){
  data.rawData.forEach(element => {
    if( element.Country_Region == "Brazil" ){ 
     console.log(element)
     htmlEl.innerHTML  += `
     <div class="grid-el">
     <h2>${element.Province_State}</h2>
     
     <p class="confirmados-list">${element.Confirmed} Casos </p>
     <p class="death-list"> ${element.Deaths} Mortes</p>
     <p>
     ${element.Last_Update}  </p>
     </div>
     `
   }
   else{
     return
   }
})
}
api()

/////////////////////////////////////
const totais = document.querySelector(".totais")
const mortos = document.querySelector(".mortos")
const recuperados = document.querySelector(".recuperados")
const dataUpdate = document.querySelector(".data-update")
function apiGeral(){
  var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      mode: 'cors'
    };
    fetch(`https://covid-19.dataflowkit.com/v1/Brazil`, requestOptions)
      .then(response => response.json())
      .then(data =>

      
      changeNames(data)
      
      )    
}
function changeNames(data){
  totais.innerHTML = `<p class ="text-wid"> Total </p>   <p class="data">${data["Total Cases_text"]}</p>`
  mortos.innerHTML =  `<p class ="text-wid" > Mortes </p> <p class="data">${data["Total Deaths_text"]}</p>`
  recuperados.innerHTML = `<p class ="text-wid"> Recuperados </p>  <p class="data">${data["Total Recovered_text"]}</p>`  
  dataUpdate.innerHTML = ` Última atualização : ${data["Last Update"]} `
}
apiGeral()