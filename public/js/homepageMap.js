
const postal_code = document.getElementById('zipcode-signup').value;

const map = `https://maps.googleapis.com/maps/api/geocode/json?components=${postal_code}&key=AIzaSyDiGnQ61aAehxeFqd9DfJ6JZ8OOBVuruQU`

fetch(map).then(function (results){
    return;
})


// googleMap.setAttribute('src', `https://www.google.com/maps/embed/v1/place?key=AIzaSyDiGnQ61aAehxeFqd9DfJ6JZ8OOBVuruQU
// &q=${formattedCity}+${state}`)