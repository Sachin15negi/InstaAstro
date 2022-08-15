// Selectors
const your = document.getElementById("yourName");
const partner = document.getElementById("partnerName");
const myModal = new bootstrap.Modal(
  document.getElementById("myModal"),
  options
);
const myModalEl = document.getElementById("myModal");
const myModal = new bootstrap.Modal("#myModal", {
  keyboard: false,
});
myModalEl.addEventListener("show.bs.modal", (event) => {
  // do something...
});
var sum;

// Event Listener
staticBackdrop.addEventListener;
submitButton.addEventListener("click", calculation);

function calculation() {
  if (your.length > partner.length) {
    sum = (your.length - partner.length) / partner.length;
    sum = sum * 100;
    console.log(sum);
  } else if (your.length < partner.length) {
    sum = (partner.length - your.length) / your.length;
    sum = sum * 100;
    console.log(sum);
  }
}
