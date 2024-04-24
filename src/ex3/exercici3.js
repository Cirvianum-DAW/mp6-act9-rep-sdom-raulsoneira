// querySelectorAll em retorna un "NodeList" que puc iterar després com si fos un array
const firstList = document.querySelectorAll('ul li:first-child');
const lastList = document.querySelectorAll('ul li:last-child');

firstList.forEach((li) => (li.textContent = 'primer'));
lastList.forEach((li) => (li.textContent = 'ultim'));