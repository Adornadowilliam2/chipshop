const starContainer = document.querySelectorAll(".star-container");

starContainer.forEach((container) => {
  for (let i = 0; i < 5; i++) {
    container.innerHTML += `<h4>&#11088</h4>`;
  }
});

const closeBtn = document.querySelector(".close-btn");

closeBtn.innerHTML = `
  <a href="index.html">
    <img
      src="./image/close.png"
      alt="close btn"
      style="
        position: absolute;
        top: 0;
        right: 0;
        padding: 10px;
      "
      width="50px"
    />
  </a>
`;
