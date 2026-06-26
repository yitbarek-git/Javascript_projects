const cameraFeed = document.getElementById("cameraFeed");

navigator.mediaDevices
.getUserMedia({ video: true })
  .then((stream) => {
    cameraFeed.srcObject = stream;
  })
 .catch((error) => {
    console.error("Oops, no camera:", error);
    alert("Please allow camera access and refresh.");
  });
