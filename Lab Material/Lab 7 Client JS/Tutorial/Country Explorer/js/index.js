// URLS [Routes to get the data]
const regionURL = "https://restcountries.com/v3.1/region/"
const countryURL = "https://restcountries.com/v3.1/name/"


// get the references to the elements
const regionDD = document.querySelector("#region");
const countryDD = document.querySelector("#country");
const factsArea = document.querySelector("#facts-area");

regionDD.addEventListener("change", handleRegionChange)
countryDD.addEventListener("change", handleCountryChange)

async function handleRegionChange() {
    const url = `${regionURL}${regionDD.value}`
    const data = await fetch(url)
    const countries = await data.json()

    countryDD.innerHTML = countries
        .map(country => `<option value=${country.name.common}> ${country.name.common}</option>`)
        .join(' ')


}

async function handleCountryChange() {
    const url = `${countryURL}${countryDD.value}`
    const data = await fetch(url)
    const countries = await data.json()
    const country = countries[0]

    factsArea.innerHTML = `
<h1>Facts about ${country.name.common}</h1>
<img src=${country.flags.png}>
<table>
    <tr>
        <th>Official Country Name</th>
        <td>${country.name.official}</td>
    </tr>
    <tr>
        <th>Capital City</th>
        <td>${country.name.official}</td>
    </tr>
    <tr>
        <th>Currencies</th>
        <td>${country.name.official}</td>
    </tr>
    <tr>
        <th>Population</th>
        <td>${country.name.official}</td>
    </tr>
    <tr>
        <th>Languages</th>
        <td>${country.name.official}</td>
    </tr>
</table>
`
}