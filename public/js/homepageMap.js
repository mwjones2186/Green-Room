
const googleMapEl = document.getElementById("map")
const zipcode=document.getElementById("zipcode").value

// `https://maps.googleapis.com/maps/api/geocode/json?address=${req.session.zipcode}&key=${process.env.gMapsAPI}`


function init(){
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=AIzaSyDiGnQ61aAehxeFqd9DfJ6JZ8OOBVuruQU`).then(function (results) {
        return results.json()
    }).then(function (data) {
        
        let lat = data.results[0].geometry.location.lat;
        let lng = data.results[0].geometry.location.lng;
        initMap(lat, lng)
    })

}

init()

function initMap(lat, lng) {
    // The location of Uluru
    const usermap = {lat, lng};
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: usermap,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: usermap,
      map: map,
    });
  }
  

