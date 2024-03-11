// URLS [Routes to get the data]
const regionURL = "https://restcountries.com/v3.1/region/"
const countryURL = "https://restcountries.com/v3.1/name/"


// get the references to the elements 
const regionDD = document.querySelector("#region");
const countryDD = document.querySelector("#country");
const factsArea = document.querySelector("#facts-area");

regionDD.addEventListener("change", handleRegionChange)

async function handleRegionChange() {
    const url = `${regionURL}${regionDD.value}`
    const data = await fetch(url)
    const countries = await data.json()

    countryDD.innerHTML = countries
        .map(country => `<option value = ${country.name.common}> ${country.name.common}</option>`)
        .join(' ')


}