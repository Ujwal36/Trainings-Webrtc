var constraints = {video:true, audio:true};
var stream;
function successCallback(stream) {
this.stream = stream;
var video = document.querySelector("video");
video.srcObject = stream;
}

function errorCallback(error) {

console.log("Error", error);
}
navigator.getUserMedia(constraints,successCallback, errorCallback);

btnGetAudioTracks.addEventListener("click", function(){ 
   console.log("getAudioTracks"); 
   console.log(stream.getAudioTracks()); 
});
  
btnGetTrackById.addEventListener("click", function(){ 
   console.log("getTrackById"); 
   console.log(stream.getTrackById(stream.getAudioTracks()[0].id)); 
});
  
btnGetTracks.addEventListener("click", function(){ 
   console.log("getTracks()"); 
   console.log(stream.getTracks()); 
});
 
btnGetVideoTracks.addEventListener("click", function(){ 
   console.log("getVideoTracks()"); 
   console.log(stream.getVideoTracks()); 
});

btnRemoveAudioTrack.addEventListener("click", function(){ 
   console.log("removeAudioTrack()"); 
   stream.removeTrack(stream.getAudioTracks()[0]); 
});
  
btnRemoveVideoTrack.addEventListener("click", function(){ 
   console.log("removeVideoTrack()"); 
   stream.removeTrack(stream.getVideoTracks()[0]); 
});

btnGetAllConnectedDevices.addEventListener("click", function(){
    console.log("Get all connected devices");
        console.log(navigator.mediaDevices.enumerateDevices());
  }); 
