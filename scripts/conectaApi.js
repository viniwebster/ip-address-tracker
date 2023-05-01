import { addPopUp } from "./map.js";
import { addInfos } from "./infos-tracker.js";
import { userApiInfos } from "./userApi.js";

userApiInfos()

const search = document.getElementById('search');
const button = document.getElementById('btn');
const mapa = document.getElementById('map-bx');
const erro = document.getElementById('erro');


button.addEventListener('click', ()=>{
    conectaApi(search.value);
    search.value = "";
})

search.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter'){
        conectaApi(search.value);
        search.value = "";
    }    
})


async function conectaApi(search){
    erro.textContent = "";   
    try{
        let api = await fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_qPFAzE6MC7Kp9mGCLFTasDBo0zvm2&domain=${search}`);
        let apiConvertida = await api.json();

        if (!api.ok) {
            throw new Error('Insert a valid ip or domain')
        }
        
        mapa.innerHTML = `<div id="map" class="container__image-map"></div>`
        addInfos(apiConvertida.ip, apiConvertida.location, apiConvertida.location.timezone, apiConvertida.isp);
        addPopUp(apiConvertida.location.lat, apiConvertida.location.lng);

        console.log(apiConvertida);
    } catch (e) {
        erro.textContent = 'Insert a valid ip or domain';
        console.log(e);
    }
    
}


