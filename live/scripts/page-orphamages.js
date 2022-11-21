//tipos de dados
//string ""
//Number 01
// object {}
// boolean true or false
//array[]

//creat map
const map = L.map('mapid').setView([-27.222633, -49.6455874], 15);

//creat and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//creat icon
const icon = L.icon({
  iconUrl: './live/IMG/map-marker.svg',
  iconSize: [58, 58],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//creat popup overlay
const popup = L.popup({
  closeButton: false,
  className: 'map-popup',
  minWidth: 240,
  minheight: 240,
}).setContent(
  "Lar das meninas <a href= 'orphanage.html?=id=1' class='choose-ophanage'><img src='./live/IMG/arrow-white.svg'</a>"
);

//create and add marker
L.marker([-27.222633, -49.6455874], { icon: icon }).addTo(map).bindPopup(popup);
