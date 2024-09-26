const closeBtn = document.querySelector(".close-btn");

if (!closeBtn) {
  console.log("No close button found.");
} else {
  closeBtn.innerHTML = `
    <a href="index.html">
      <img
        src="./image/close.png"
        alt="close btn"
        class="closebtn"
      />
    </a>
  `;
}

const data = [
  {
    id: 1,
    name: "AMD Ryzen Threadripper 3990X",
    image: "image/Ryzen 3990x.jpg",
    price: "₱254,205.08",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 2,
    name: "AMD Ryzen 7 5800X",
    image: "image/Ryzen 7 5800X.jpg",
    price: "₱13,280.67",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 3,
    name: "Intel Core i5-10400",
    image: "image/Intel Core I5-10400.jpg",
    price: "₱8,007.00",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 4,
    name: "Intel Core I3-10100",
    image: "image/Intel Core I3-10100.jpg",
    price: "₱5,901.95",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 5,
    name: "AMD Ryzen 5 3600",
    image: "image/Ryzen 5 3600.jpg",
    price: "₱19,807.50",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 6,
    name: "AMD Ryzen 3 3100",
    image: "image/Ryzen 3 3100.jpg",
    price: "₱13,280.67",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 7,
    name: "Intel Core I5-11600KF",
    image: "image/Intel Core I5-11600KF.jpg",
    price: "₱11,242.03",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 8,
    name: "AMD Ryzen 7 7800X3D",
    image: "image/AMD Ryzen 7 7800X3D.jpg",
    price: "₱20,602.07",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 9,
    name: "Intel Core I9-14900KF",
    image: "image/Intel Core I9-14900KF.jpg",
    price: "₱32,577.37",
    rating: "⭐⭐⭐⭐⭐",
  },
];

// retrieve all using for loop
let flexsection = document.querySelector(".flex-container");
for (let i = 0; i < data.length; i++) {
  if (!flexsection) {
    console.log("No flex container found.");
  } else {
    flexsection.innerHTML += ` 
    <div class="flex-item">
      <img src="${data[i].image}" alt="Image ${data[i].id}" />
      <h3>${data[i].name}</h3>
      <p>${data[i].price}</p>
      <div class="star-container"></div>
      <a href="item/item${data[i].id}.html"><button class="flex-button">Add to Cart</button></a>
    </div>
  `;
  }
}
let starcontainer = document.querySelectorAll(".star-container");

starcontainer.forEach((star) => {
  for (let i = 0; i < data.length; i++) {
    if (star) {
      star.innerHTML = `${data[i].rating}`;
    }
  }
});
