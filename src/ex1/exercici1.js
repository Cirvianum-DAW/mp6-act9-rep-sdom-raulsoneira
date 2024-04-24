// Crea una llista de fruites
const fruitList = ['poma', 'plàtan', 'tomàquet'];

// Obté l'element ul del document HTML
const ulElement = document.querySelector('ul');

// Per a cada fruita a la llista de fruites...
fruitList.forEach((fruita) => {
  // 1. Genera un nou element li
  const liElement = document.createElement('li');

  // 2. Introdueix el contingut de cada element li amb el nom de la fruita
  liElement.textContent = fruita;

  // Afegeix l'element li amb el nom de la fruita com a fill de l'element ul
  ulElement.appendChild(liElement);
});
