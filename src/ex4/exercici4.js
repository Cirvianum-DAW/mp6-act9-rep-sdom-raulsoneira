// Seleccioneu l'element div amb id "list-app"
const app = document.querySelector('#list-app');

// Creem els NOUS elements necessaris
const list = document.createElement('ul');
app.appendChild(list);
const input = document.createElement('input');
input.type = 'text';

const addButton = document.createElement('button');
addButton.innerHTML = 'Crear Nou';

addButton.addEventListener('click', () => {
  // 1. Primer he de crear l'element on posaré la info
  const newItem = document.createElement('li');
  // 2. Afegir el valor que hagi escrit l'usuari dins l'input a aquest nou element.
  newItem.innerHTML = input.value;
  // 3. Injecto (appenChild) el nou Li a la llista ul.
  list.appendChild(newItem);
  // 4. Finalment natejo el valor de l'input.
  input.value = '';
});

list.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    const text = prompt('Introdueix el nou text:');
    event.target.innerHTML = text;
  }
});

app.appendChild(input);
app.appendChild(addButton);
