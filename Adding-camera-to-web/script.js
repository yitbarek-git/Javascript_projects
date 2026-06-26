const cameraFeed = document.getElementById("cameraFeed");

navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
  cameraFeed.srcObject = stream;
})
  .catch(function (error) {
    console.error("Error Accesing camera.")
    window.alert("Unable to access user camera.");
  })