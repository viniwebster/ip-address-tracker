import { addPopUp } from "./map.js";
import { addInfos } from "./infos-tracker.js";
import { userApiInfos } from "./userApi.js";

userApiInfos()

const search = document.getElementById('search');
const button = document.getElementById('btn');
const mapa = document.getElementById('map-bx');


button.addEventListener('click', ()=>{
    mapa.innerHTML = ""
    conectaApi(search.value);
    search.value = "";
})


async function conectaApi(search){
    
    let api = await fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_qPFAzE6MC7Kp9mGCLFTasDBo0zvm2&domain=${search}`);
    let apiConvertida = await api.json();

    mapa.innerHTML = `<div id="map" class="container__image-map"></div>`
    addInfos(apiConvertida.ip, apiConvertida.location, apiConvertida.location.timezone, apiConvertida.isp);
    addPopUp(apiConvertida.location.lat, apiConvertida.location.lng);

    console.log(apiConvertida);

}


