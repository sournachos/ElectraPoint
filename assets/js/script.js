var fetchButton = document.getElementById('mapCreation');
var mainMap = document.getElementById('map-container');
var apiKey = '053d958f-ba09-46ab-a82c-205e08310970';

function getMap() {
    // 
    var requestUrl = 'https://map.openchargemap.io';
    var createMap = document.mainMap.createElement('iframe');
    createMap.src = requestUrl;
    createMap.onload = "mapLoaded();";
    createMap.frameborder = "0";
    createMap.allow = "geolocation";
    createMap.style = "width:100%;height:100%";
    console.log(getMap);
    document.body.appendChild(createMap);
}
  
fetchButton.addEventListener('click', getMap);











