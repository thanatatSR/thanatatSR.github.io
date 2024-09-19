

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
  } else {
    cartButton.classList.remove("icon--active");
    cartCount.classList.remove("count--active");
  }
};

updateFavButtonState();
updateCartButtonState();