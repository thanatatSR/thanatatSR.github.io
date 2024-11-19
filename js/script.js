const shoesData = [
  {
    id: "01",
    name: "Nike Air Force 1 '07",
    type: "Men's Shoes",
    price: "£119.99",
    picture:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1d455eb-8447-4b51-a2b3-61db8b7a78fe/NIKE+AIR+FORCE+1+%2707.png",
    promotion: true,
    bestseller: true,
    color: "white",
  },
  {
    id: "02",
    name: "Nike Air Max 95",
    type: "Shoes",
    price: "£174.99",
    picture:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d4c31751-aa66-45da-a4c3-e10308e1ce6d/NIKE+AIR+MAX+95.png",
    promotion: false,
    bestseller: false,
    color: "Iron Gray",
  },
  {
    id: "03",
    name: "Nike Alphafly 3 Electric",
    type: "Men's Road Racing Shoes",
    price: "£294.99",
    picture:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5735da65-f28c-44b1-a281-868618c1c7b0/AIR+ZOOM+ALPHAFLY+NEXT%25+3+OLY.png",
    promotion: false,
    bestseller: false,
    color: "Multi-Colour",
  },
  {
    id: "04",
    name: "Nike Air Max Alpha Trainer 5",
    type: "Men's Workout Shoes",
    price: "£79.99",
    picture:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c95a8a1b-8e71-487d-9407-a9b181fc7caa/M+NIKE+AIR+MAX+ALPHA+TRAINER+5.png",
    promotion: false,
    bestseller: true,
    color: "Black",
  },
  {
    id: "05",
    name: "Nike Air Presto",
    type: "Men's Shoes",
    price: "£129.99",
    picture:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0e293b0d-0ce3-41fa-9898-9ca3cb7da3ea/NIKE+AIR+PRESTO.png",
    promotion: true,
    bestseller: true,
    color: "Black",
  },
  {
    id: "06",
    name: "Nike Dunk Low Retro",
    type: "Men's Shoes",
    price: "£109.99",
    picture:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0a25e340-15d3-4d47-a8af-0586e8ab668b/NIKE+DUNK+LOW+RETRO.png",
    promotion: false,
    bestseller: true,
    color: "Team Green",
  },
  {
    id: "07",
    name: "Nike Dunk Low Retro",
    type: "Men's Shoes",
    price: "£109.99",
    picture:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7ff6bde9-caad-444e-bd21-ee49b126fd85/NIKE+DUNK+LOW+RETRO.png",
    promotion: false,
    bestseller: true,
    color: "Dragon Red",
  },
  {
    id: "08",
    name: "Nike Air Max 90",
    type: "Men's Shoes",
    price: "£134.99",
    picture:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/wzitsrb4oucx9jukxsmc/AIR+MAX+90.png",
    promotion: false,
    bestseller: true,
    color: "Iron Grey",
  },
  {
    id: "09",
    name: "Nike Air Max 90",
    type: "Men's Shoes",
    price: "£144.99",
    picture:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d0370114-298a-474f-b4e3-4126943e1d30/AIR+MAX+90.png",
    promotion: true,
    bestseller: true,
    color: "Glacier Blue",
  },
  {
    id: "10",
    name: "Nike Air Force 1 '07",
    type: "Men's Shoes",
    price: "£109.99",
    picture:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/350e7f3a-979a-402b-9396-a8a998dd76ab/AIR+FORCE+1+%2707.png",
    promotion: false,
    bestseller: true,
    color: "White",
  },
  {
    id: "11",
    name: "Nike Dunk Low",
    type: "Men's Shoes",
    price: "£119.99",
    picture:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/338d0737-bd55-4b33-86f4-e2f92a11d3c8/NIKE+DUNK+LOW+NN.png",
    promotion: false,
    bestseller: false,
    color: "Baroque Brown",
  },
  {
    id: "12",
    name: "Nike Mercurial Vapor 16 Elite Electric",
    type: "FG Low-Top Football Boot",
    price: "£254.99",
    picture:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/69669444-60a6-44c4-8944-a076f01f8e0d/ZM+VAPOR+16+ELITE+FG+OLY.png",
    promotion: false,
    bestseller: false,
    color: "Multi-Colour",
  },
];

const searchBar = document.getElementById("search-bar");
const shoesContainer = document.getElementById("shoes-container");

const renderHomepageShoes = (shoes) => {
  shoesContainer.innerHTML = "";
  shoes.forEach((shoe) => {
    const hyperlink = document.createElement("a");
    hyperlink.href = `product.html?id=${shoe.id + "01"}`;
    hyperlink.setAttribute("aria-label", `${shoe.name}`);

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

    hyperlink.appendChild(shoeCard);
    shoesContainer.appendChild(hyperlink);
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
  renderHomepageShoes(getRandomShoes(shoesData, 6));
});

const handleSearch = () => {
  const query = searchBar.value;
  if (query) {
    window.location.href = `product-catalog.html?search=${encodeURIComponent(
      query
    )}`;
  }
};

searchBar.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleSearch();
  }
});

const handleExplore = () => {
  window.location.href = `product-catalog.html`;
};

const favButton = document.getElementById("favButton");
const favButtonMobile = document.getElementById("favButtonMobile");
const favCount = document.getElementById("favCount");
const favCountMobile = document.getElementById("favCountMobile");
const favoriteForm = document.getElementById("favoriteForm");
const productId = new URLSearchParams(window.location.search).get("id");

const getFavorites = () => {
  return JSON.parse(localStorage.getItem("favorites")) || [];
};

const updateFavButtonState = () => {
  const favorites = getFavorites();
  favCount.textContent = favorites.length;
  favCountMobile.textContent = favorites.length;
  if (favorites.length > 0) {
    favButton.classList.add("icon--active");
    favButtonMobile.classList.add("icon--active");
    favCount.classList.add("count--active");
    favCountMobile.classList.add("count--active");
  }
};

const cartButton = document.getElementById("cartButton");
const addToCartButton = document.getElementById("button--add");
const cartCount = document.getElementById("cartCount");

const getCarts = () => {
  return JSON.parse(localStorage.getItem("carts")) || [];
};

const updateCartButtonState = () => {
  const carts = getCarts();
  cartCount.textContent = carts.length;
  if (carts.length > 0) {
    cartButton.classList.add("icon--active");
    cartCount.classList.add("count--active");
  }
};

const handleToggleHamburgerMenu = () => {
  const hamburgerMenuPanel = document.getElementById("hamburger-menu-panel");
  hamburgerMenuPanel.classList.toggle("hamburger-menu-panel-active");
}

const handleSearchByCollections = (query) => {
  if (query) {
    const currentParams = new URLSearchParams(window.location.search);
    currentParams.set("search", query);
    const newURL = `product-catalog.html?${currentParams.toString()}`;
    window.location.href = newURL;
  }
};

updateFavButtonState();
updateCartButtonState();
