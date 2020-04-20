window.onload = function(){

var map = L.map('map').setView([22.999569, 120.211760], 14); // 經緯度 比例

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); // 將openstreetmap資料下載到 畫面中

 // 加標籤
 // 彈出
 
L.marker([22.999569, 120.211760]).addTo(map) // 前緯度 後經度
    .bindPopup('衛屋茶事Sputnik Lab')
    .openPopup();
 // 範圍
var circle = L.circle([22.999569, 120.211760], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 60 // 單位為公尺
}).addTo(map);

L.marker([22.995131, 120.199466]).addTo(map) // 前緯度 後經度
    .bindPopup('花見宇治抹茶甘味處')
    .openPopup();
 // 範圍
var circle = L.circle([22.995131, 120.199466], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 60 // 單位為公尺
}).addTo(map);

L.marker([22.990884, 120.198953]).addTo(map) // 前緯度 後經度
    .bindPopup('MACK A WISH')
    .openPopup();
 // 範圍
var circle = L.circle([22.990884, 120.198953], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 60 // 單位為公尺
}).addTo(map);

L.marker([22.990668, 120.207031]).addTo(map) // 前緯度 後經度
    .bindPopup('綠町抹茶專門店')
    .openPopup();
 // 範圍
var circle = L.circle([22.990668, 120.207031], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 60 // 單位為公尺
}).addTo(map);
}


