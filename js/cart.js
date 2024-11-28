import shoesData from "../data/shoes-data.js";

const cartContainer = document.getElementById("cart-item-group");
const totalParagraph = document.getElementById(
  "container__row__cart-info__header--total"
);
const totalPayment = document.getElementById(
  "container__row__payment__checkout-panel"
);
let cartsList = [];
let cartsPrice = [];

const favButton = document.getElementById("favButton");
const favButtonMobile = document.getElementById("favButtonMobile");
const favCount = document.getElementById("favCount");
const favCountMobile = document.getElementById("favCountMobile");
const checkoutButton = document.getElementById("button-checkout");

const cartProductPriceSum = () => {
  if (cartsPrice.length <= 1) {
    return cartsPrice[0];
  } else {
    let sum = 0;
    for (let i = 0; i < cartsPrice.length; i++) {
      sum = sum + parseFloat(cartsPrice[i]);
    }
    return sum.toFixed(2);
  }
};

const checkCart = (cart) => {
  if (cart.length <= 0 || !cart) {
    const paymentRow = document.getElementById("container__row__payment");
    paymentRow.innerHTML = "";
    const cartInfoRow = document.getElementById("container__row__cart-info");
    cartInfoRow.innerHTML = `<div class="no-item-in-cart">
            <h3>Your cart is empty</h3>
            <p>
              Once you add something to your bag - it will appear here.
              Ready to get started?
            </p>
            <a href="index.html">
              <button class="button button-get-started" id="button-get-started">
                <span>Get Started</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <polyline points="14 6 22 12 14 18" />
                  </svg>
                </span>
              </button>
            </a>
          </div>`;
    checkoutButton.classList.add("button-disabled");
    checkoutButton.disabled = true;
    const container = document.getElementById("container");
    container.style.height = `calc(100vh - 83px - 78px - 30px - 110px)`;
  }
};

const createCartItem = () => {
  const carts = getCarts();
  checkCart(carts);

  if (carts && carts.length > 0) {
    checkoutButton.onclick = checkout;
    carts.forEach((cart) => {
      const productId = cart.productId.substring(0, 2);
      const colorVariantIndex = cart.productId.substring(2);
      let shoe = shoesData.find((sh) => sh.id === productId);
      let colorVariant = shoe.colorVariants.find(
        (cv) => cv.index === colorVariantIndex
      );

      cartsList.push(shoe.name);
      cartsPrice.push(shoe.price);

      const item = document.createElement("div");
      item.className = "cart-item-group__wrapper";
      item.id = `item-${cart.productId}`;
      item.innerHTML = `<div class="image-container">
                    <a href="product.html?id=${shoe.id + colorVariant.index}">
                      <img
                        src=${colorVariant.images[0]}
                        alt="${shoe.name} ${colorVariant.colorName}"
                      />
                    </a>
                  </div>
                  <div class="item-details__wrapper">
                    <div class="item-details__wrapper__row">
                      <div class="item-details__info">
                        <div class="item-details__info__title">
                          <a href="product.html?id=${cart.productId}">
                            <p>${shoe.name}</p>
                          </a>
                          <p id="item-price-${cart.productId}">£${
        shoe.price
      }</p>
                        </div>
                        <div class="item-details__info__price">
                          <p>${colorVariant.detail[1]}</p>
                        </div>
                        <div class="item-details__info__size">
                          <p>Size: ${cart.size}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item-detail__button-group">
                    <button class="button--remove" id="${cart.productId}">
                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                      >
                        <line
                          x1="20"
                          y1="20"
                          x2="80"
                          y2="80"
                          stroke="black"
                          stroke-width="8"
                        />
                        <line
                          x1="80"
                          y1="20"
                          x2="20"
                          y2="80"
                          stroke="black"
                          stroke-width="8"
                        />
                      </svg>
                    </button>
                  </div>`;
      cartContainer.appendChild(item);
    });

    const totalPrice = cartProductPriceSum();
    totalParagraph.innerHTML = `TOTAL (${cartsPrice.length} ${
      cartsPrice.length > 1 ? "items" : "item"
    }) <span class="strong">£${totalPrice}</span>`;
    totalPayment.innerHTML = `<h5>Order Summary</h5>
            <div>
              <p id="checkout-items-amount">${cartsPrice.length} ${
      cartsPrice.length > 1 ? "items" : "item"
    }</p>
              <p id="checkout-items-price">£${totalPrice}</p>
            </div>
            <div>
              <p>Delivery</p>
              <p>Free</p>
            </div>
            <div class="container__row__payment__checkout-panel__summary">
              <p>Total</p>
              <p id="checkout-items-total-price">£${totalPrice}</p>
            </div>`;
  }
};

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

const removeProductFromCart = (id) => {
  const elementToRemove = document.getElementById(`item-${id}`);
  elementToRemove.style.display = "none";
  elementToRemove.remove;
  const checkoutItemsAmount = document.getElementById("checkout-items-amount");
  const checkoutItemsPrice = document.getElementById("checkout-items-price");
  const checkoutItemsTotalPrice = document.getElementById(
    "checkout-items-total-price"
  );
  const removePrice = document
    .getElementById(`item-price-${id}`)
    .innerText.slice(1);
  const oldCheckoutAmount = checkoutItemsAmount.innerText.split(" ")[0];
  const oldCheckoutPrice = checkoutItemsPrice.innerText.slice(1);

  checkoutItemsAmount.innerHTML = `${parseInt(oldCheckoutAmount) - 1} ${
    parseInt(oldCheckoutAmount) - 1 > 1 ? "items" : "item"
  }`;
  checkoutItemsPrice.innerHTML = `£${(
    parseFloat(oldCheckoutPrice) - parseFloat(removePrice)
  ).toFixed(2)}`;
  checkoutItemsTotalPrice.innerHTML = `£${(
    parseFloat(oldCheckoutPrice) - parseFloat(removePrice)
  ).toFixed(2)}`;

  const cartProductList = getCarts();

  const updateCartProducts = cartProductList.filter(
    (product) => !id.includes(product.productId)
  );
  localStorage.setItem("carts", JSON.stringify(updateCartProducts));

  updateCartButtonState();
  checkCart(getCarts());
};

const hamburgerMenu = document.getElementById("hamburger-menu");
const closeHamburgerButton = document.getElementById(
  "hamburger-menu-panel-header__close"
);

const addEventToButton = () => {
  const collections = document.querySelectorAll(".collection");
  collections.forEach((collectionElement) => {
    const listItems = collectionElement.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
      const listItem = listItems[i];
      const textContent = listItem.textContent.trim();
      listItem.onclick = function () {
        handleSearchByCollections(textContent);
      };
    }
  });

  hamburgerMenu.onclick = handleToggleHamburgerMenu;
  closeHamburgerButton.onclick = handleToggleHamburgerMenu;

  const cartList = getCarts();
  cartList.forEach((product) => {
    const removeButton = document.getElementById(`${product.productId}`);
    removeButton.onclick = () => removeProductFromCart(product.productId);
  });
};

const checkout = () => {
  const favProductList = getFavorites();
  const cartProductList = getCarts();
  const duplicateProducts = favProductList.filter((favProduct) =>
    cartProductList.some(
      (cartProduct) => cartProduct.productId === favProduct.productId
    )
  );
  const duplicateProductIds = duplicateProducts.map(
    (product) => product.productId
  );
  const updateFavProducts = favProductList.filter(
    (product) => !duplicateProductIds.includes(product.productId)
  );

  localStorage.setItem("favorites", JSON.stringify(updateFavProducts));
  localStorage.removeItem("carts");

  const message = `
Checkout Successful!
Thank you for your purchase for

  ${cartsList.join("\n  ")}

We appreciate your business.
If you have any questions, please contact our customer support.

Happy shopping!
`;

  updateFavButtonState();
  updateCartButtonState();
  alert(message);
  window.location.href = "/";
};

const handleToggleHamburgerMenu = () => {
  const hamburgerMenuPanel = document.getElementById("hamburger-menu-panel");
  hamburgerMenuPanel.classList.toggle("hamburger-menu-panel-active");
};

const handleSearchByCollections = (query) => {
  if (query) {
    const currentParams = new URLSearchParams(window.location.search);
    currentParams.set("search", query);
    const newURL = `product-catalog.html?${currentParams.toString()}`;
    window.location.href = newURL;
  }
};

createCartItem();
updateFavButtonState();
updateCartButtonState();
addEventToButton();
