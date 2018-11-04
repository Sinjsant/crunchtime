// import styles from "./mapstyle.js";

var map;
var libs = [
  ['Moffitt', [37.872646, -122.26072]]
];
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.8720, lng: -122.2585},
    zoom: 16,
    disableDefaultUI: true,
    styles: [
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.medical",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.school",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.sports_complex",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]
  });

var image = {
 url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
 // This marker is 20 pixels wide by 32 pixels high.
 size: new google.maps.Size(100, 100),
 // The origin for this image is (0, 0).
 origin: new google.maps.Point(0, 0),
 // The anchor for this image is the base of the flagpole at (0, 32).
 anchor: new google.maps.Point(0, 32)
};

for (var i = 0; i < libs.length; i++) {
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(libs[i][1][0], libs[i][1][1]),
    map: map,
    icon: image
  })
}

}
