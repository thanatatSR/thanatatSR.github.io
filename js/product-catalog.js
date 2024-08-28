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
const selectorsContainer = document.getElementById("selectors-container");
const minPriceInput = document.getElementById("from-slider");
const maxPriceInput = document.getElementById("to-slider");
const minPriceDisplay = document.getElementById("from-input")
const maxPriceDisplay = document.getElementById("to-input")

const MIN_PRICE = 79;
const MAX_PRICE = 295;

const renderShoes = (shoes) => {
  shoesContainer.innerHTML = "";
  shoes.forEach((shoe) => {
    const hyperlink = document.createElement("a");
    hyperlink.href = `product.html?id=${shoe.id + '01'}`
    hyperlink.setAttribute('aria-label', `${shoe.name}`);

    const shoeCard = document.createElement("div");
    shoeCard.classList.add("product-card");
    if (shoe.promotion) {
      shoeCard.classList.add("promotion");
    }
    if (shoe.bestseller) {
      shoeCard.classList.add("bestseller");
    }

    shoeCard.innerHTML = `
  <img 
    src="${shoe.picture}" 
    alt="${shoe.name}"
  />
  <div class="product-content">
    <p class="hidden">Bestseller!</p>
    <p class="product-title">${shoe.name}</p>
    <p class="product-subtitle">${shoe.type}</p>
    <p class="product-price">${shoe.price}</p>
    <p class="hidden">Get 20 % discount Code: EXTRA20</p>
  </div>
  `;

    hyperlink.appendChild(shoeCard)
    shoesContainer.appendChild(hyperlink);
  });
};

const handleShoeTypeFilter = () => {
  const typesCheckboxs = document.querySelectorAll(
    "input[name='type']:checked"
  );
  const selectedTypes = Array.from(typesCheckboxs).map(
    (checkbox) => checkbox.value
  );

  const currentParams = new URLSearchParams(window.location.search);

  if (selectedTypes.length > 0) {
    currentParams.set("types", selectedTypes.join(","));
  } else {
    currentParams.delete("types");
  }

  const newURL = `product-catalog.html?${currentParams.toString()}`;
  window.location.href = newURL;
};

const handleURLParams = () => {
  const params = new URLSearchParams(window.location.search);
  let filteredShoes = [...shoesData];
  if (params.get("search")) {
    openDetails("filter-panel-body__collection");
    const query = params.get("search").toLowerCase().split(" ");
    filteredShoes = filteredShoes.filter((shoe) => {
      const shoeName = shoe.name.toLowerCase();
      return query.every((word) => shoeName.includes(word));
    });
    localStorage.setItem("selectedLink", params.get("search"));
  } else {
    filteredShoes.sort((a, b) => {
      if (a.bestseller && b.bestseller) {
        if (a.promotion && !b.promotion) return -1;
        if (!a.promotion && b.promotion) return 1;
        return 0;
      }
      if (a.bestseller && !b.bestseller) return -1;
      if (!a.bestseller && b.bestseller) return 1;
      return 0;
    });
    localStorage.setItem("selectedLink", "All");
  }

  if (params.get("sort")) {
    const sortQuery = params.get("sort");
    switch (sortQuery) {
      case "best-sellers":
        filteredShoes.sort((a, b) => {
          if (a.bestseller && b.bestseller) {
            if (a.promotion && !b.promotion) return -1;
            if (!a.promotion && b.promotion) return 1;
            return 0;
          }
          if (a.bestseller && !b.bestseller) return -1;
          if (!a.bestseller && b.bestseller) return 1;
          return 0;
        });
        break;
      case "newest-to-oldest":
        filteredShoes.sort((a, b) => b.id - a.id);
        break;
      case "price-low-to-high":
        filteredShoes.sort(
          (a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
        );
        break;
      case "price-high-to-low":
        filteredShoes.sort(
          (a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1))
        );
        break;
    }
  }

  if (params.get("types")) {
    openDetails("filter-panel-body__product-type");
    const types = params.get("types").toLowerCase().split(",");
    filteredShoes = filteredShoes.filter((shoe) => {
      return types.some((type) => {
        const normalizeString = (str) =>
          str.toLowerCase().replace(/'/g, "").replace(/s$/, "").trim();
        const normalizedShoeType = normalizeString(shoe.type);
        const normalizedFilterType = normalizeString(type);

        if (normalizedFilterType === "unisex") {
          const isExactMatch = shoe.type.toLowerCase() === "shoes";
          return isExactMatch;
        }
        if (normalizedFilterType === "running") {
          const isRoadRacing = normalizedShoeType.includes("racing");
          return isRoadRacing;
        }

        const typeMatch = normalizedShoeType.includes(normalizedFilterType);
        return typeMatch;
      });
    });
  }

  const minPrice = params.get("price_min");
  const maxPrice = params.get("price_max");

  if (minPrice || maxPrice) {
    openDetails("filter-panel-body__price");
    filteredShoes = filteredShoes.filter((shoe) => {
      const price = parseFloat(shoe.price.replace("£", ""));
      if (minPrice && maxPrice) {
        minPriceInput.value = minPrice;
        minPriceDisplay.textContent = `£${minPrice}`;
        maxPriceInput.value = maxPrice;
        maxPriceDisplay.textContent = `£${maxPrice}`;
        fillSlider(fromSlider, toSlider, "#767677", "#000000", toSlider);
        return price >= parseFloat(minPrice) && price <= parseFloat(maxPrice);
      } else if (minPrice) {
        minPriceInput.value = minPrice;
        minPriceDisplay.textContent = `£${minPrice}`;
        fillSlider(fromSlider, toSlider, "#767677", "#000000", toSlider);
        return price >= parseFloat(minPrice);
      } else if (maxPrice) {
        maxPriceInput.value = maxPrice;
        maxPriceDisplay.textContent = `£${maxPrice}`;
        fillSlider(fromSlider, toSlider, "#767677", "#000000", toSlider);
        return price <= parseFloat(maxPrice);
      }
      return true;
    });
  }

  renderShoes(filteredShoes);
};

const handleSearch = () => {
  const query = searchBar.value.trim();
  const currentParams = new URLSearchParams(window.location.search);

  if (query) {
    currentParams.set("search", query);
  } else {
    currentParams.delete("search");
  }

  const newURL = `product-catalog.html?${currentParams.toString()}`;
  window.location.href = newURL;
};

const handleSearchByCollections = (query) => {
  if (query) {
    const currentParams = new URLSearchParams(window.location.search);
    currentParams.set("search", query);
    const newURL = `product-catalog.html?${currentParams.toString()}`;
    window.location.href = newURL;
  }
};

const handleSortProduct = (query) => {
  const currentParams = new URLSearchParams(window.location.search);
  currentParams.set("sort", query);

  const newURL = `product-catalog.html?${currentParams.toString()}`;
  window.location.href = newURL;
};

const handlePriceFilter = () => {
  const minPrice = minPriceInput.value;
  const maxPrice = maxPriceInput.value;
  const currentParams = new URLSearchParams(window.location.search);

  if (minPrice !== MIN_PRICE.toString()) {
    currentParams.set("price_min", minPrice);
  } else {
    currentParams.delete("price_min");
  }

  if (maxPrice !== MAX_PRICE.toString()) {
    currentParams.set("price_max", maxPrice);
  } else {
    currentParams.delete("price_max");
  }

  const newURL = `product-catalog.html?${currentParams.toString()}`;
  history.pushState({}, "", newURL);
};

const handleNavigate = (clickedElement) => {
  const links = document.querySelectorAll(".selector-link");
  links.forEach((link) => link.classList.remove("selected"));
  clickedElement.classList.add("selected");

  const selectedText = clickedElement.textContent.trim();
  localStorage.setItem("selectedLink", selectedText);

  if (selectedText === "All") {
    history.pushState({}, "", window.location.pathname);
    renderShoes(shoesData);
  } else {
    window.location.href = `product-catalog.html?search=${encodeURIComponent(
      selectedText
    )}`;
  }
};

const loadSelectedLink = () => {
  const selectedText = localStorage.getItem("selectedLink");
  const links = document.querySelectorAll(".selector-link");
  if (selectedText) {
    links.forEach((link) => {
      if (link.textContent.trim() === selectedText) {
        link.classList.add("selected");
      } else {
        link.classList.remove("selected");
      }
    });
  } else {
    links[0].classList.add("selected");
  }
};

const handleOpenFilterPanel = () => {
  const filterPanel = document.getElementById("filter-panel");
  filterPanel.classList.add("filter-panel-active");
};

const handleCloseFilterPanel = () => {
  const filterPanel = document.getElementById("filter-panel");
  filterPanel.classList.remove("filter-panel-active");
};

const updateCheckboxesFromURL = () => {
  const params = new URLSearchParams(window.location.search);
  const types = params.get("types");
  if (types) {
    const typeArray = types.split(",");
    typeArray.forEach((type) => {
      const decodedType = decodeURIComponent(type);
      const checkbox = document.querySelector(
        `input[name="type"][value="${decodedType}"]`
      );
      if (checkbox) {
        checkbox.checked = true;
      }
    });
  }
};

const openDetails = (detailsId) => {
  const details = document.getElementById(detailsId);
  if (details) {
    details.open = true;
  }
};

const resetCheckboxFilter = () => {
  document
    .querySelectorAll('input[type="checkbox"][name="type"]')
    .forEach((checkbox) => {
      checkbox.checked = false;
    });
};

const clearAllFilters = () => {
  const currentParams = new URLSearchParams(window.location.search);
  const filterParams = ["types", "search", "sort", "price_min", "price_max"];
  filterParams.forEach((param) => currentParams.delete(param));
  minPriceInput.value = MIN_PRICE;
  minPriceDisplay.textContent = `£${MIN_PRICE}`;
  maxPriceInput.value = MAX_PRICE;
  maxPriceDisplay.textContent = `£${MAX_PRICE}`;

  const newURL = `product-catalog.html${
    currentParams.toString() ? "?" + currentParams.toString() : ""
  }`;
  history.pushState({}, "", newURL);
  handleURLParams();
  resetCheckboxFilter();
};

document.addEventListener("DOMContentLoaded", () => {
  handleURLParams();
  loadSelectedLink();
  updateCheckboxesFromURL();
  openDetails("filter-panel-body__sorting");
});

searchBar.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleSearch();
  }
});

const fromSlider = document.querySelector("#from-slider");
const toSlider = document.querySelector("#to-slider");
const fromInput = document.querySelector("#from-input");
const toInput = document.querySelector("#to-input");

const getParsed = (currentFrom, currentTo) => {
  const from = parseInt(currentFrom.value);
  const to = parseInt(currentTo.value);
  return [from, to];
};

const fillSlider = (from, to, sliderColor, rangeColor, controlSlider) => {
  const rangeDistance = to.max - to.min;
  const fromPosition = from.value - to.min;
  const toPosition = to.value - to.min;
  controlSlider.style.background = `linear-gradient(
    to right, 
    ${sliderColor} 0%,
    ${sliderColor} ${(fromPosition / rangeDistance) * 100}%,
    ${rangeColor} ${(fromPosition / rangeDistance) * 100}%,
    ${rangeColor} ${(toPosition / rangeDistance) * 100}%, 
    ${sliderColor} ${(toPosition / rangeDistance) * 100}%, 
    ${sliderColor} 100%)`;
};

const setToggleAccessible = (currentTarget) => {
  const toSlider = document.querySelector("#to-slider");
  if (Number(currentTarget.value) <= 0) {
    toSlider.style.zIndex = 2;
  } else {
    toSlider.style.zIndex = 0;
  }
};

const controlFromInput = (fromSlider, fromInput, toInput, controlSlider) => {
  const [from, to] = getParsed(fromInput, toInput);
  fillSlider(fromInput, toInput, "#767677", "#000000", controlSlider);
  if (from > to) {
    fromSlider.value = to;
    fromInput.textContent = "£" + to;
  } else {
    fromSlider.value = from;
  }
};

const controlToInput = (toSlider, fromInput, toInput, controlSlider) => {
  const [from, to] = getParsed(fromInput, toInput);
  fillSlider(fromInput, toInput, "#767677", "#000000", controlSlider);
  setToggleAccessible(toInput);
  if (from <= 79.99) {
    toSlider.value = to;
    toInput.textContent = "£" + to;
  } else {
    toInput.textContent = "£" + from;
  }
};

const controlFromSlider = (fromSlider, toSlider, fromInput) => {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, "#767677", "#000000", toSlider);
  if (from > to) {
    fromSlider.value = to;
    fromInput.textContent = "£" + to;
  } else {
    fromInput.textContent = "£" + from;
  }
};

const controlToSlider = (fromSlider, toSlider, toInput) => {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, "#767677", "#000000", toSlider);
  setToggleAccessible(toSlider);
  if (from <= to) {
    toSlider.value = to;
    toInput.textContent = "£" + to;
  } else {
    toInput.textContent = "£" + from;
    toSlider.value = from;
  }
};

fillSlider(fromSlider, toSlider, "#767677", "#000000", toSlider);
setToggleAccessible(toSlider);

fromInput.oninput = () =>
  controlFromInput(fromSlider, fromInput, toInput, toSlider);
toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);
fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);

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

updateFavButtonState();
updateCartButtonState();
