// JS
const img = './img/logo.jpg';

// Obté l'element div del document HTML
const div = document.querySelector('div');

// Creem un element img
const imatge = document.createElement('img');

//Afageixo els atributs
imatge.src = img;
imatge.alt = 'logo cirvianum';

// Finalment injecto al document html
div.appendChild(imatge);



