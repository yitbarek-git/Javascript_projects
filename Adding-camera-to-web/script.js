const cameraFeed = document.getElementById("cameraFeed");
const giftButton = document.getElementById("gift-button");

const gift = document.getElementById("gift");
const loveIcon = document.getElementById("love-icon");
const catIcon = document.getElementById("cat-icon");

navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
  cameraFeed.srcObject = stream;
  gift.addEventListener("click", () => {
    gift.innerHTML = "your're ቆንጆ!";
    loveIcon.innerHTML = "😹";
    catIcon.innerHTML = "❤️";
    giftButton.style.fontSize = `5rem`;
  })
})
  .catch(function (error) {
    console.error(`Unable to access your camera.`, error);
    window.alert(`Something went wrong.`)
  });