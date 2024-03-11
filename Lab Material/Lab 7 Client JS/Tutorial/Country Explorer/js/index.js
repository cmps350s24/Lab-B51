// get the references to the elements 

const regionDD = document.querySelector("#region");
const countryDD = document.querySelector("#country");

regionDD.addEventListener("change", handleRegionChange)

function handleRegionChange() {
    alert('Hey you did make a change')
}