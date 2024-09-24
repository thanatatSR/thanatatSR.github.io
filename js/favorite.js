import shoesData from "../data/shoes-data.js";

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

const createFavoriteItem = () => {
  const favorites = getFavorites();
  const favoriteContainerHeader = document.getElementById(
    "favorite-container-header"
  );
  const favoriteContainerContent = document.getElementById(
    "favorite-container-content"
  );
  const container = document.getElementById("container");

  if (!favorites || favorites.length <= 0) {
    favoriteContainerHeader.innerHTML = `<h4>My Favorite</h4>
          <p>0 ITEM</p>
          <p>
            You haven't saved any items to your wishlist yet. Start shopping and
            add your favorite items to your wishlist.
          </p>`;
  }
  favorites.forEach((favorite) => {
    const productId = favorite.productId.substring(0, 2);
    const colorVariantIndex = favorite.productId.substring(2);
    let shoe = shoesData.find((sh) => sh.id === productId);
    let colorVariant = shoe.colorVariants.find(
      (cv) => cv.index === colorVariantIndex
    );
    if (favorites.length > 4) {
      container.style.height = "auto";
    }
    favoriteContainerHeader.innerHTML = `<h4>My Favorite</h4>
          <p>${favorites.length} ${
      favorites.length > 1 ? "ITEMS" : "ITEM"
    }</p>`;
    const favoriteContent = document.createElement("a");
    favoriteContent.href = `product.html?id=${favorite.productId}`;
    favoriteContent.ariaLabel = `${shoe.name}`;
    favoriteContent.innerHTML = `<div class="product-card promotion bestseller">
              <img
                src="${colorVariant.previewImages[0]}"
                alt="${shoe.name}"
              />
              <div class="product-content">
                <p class="product-title">${shoe.name}</p>
                <p class="product-price">£119.99</p>
              </div>
            </div>`;
    favoriteContainerContent.appendChild(favoriteContent);
  });
};

updateFavButtonState();
updateCartButtonState();
createFavoriteItem();
