const div = document.querySelector('.data');

const getData = async () => {
  const response = await fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors');
  const data = await response.json();
  return data;
}

getData()
  .then(data => {
    data.forEach((element, index) => {
      const card      = document.createElement('div');
      const title     = document.createElement('h3');
      const id        = document.createElement('p');
      const idBook    = document.createElement('p');
      const firstName = document.createElement('p');
      const lastName  = document.createElement('p');
      title.textContent     = `Element (${index})`;
      id.textContent        = `id:        ${element.id}`;
      idBook.textContent    = `idBook:    ${element.idBook}`;
      firstName.textContent = `firstName: ${element.firstName}`;
      lastName.textContent  = `lastName:  ${element.lastName}`;
      card.appendChild(title);
      card.appendChild(id);
      card.appendChild(idBook);
      card.appendChild(firstName);
      card.appendChild(lastName);
      div.appendChild(card);
    });
  })
  .catch(error => console.log(error));
  