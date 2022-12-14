const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

const map = L.map('mapid', options).setView([-27.222633, -49.6455874], 15);

//creat and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//creat icon
const icon = L.icon({
  iconUrl: './live/IMG/map-marker.svg',
  iconSize: [58, 58],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//create and add marker
L.marker([-27.222633, -49.6455874], { icon: icon }).addTo(map);

//  image gallery
function selectImage(event) {
  const button = event.currentTarget;

  // remover todas as classes .active
  const buttons = document.querySelectorAll('.images button');
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove('active');
  }

  // selecionar a image clicada
  const image = button.children[0];
  const imageContainer = document.querySelector('.orphanage-details > img');
  // atualizar o container de image
  imageContainer.src = image.src;
  // adicionar a classe .active para este botao
  button.classlist.add('active');
}
