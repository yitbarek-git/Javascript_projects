const cameraFeed = document.getElementById("cameraFeed");
const gift = document.getElementById("gift");
const loveIcon = document.getElementById("love-icon");
const catIcon = document.getElementById("cat-icon");

navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
  cameraFeed.srcObject = stream;
  gift.addEventListener("click", () => {
    gift.innerHTML = "your're ቆንጆ!";
    loveIcon.innerHTML = "😹";
    catIcon.innerHTML = "❤️";
  })
})
  .catch(function (error) {
    console.error(`Unable to access your camera.`, error);
    window.alert(`please fix your camera issue.`)
  });