var languages = [
  {
    name: 'JavaScript',
    releaseDate: 1995,
    fileExtension: '.js',
    creator: 'Brendan Eich',
  },
  {
    name: 'Java',
    releaseDate: 1995,
    fileExtension: '.java',
    creator: 'James Gosling',
  },
  {
    name: 'PHP',
    releaseDate: 1995,
    fileExtension: '.php',
    creator: 'Rasmus Lerdorf',
  },
  {
    name: 'C++',
    releaseDate: 1985,
    fileExtension: '.cpp',
    creator: 'Bjarne Stroustrup',
  },
];
{
  /* <table border="1">
        <caption>Esta es una tabla de ejemplo</caption>
        <thead>
            <tr>
                <th>Nom</th>
                <th>Encabezado 2</th>
                <th>Encabezado 3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Dato 1</td>
                <td>Dato 2</td>
                <td>Dato 3</td>
            </tr>
            <tr>
                <td>Dato 4</td>
                <td>Dato 5</td>
                <td>Dato 6</td>
            </tr>
            <!-- Puedes agregar más filas según sea necesario -->
        </tbody>
    </table> */
}

function tableCreator(dataArray, targetElement) {
  // Crea els elements de la taula
  const table = document.createElement('table');

  const theadElement = document.createElement('thead');
  table.appendChild(theadElement);

  // Recursivament creem els elements de la capçalera
  const trElement = document.createElement('tr');

  for (const key in dataArray[0]) {
    const thElement = document.createElement('th');
    thElement.innerHTML = key;
    trElement.appendChild(thElement);
  }
  // Ara ja tenim construit el nostre tr, l'injectem al th
  theadElement.appendChild(trElement);
  // Ja tenim la nostre capçalera preparada.

  // Ara ens toca omplir el cos de la taula.

  //Crear l'element tbody
  const tbodyElement = document.createElement('thead');

  for (const element of dataArray) {
    // Crear l'element per a cada nova fila
    const trElement = document.createElement('tr');

    // Recorrer les propietats de cada objecte per a crear les cel·les de la fila
    for (const key in element) {
      // Creal cada element td per a cada valor de la columna
      const tdElement = document.createElement('td');
      tdElement.innerHTML = element[key];
      // Afegir la cel·la a la fila
      trElement.appendChild(tdElement);
    }
    tbodyElement.appendChild(trElement);
  }
  table.appendChild(tbodyElement);

  targetElement.appendChild(table);
}

// Crida a la funció
tableCreator(languages, document.getElementById('table-container'));
