
const googleMapEl = document.getElementById("googleMap")
const zipcode=document.getElementById("zipcode").value

// `https://maps.googleapis.com/maps/api/geocode/json?address=${req.session.zipcode}&key=${process.env.gMapsAPI}`


function init(){
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=AIzaSyDiGnQ61aAehxeFqd9DfJ6JZ8OOBVuruQU`).then((data)=>{
      return data.json()
    }).then((res)=>{
        console.log(res)
    })
}
init()

function myMap(lat, lon) {
var mapProp= {
  center: new google.maps.LatLng$(lat,-lon),
  zoom:12,
};
var map = new google.maps.Map(googleMapEl,mapProp);
}




