var constraints = {video:true};

function successCallback(stream) {

var video = document.querySelector("video");
video.srcObject = stream;
}

function errorCallback(error) {

console.log("Error", error);
}
navigator.getUserMedia(constraints,successCallback, errorCallback);
