const img = "cirvianum.jpg";
let div = document.querySelector('div');
let imgHTML = document.createElement('img');
imgHTML.src = img;
imgHTML.alt = "Hola";
div.appendChild(imgHTML);