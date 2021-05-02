fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries(data))

const displayCountries = countries => {
   const countriesDiv = document.getElementById('countries')
   countries.forEach(country => {
      const countryDiv = document.createElement('div');
      countryDiv.className = 'country';
      const countryInfo = `
         <h3 class="country-name">${country.name}</h3>
         <p>${country.capital}</p>
         <button onclick="displayCountryDetail('${country.name}')">Details</button>
      `;
      countryDiv.innerHTML = countryInfo;
      countriesDiv.appendChild(countryDiv);      
   });
}

const displayCountryDetail = name => {
   const url = `https://restcountries.eu/rest/v2/name/${name}`
   fetch(url)
   .then(res => res.json())
   .then(data => displayDetail(data[0]))
}


const displayDetail = country => {
   const countryDiv = document.getElementById('country-details');
   countryDiv.innerHTML = `
      <h1 style="padding-top: 20px">${country.name}</h1>
      <p>Capital is ${country.capital}</p>
      <p>Population are ${country.population}</p>
      <p>Regin is ${country.region}</p>
      <img id="flag" src="${country.flag}">
      <p style="padding-bottom: 20px"></p>
   `;
}