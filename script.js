const starContainer = document.querySelectorAll(".star-container");

starContainer.forEach((container) => {
  for (let i = 0; i < 5; i++) {
    container.innerHTML += `<h4>&#11088</h4>`;
  }
});
