// ==========  START GOOGLE MAP ========== //
function initialize() {
var myLatLng = new google.maps.LatLng(54.678013,25.302273);
var roadAtlasStyles = [ { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [ { "color": "#474D5D" } ] },{ "elementType": "labels.text.fill", "stylers": [ { "color": "#FFFFFF" } ] },{ "elementType": "labels.text.stroke", "stylers": [ { "visibility": "off" } ] },{ "featureType": "road", "elementType": "geometry.fill", "stylers": [ { "color": "#50525f" } ] },{ "featureType": "road", "elementType": "geometry.stroke", "stylers": [ { "visibility": "on" }, { "color": "#808080" } ] },{ "featureType": "poi", "elementType": "labels", "stylers": [ { "visibility": "off" } ] },{ "featureType": "transit", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] },{ "featureType": "poi", "elementType": "geometry", "stylers": [ { "color": "#808080" } ] },{ "featureType": "water", "elementType": "geometry.fill", "stylers": [ { "color": "#3071a7" }, { "saturation": -65 } ] },{ "featureType": "road", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] },{ "featureType": "landscape", "elementType": "geometry.stroke", "stylers": [ { "color": "#bbbbbb" } ] } ];

var mapOptions = {
    zoom: 15,
    center: myLatLng,
    disableDefaultUI: false,
    scrollwheel: false,
    navigationControl: true,
    mapTypeControl: false,
    scaleControl: true,
    draggable: true,
    mapTypeControlOptions: {
    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
    }
  };

  var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
  
   
  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: 'img/location-icon.png',
	  title: '',
  });
  
  var contentString = '<div style="max-width: 300px" id="content">'+
      '<div id="bodyContent">'+
	  '<h4>Downtown Forest Hostel & Camping</h4>' +
      '<p style="font-size: 12px">Paupio st. 31A, Vilnius LT-11341, Lithuania.</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });
  
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });

  var styledMapOptions = {
    name: 'US Road Atlas'
  };


}

google.maps.event.addDomListener(window, "load", initialize);
// ========== END GOOGLE MAP ========== //
