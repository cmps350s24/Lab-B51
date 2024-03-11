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

    localStorage.countries = countries

    delete localStorage.countries
    const country = countries[0]

    factsArea.innerHTML = convertCountryToHTML(country)
}

function convertCountryToHTML(country) {
    const languageKeys = Object.keys(country.languages)
    const currenciesKeys = Object.keys(country.currencies)

    const languages = languageKeys.map(key => country.languages[key]).join(', ')
    const currencies = currenciesKeys.map(key => country.currencies[key].name).join(', ')

    return `
        <h1>Facts about ${country.name.common}</h1>
        <img src=${country.flags.png}>
        <table>
            <tr>
                <th class="yellow">Official Country Name</th>
                <td>${country.name.official}</td>
            </tr>
            <tr>
                <th>Capital City</th>
                <td>${country.capital[0]}</td>
            </tr>
            <tr>
                <th>Currencies</th>
                <td>${currencies}</td>
            </tr>
            <tr>
                <th>Population</th>
                <td>${country.population}</td>
            </tr>
            <tr>
                <th>Languages</th>
                <td>${languages}</td>
            </tr>
        </table>
`

}


// const person = {
//     name: "Ali",
//     age: 20,
//     gender: 'Male',
//     address: {
//         city: "Karachi",
//         country: "Pakistan"
//     }
// }

// const keys = Object.keys(person)
// console.log(keys);
// keys.forEach(key => console.log(person[key]))

