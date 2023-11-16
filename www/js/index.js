document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    // Device is ready, initialize geolocation.
}
function getLocation() {
    navigator.geolocation.getCurrentPosition(
        onSuccess,
        onError,
        { enableHighAccuracy: true }
    );
}

function onSuccess(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var accuracy = position.coords.accuracy;
    var locationInfo = `Latitude: ${latitude}<br>Longitude: ${longitude}<br>Accuracy: ${accuracy} meters`;

    document.getElementById("locationInfo").innerHTML = locationInfo;
}

function onError(error) {
    alert(`Error getting location: ${error.message}`);
}
