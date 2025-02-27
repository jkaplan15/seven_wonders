const wonderName = document.getElementById("wonder-name");
const wonderImage = document.getElementById("wonder-image");
const wonderDescription = document.getElementById("wonder-description");
const wondersList = document.getElementById("wonders-list");
const reviewList = document.getElementById("review-list");
let numOfLikes = 1;
const likesBox = document.getElementById("likes-box");
const likesButton = document.getElementById("like-button");
const review = document.getElementById("review");
const audio = new Audio('mixkit-cool-interface-click-tone-2568.wav')

fetch("http://localhost:3000/sevenWonders")
  .then((res) => res.json())
  .then((wonders) => {
    wonders.forEach((wonder) => {
      appendWonderDetails(wonders[0]);
      displayWonderNames(wonder);
    });
  });

function displayWonderNames(wonder) {
  const listTags = document.createElement("li");
  listTags.textContent = wonder.name;
  listTags.addEventListener("mouseover", () => {
    appendWonderDetails(wonder);
  });
  wondersList.appendChild(listTags);
}

function appendWonderDetails(wonder) {
  wonderName.textContent = wonder.name;
  wonderImage.src = wonder.image;
  wonderDescription.textContent = wonder.description;
}

const reviewForm = document.getElementById("review-form");
reviewForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addReview();
  // handleSubmit(e.target.review.value)
  e.target.reset()
});

function addReview() {
  const reviewLi = document.createElement("p");
  reviewLi.textContent = review.value;
  reviewList.appendChild(reviewLi);

}

function addLikes() {
  likesBox.textContent = numOfLikes++ + " likes";
  audio.play()
  if (numOfLikes === 6) {
    alert("This wonder has reached 5 likes!")
  }
}

likesButton.addEventListener("click", addLikes);

// function handleSubmit(arg1) {
//   const newComment = {
//
//   }
//   fetch(`http://localhost:3000/sevenWonders/${currentId}`, {
//     method: "PATCH",
//     headers: {
//         "Content-Type": "Application/json"
//   },
//   body: JSON.stringify(newComment)
// })
// }



