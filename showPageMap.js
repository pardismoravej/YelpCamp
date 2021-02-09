mapboxgl.accessToken = 'pk.eyJ1IjoicG1vcmF2ZWoiLCJhIjoiY2traWsyaHczMDhsdDJwbXpxb25peWcxMSJ9.sdsA2R76D-v50p9k2OHzzw';
const map = new mapboxgl.Map({
container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: campground.geometry.coordinates, // starting position [lng, lat]
    zoom: 8 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({offset: 25})
        .setHTML(
            `<h3>${campground.title}</h3>`
        )
    )
    .addTo(map)

