import shoesData from "../data/shoes-data.js";

let fadeTopRemoved = false;
let fadeBottomRemoved = false;
let currentIndex = 0;

function onScroll() {
  const container = document.getElementById("img-container__list");
  const fadeContainer = document.getElementById("img-container__fade");
  let bottomElement = container.querySelector(".img-container__fade--bottom");

  const scrollPosition = container.scrollTop;
  const containerHeight = container.clientHeight;
  const scrollHeight = container.scrollHeight;

  const bottomValue = -1 * scrollPosition + "px";
  if (bottomElement) {
    bottomElement.style.bottom = bottomValue;
  }

  if (scrollPosition > 0 && !fadeTopRemoved) {
    const topElement = document.createElement("div");
    topElement.className = "img-container__fade--top";
    fadeContainer.appendChild(topElement);
    fadeTopRemoved = true;
  } else if (scrollPosition === 0 && fadeTopRemoved) {
    const topElement = fadeContainer.querySelector(".img-container__fade--top");
    if (topElement) {
      topElement.remove();
      fadeTopRemoved = false;
    }
  }

  if (scrollPosition + containerHeight >= scrollHeight) {
    if (bottomElement && !fadeBottomRemoved) {
      bottomElement.remove();
      fadeBottomRemoved = true;
    }
  } else {
    if (fadeBottomRemoved) {
      bottomElement = document.createElement("div");
      bottomElement.className = "img-container__fade--bottom";
      fadeContainer.appendChild(bottomElement);
      fadeBottomRemoved = false;
    }
  }
}

function updateSelection(index) {
  const listImages = Array.from(
    document.querySelectorAll(".img-container__list img")
  );
  const selectedImages = Array.from(
    document.querySelectorAll(".img-container__selected img")
  );
  const selectedVideos = Array.from(
    document.querySelectorAll(".img-container__selected video")
  );

  if (selectedVideos.length > 0) {
    const lastListImage = listImages[listImages.length - 1];
    lastListImage.classList.remove(`image-${listImages.length}`);
    lastListImage.classList.add(`video-1`);
    selectedImages.push(...selectedVideos);
  }

  [...listImages, ...selectedImages].forEach((img) =>
    img.classList.remove("selected")
  );

  const imgClass = listImages[index].classList[0];
  document
    .querySelectorAll(
      `.img-container__list .${imgClass}, .img-container__selected .${imgClass}`
    )
    .forEach((img) => img.classList.add("selected"));
}

function selectImage(img) {
  const listImages = Array.from(
    document.querySelectorAll(".img-container__list img")
  );
  currentIndex = listImages.indexOf(img);
  updateSelection(currentIndex);
}

function prevImage() {
  const listImages = document.querySelectorAll(".img-container__list img");
  currentIndex = currentIndex > 0 ? currentIndex - 1 : listImages.length - 1;
  updateSelection(currentIndex);
}

function nextImage() {
  const listImages = document.querySelectorAll(".img-container__list img");
  currentIndex = currentIndex < listImages.length - 1 ? currentIndex + 1 : 0;
  updateSelection(currentIndex);
}

const createElement = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const fullId = urlParams.get("id");

  const imgContainer = document.getElementById("img-container__list");
  const imgSelected = document.getElementById("img-container__selected");
  const containerHeader = document.getElementById(
    "container__product-info__detail__header"
  );
  const colorwayFieldset = document.getElementById(
    "container__product-info__detail__colorway__images"
  );
  const sizeChartList = document.getElementById(
    "container__product-info__detail__form__size-chart__list"
  );
  const productDescription = document.getElementById(
    "container__product-info__detail__description__preview"
  );
  const mobileHeader = document.getElementById("mobile__header");
  const warning = document.createElement("div");

  imgContainer.innerHTML = "";
  imgSelected.innerHTML = "";

  if (!fullId || fullId.length !== 4) {
    console.error("Invalid ID in URL");
    return;
  }

  const productId = fullId.substring(0, 2);
  const colorVariantIndex = fullId.substring(2);

  let shoe = shoesData.find((sh) => sh.id === productId);
  if (!shoe) {
    shoe = shoesData.find((sh) => sh.id === "00");
    warning.innerHTML = `<h1 class="warning">404: Croiss-can't find that shoe. But hey, at least you discovered something butter!</h1>`;
  }

  document.title = `${shoe.name} | Foot Finesse`;

  let colorVariant = shoe.colorVariants.find(
    (cv) => cv.index === colorVariantIndex
  );
  if (!colorVariant) {
    shoe = shoesData.find((sh) => sh.id === "00");
    colorVariant = shoe.colorVariants.find((cv) => cv.index === "00");
    warning.innerHTML = `<h1 class="warning">404: Croiss-can't find that shoe. But hey, at least you discovered something butter!</h1>`;
  }

  if (colorVariant.bestseller) {
    const heroBadge = document.createElement("div");
    heroBadge.className = "hero-badge";
    heroBadge.innerHTML = `<svg height="20px" width="20px" fill="#111" viewBox="0 0 25 32">
              <path
                d="M12.48 4l-3.04 8.96-9.44.32 7.6 5.6L4.96 28l7.68-5.44 7.84 5.28-2.8-9.04 7.52-5.76-9.52-.08z"
              ></path>
            </svg>
            <div class="hero-badge__title">Highly Rated</div>`;
    imgSelected.appendChild(heroBadge);
  }

  colorVariant.images.forEach((imgSrc, index) => {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = shoe.name;
    img.className = `image-${index + 1}${index === 0 ? " selected" : ""}`;
    img.onmouseover = function () {
      selectImage(this);
    };
    imgContainer.appendChild(img);
  });

  colorVariant.previewImages.forEach((imgSrc, index) => {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = shoe.name;
    img.className = `image-${index + 1}${index === 0 ? " selected" : ""}`;
    imgSelected.appendChild(img);
  });

  if (colorVariant.videos) {
    colorVariant.videos.forEach((vdo, index) => {
      const video = document.createElement("video");
      video.src = vdo;
      video.className = `video-${index + 1}`;
      video.autoplay = true;
      video.loop = true;
      imgSelected.appendChild(video);
    });
  }

  if (colorVariant.outOfStock) {
    const addToCartButton = document.getElementById("button--add");
    addToCartButton.classList.add("button-out-of-stock");
    addToCartButton.disabled = true;
  }

  colorVariant.sizeAvailable.forEach((size) => {
    const div = document.createElement("div");
    const input = document.createElement("input");
    input.type = "radio";
    input.id = `size-${size.size}`;
    input.name = "size-radio";
    input.value = size.size;
    input.className = "visually-hidden";

    const label = document.createElement("label");
    label.for = `size-${size.size}`;
    if (size.stock === 0) {
      label.className =
        "container__product-info__detail__form__size-chart__list__selector disabled";
    } else {
      label.className =
        "container__product-info__detail__form__size-chart__list__selector";
    }
    label.textContent = `US M ${size.size} / W ${size.size + 1.5}`;
    label.onclick = function () {
      input.checked = true;
    };

    div.appendChild(input);
    div.appendChild(label);
    sizeChartList.appendChild(div);
  });

  const fadeDiv = document.createElement("div");
  fadeDiv.className = "img-container__fade";
  fadeDiv.id = "img-container__fade";

  const fadeBottomDiv = document.createElement("div");
  fadeBottomDiv.className = "img-container__fade--bottom";
  fadeBottomDiv.innerHTML = "&nbsp;";

  fadeDiv.appendChild(fadeBottomDiv);
  imgContainer.appendChild(fadeDiv);

  imgContainer.onscroll = onScroll;

  const carouselButton = document.createElement("div");
  carouselButton.className = "carousel-button";
  const prevButton = document.createElement("button");
  prevButton.innerHTML = `<svg
                height="12px"
                width="12px"
                fill="#000"
                viewBox="0 0 185.4 300"
              >
                <path
                  d="M160.4 300c-6.4 0-12.7-2.5-17.7-7.3L0 150 142.7 7.3c9.8-9.8 25.6-9.8 35.4 0 9.8 9.8 9.8 25.6 0 35.4L70.7 150 178 257.3c9.8 9.8 9.8 25.6 0 35.4-4.9 4.8-11.3 7.3-17.6 7.3z"
                ></path>
              </svg>`;
  prevButton.onclick = prevImage;
  const nextButton = document.createElement("button");
  nextButton.innerHTML = `<svg
                height="12px"
                width="12px"
                fill="#000"
                viewBox="0 0 185.4 300"
              >
                <path
                  d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z"
                ></path>
              </svg>`;
  nextButton.onclick = nextImage;
  carouselButton.appendChild(prevButton);
  carouselButton.appendChild(nextButton);
  imgSelected.appendChild(carouselButton);

  containerHeader.innerHTML = `${warning.innerHTML}
              <h1 class="container__product-info__detail__header__title">
                ${shoe.name}
              </h1>
              <h2 class="container__product-info__detail__header__subtitle">
              ${shoe.type}
              </h2>
              <p class="container__product-info__detail__header__price">
              £${shoe.price}
              </p>
              ${
                colorVariant.promotion
                  ? `<p class="container__product-info__detail__header__promotion">
                Buy this item for £${(shoe.price - shoe.price * 0.2).toFixed(
                  2
                )} when using code
                <strong>EXTRA20.</strong> No minimum.
              </p>`
                  : ""
              }`;

  colorwayFieldset.innerHTML = `<legend>Choose your style</legend>`;
  shoe.colorVariants.forEach((cv, index) => {
    const img = document.createElement("img");
    img.src = cv.images[0];
    img.alt = `${shoe.name} in ${cv.colorName}`;
    img.className = `${
      index === parseInt(colorVariantIndex) - 1 ? "selected" : ""
    } ${cv.outOfStock ? "out-of-stock" : ""}`.trim();

    if (!cv.outOfStock) {
      const hyperlink = document.createElement("a");
      hyperlink.href = `product.html?id=${shoe.id + cv.index}`;
      hyperlink.setAttribute("aria-label", img.alt);
      hyperlink.appendChild(img);
      colorwayFieldset.appendChild(hyperlink);
    } else {
      colorwayFieldset.appendChild(img);
    }
  });

  productDescription.innerHTML = `<p>
                  ${colorVariant.detail[0]}
                </p>
                <ul>
                  <li>Colour Shown: ${colorVariant.detail[1]}</li>
                  <li>${colorVariant.detail[2]}</li>
                </ul>`;

  mobileHeader.innerHTML = `<h1 class="mobile__header__title">${shoe.name}</h1>
        <h2 class="mobile__header__subtitle">${shoe.type}</h2>
        <div class="mobile__header__detail">
          <p class="mobile__header__detail__price">£${shoe.price}</p>
          ${
            colorVariant.promotion
              ? `<p class="container__product-info__detail__header__promotion">
            Buy this item for £${(shoe.price - shoe.price * 0.8).toFixed(
              2
            )} when using code
            <strong>EXTRA20.</strong> No minimum.
          </p>`
              : ""
          }`;
};

const addFavButton = document.getElementById("button--fav");
const favButton = document.getElementById("favButton");
const favButtonMobile = document.getElementById("favButtonMobile");
const favCount = document.getElementById("favCount");
const favCountMobile = document.getElementById("favCountMobile");
const favoriteForm = document.getElementById("favoriteForm");
const productId = new URLSearchParams(window.location.search).get("id");

const getFavorites = () => {
  return JSON.parse(localStorage.getItem("favorites")) || [];
};

const saveFavorites = (fav) => {
  localStorage.setItem("favorites", JSON.stringify(fav));
};

const updateFavButtonState = () => {
  addFavButton.onclick = toggleFavorite;
  const favorites = getFavorites();
  const isFavorite = favorites.some((fav) => fav.productId === productId);
  favCount.textContent = favorites.length;
  favCountMobile.textContent = favorites.length;
  if (favorites.length > 0) {
    favButton.classList.add("icon--active");
    favButtonMobile.classList.add("icon--active");
    favCount.classList.add("count--active");
    favCountMobile.classList.add("count--active");
  }
  if (isFavorite) {
    addFavButton.classList.add("button--fav--active");
  } else {
    addFavButton.classList.remove("button--fav--active");
  }
};

const toggleFavorite = () => {
  const selectedSize = favoriteForm.querySelector(
    'input[name="size-radio"]:checked'
  );
  let favorites = getFavorites();

  const isProductFavorite = favorites.some(
    (fav) => fav.productId === productId
  );
  if (isProductFavorite) {
    favorites = favorites.filter((fav) => fav.productId !== productId);
  } else {
    if (!selectedSize) {
      alert("Please select a size before adding to favorites.");
      return;
    }
    const favoriteItem = {
      productId: productId,
      size: selectedSize.value,
    };
    favorites.push(favoriteItem);
  }

  saveFavorites(favorites);
  updateFavButtonState();
};

const cartButton = document.getElementById("cartButton");
const addToCartButton = document.getElementById("button--add");
const cartCount = document.getElementById("cartCount");

const getCarts = () => {
  return JSON.parse(localStorage.getItem("carts")) || [];
};

const saveCarts = (product) => {
  localStorage.setItem("carts", JSON.stringify(product));
};

const updateCartButtonState = () => {
  addToCartButton.onclick = addToCart;
  const carts = getCarts();
  cartCount.textContent = carts.length;
  if (carts.length > 0) {
    cartButton.classList.add("icon--active");
    cartCount.classList.add("count--active");
  }
};

const addToCart = () => {
  const selectedSize = favoriteForm.querySelector(
    'input[name="size-radio"]:checked'
  );
  const carts = getCarts();
  const existingProduct = carts.findIndex(
    (cart) => cart.productId === productId
  );
  if (existingProduct === -1) {
    if (!selectedSize) {
      alert("Please select a size before adding to favorites.");
      return;
    }
    const cartItem = {
      productId: productId,
      size: selectedSize.value,
    };
    carts.push(cartItem);
  } else {
    alert("You already have this product in cart");
    return;
  }

  saveCarts(carts);
  updateCartButtonState();
};

updateFavButtonState();
updateCartButtonState();

document.addEventListener("DOMContentLoaded", createElement);
