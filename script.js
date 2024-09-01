const starContainer = document.querySelectorAll(".star-container");

starContainer.forEach((container) => {
  for (let i = 0; i < 5; i++) {
    container.innerHTML += `<h4>&#11088</h4>`;
  }
});

const closeBtn = document.querySelector(".close-btn");

if (closeBtn) {
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
} else {
  console.error("No close button found.");
}

const priceArray = [
  "₱254,205.08",
  "₱13,280.67",
  "₱8,007.00",
  "₱5,901.95",
  "₱19,807.50",
  "₱13,280.67",
  "₱11,242.03",
  "₱20,602.07",
  "₱32,577.37",
];

// Function to set prices in h3 elements
function setPrices() {
  // Get all h3 elements inside .flex-item
  const h3Elements = document.querySelectorAll(".flex-item h3");

  // Check if the length of h3Elements matches the length of priceArray
  if (h3Elements.length !== priceArray.length) {
    console.error("Number of h3 elements does not match number of prices.");
    return;
  }

  // Iterate over each h3 element and set the price from priceArray
  h3Elements.forEach((h3, index) => {
    h3.textContent = priceArray[index];
  });
}

// Call the function to set prices
setPrices();
