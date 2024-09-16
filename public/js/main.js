const feebackModal = bootstrap.Modal.getOrCreateInstance("#exampleModal");
// console.log("🚀 ~ feebackModal:", feebackModal);

window.addEventListener("DOMContentLoaded", () => {
  if (JSON.parse(sessionStorage.getItem("feedbackModal")) !== "up") {
    sessionStorage.setItem("feedbackModal", JSON.stringify("up"));
    feebackModal.show();
    // if (feebackModal._isShown) {
    //   sessionStorage.setItem("feedbackModal", JSON.stringify("up"));
    // }
  }
});

const stars = document.querySelectorAll(".star");
// console.log("🚀 ~ stars:", stars);
for (let i = 0; i < stars.length; i++) {
  stars[i].addEventListener("click", highLightStars);
}

function highLightStars(e) {
  removeHighlighted();
  let id = e.target.id;
  let number = id.split("-")[1];
  for (let i = number; i > 0; i--) {
    let finalID = "i-star-" + i;
    let classList = document.getElementById(finalID).classList;
    classList.add("high");
  }
}

function removeHighlighted() {
  for (let i = 1; i <= 5; i++) {
    let finalID = "i-star-" + i;
    let classList = document.getElementById(finalID).classList;
    classList.remove("high");
  }
}
