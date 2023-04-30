export function addInfos(ip, location, timezone, isp) {
    
    const ipHtml = document.getElementById('ip');
    const locationHtml = document.getElementById('location');
    const timezoneHtml = document.getElementById('timezone');
    const ispHtml = document.getElementById('isp');

    ipHtml.textContent = ip;
    locationHtml.innerHTML = `${location.city}, ${location.country} <br> ${location.postalCode}`;
    timezoneHtml.textContent = `UTC ${timezone}`;
    ispHtml.textContent = isp;

}