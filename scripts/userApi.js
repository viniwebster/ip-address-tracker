import { addPopUp } from "./map.js";
import { addInfos } from "./infos-tracker.js";

export async function userApiInfos() {
    const api = await fetch('https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_qPFAzE6MC7Kp9mGCLFTasDBo0zvm2&ipAddress')
    const apiConvertida = await api.json();

    addInfos(apiConvertida.ip, apiConvertida.location, apiConvertida.location.timezone, apiConvertida.isp);
    addPopUp(apiConvertida.location.lat, apiConvertida.location.lng);
}
