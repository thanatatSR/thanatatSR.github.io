const shoesData = [
  {
    id: 1,
    name: "Nike Air Force 1 '07",
    type: "Men's Shoes",
    price: "£119.99",
    picture:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1d455eb-8447-4b51-a2b3-61db8b7a78fe/NIKE+AIR+FORCE+1+%2707.png",
    promotion: true,
    bestseller: true,
  },
  {
    id: 2,
    name: "Nike Air Max 95",
    type: "Shoes",
    price: "£174.99",
    picture:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d4c31751-aa66-45da-a4c3-e10308e1ce6d/NIKE+AIR+MAX+95.png",
    promotion: false,
    bestseller: false,
  },
  {
    id: 3,
    name: "Nike Alphafly 3 Electric",
    type: "Men's Road Racing Shoes",
    price: "£294.99",
    picture:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5735da65-f28c-44b1-a281-868618c1c7b0/AIR+ZOOM+ALPHAFLY+NEXT%25+3+OLY.png",
    promotion: false,
    bestseller: false,
  },
  {
    id: 4,
    name: "Nike Air Max Alpha Trainer 5",
    type: "Men's Workout Shoes",
    price: "£79.99",
    picture:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c95a8a1b-8e71-487d-9407-a9b181fc7caa/M+NIKE+AIR+MAX+ALPHA+TRAINER+5.png",
    promotion: false,
    bestseller: true,
  },
  {
    id: 5,
    name: "Nike Air Presto",
    type: "Men's Shoes",
    price: "£129.99",
    picture:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0e293b0d-0ce3-41fa-9898-9ca3cb7da3ea/NIKE+AIR+PRESTO.png",
    promotion: true,
    bestseller: true,
  },
  {
    id: 6,
    name: "Nike Dunk Low Retro",
    type: "Men's Shoes",
    price: "£109.99",
    picture:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0a25e340-15d3-4d47-a8af-0586e8ab668b/NIKE+DUNK+LOW+RETRO.png",
    promotion: false,
    bestseller: true,
  },
  {
    id: 7,
    name: "Nike Dunk Low Retro",
    type: "Men's Shoes",
    price: "£109.99",
    picture:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7ff6bde9-caad-444e-bd21-ee49b126fd85/NIKE+DUNK+LOW+RETRO.png",
    promotion: false,
    bestseller: true,
  },
  {
    id: 8,
    name: "Nike Air Max 90",
    type: "Men's Shoes",
    price: "£134.99",
    picture:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/wzitsrb4oucx9jukxsmc/AIR+MAX+90.png",
    promotion: false,
    bestseller: true,
  },
  {
    id: 9,
    name: "Nike Air Max 90",
    type: "Men's Shoes",
    price: "£144.99",
    picture:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d0370114-298a-474f-b4e3-4126943e1d30/AIR+MAX+90.png",
    promotion: true,
    bestseller: true,
  },
  {
    id: 10,
    name: "Nike Air Force 1 '07",
    type: "Men's Shoes",
    price: "£109.99",
    picture:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/350e7f3a-979a-402b-9396-a8a998dd76ab/AIR+FORCE+1+%2707.png",
    promotion: false,
    bestseller: true,
  },
  {
    id: 11,
    name: "Nike Dunk Low",
    type: "Men's Shoes",
    price: "£119.99",
    picture:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/338d0737-bd55-4b33-86f4-e2f92a11d3c8/NIKE+DUNK+LOW+NN.png",
    promotion: false,
    bestseller: false,
  },
  {
    id: 12,
    name: "Nike Mercurial Vapor 16 Elite Electric",
    type: "FG Low-Top Football Boot",
    price: "£254.99",
    picture:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/69669444-60a6-44c4-8944-a076f01f8e0d/ZM+VAPOR+16+ELITE+FG+OLY.png",
    promotion: false,
    bestseller: false,
  },
];

const searchBar = document.getElementById("search-bar");
const shoesContainer = document.getElementById("shoes-container");

const renderHomepageShoes = (shoes) => {
  shoesContainer.innerHTML = "";
  shoes.forEach((shoe) => {
    const shoeCard = document.createElement("div");
    shoeCard.classList.add("product-card");

    shoeCard.innerHTML = `
  <img 
    src="${shoe.picture}" 
    alt="${shoe.name}"
  />
  <div class="product-content">
    <p class="product-title">${shoe.name}</p>
    <p class="product-subtitle">${shoe.type}</p>
    <p class="product-price">${shoe.price}</p>
  </div>
  `;

    shoesContainer.appendChild(shoeCard);
  });
};

const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const getRandomShoes = (shoes, count) => {
  const shuffledShoes = shuffleArray([...shoes]);
  return shuffledShoes.slice(0, count);
};

document.addEventListener("DOMContentLoaded", () => {
  renderHomepageShoes(getRandomShoes(shoesData,6));
});

const handleSearch = () => {
  const query = searchBar.value;
  if (query) {
    window.location.href = `product.html?search=${encodeURIComponent(query)}`;
  }
}

const handleExplore = () => {
  window.location.href = `product.html`
}
