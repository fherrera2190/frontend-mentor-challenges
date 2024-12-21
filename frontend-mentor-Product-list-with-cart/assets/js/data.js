// variables
let data = [];
let cart = [];
const cartSection = document.querySelector(".cart");
const products = document.querySelector(".products");
const productsButtons = document.querySelectorAll(".button__add");

const noProducts = `<div class="cart-empty-product">
          <figure>
            <img src="./assets/images/illustration-empty-cart.svg" alt="" />
            <figcaption>
            <small>your added items will appear here</small>
            </figcaption>
          </figure>
        </div>`;

const buttons = (id) => {
  if (!existCart(id)) {
    return `<div class="btn_product card__button" id="button-content-${id}" >
    <button class="button__add increment"  id="increment-button-${id}">
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20">
                  <g fill="#C73B0F" clip-path="url(#a)">
                      <path
                          d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
                      <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
                  </g>
                  <defs>
                      <clipPath id="a">
                          <path fill="#fff" d="M.333 0h20v20h-20z" />
                      </clipPath>
                  </defs>
              </svg>
    Add to cart
    </button></div>`;
  }
  const product = existProductOnCart(id);
  return `<div class="btn_product card__button__quantity"id="button-content-${id}" ><button class="decrement" id="decrement-button-${id}">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
      </button>
      <p class="card__text quantityValue-${id}" >${product.quantity}</p>
      <button class="increment" id="increment-button-${id}">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
    <path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
</svg>
      </button></div>`;
};

const productElement = (image, name, category, price, id) => {
  return (
    `<div class="card">
  <div class="card__header">
    <picture>
    <source srcset="${image.desktop}" media="(min-width: 769px)">
    <source srcset="${
      image.tablet
    }" media="(max-width: 768px) and (min-width: 376px)">
    <img src="${image.mobile}" alt="product image" class="card__image ${
      existProductOnCart(id) ? "img__select" : ""
    }" id="image-${id}" />
    </picture>
    ` +
    buttons(id) +
    `</div>
  <div class="card__body">
    <p><small class="card__category">${category}</small></p>
    <h5 class="card__name">${name}</h6>
  </div>
  <div class="card__footer">
    <h5 class="card__price"><b>$${parseFloat(price).toFixed(2)}</b></h5>
  </div>
</div>`
  );
};

const productCartElement = (id) => {
  let product = existProductOnCart(id);
  if (!product) return;
  quantity = product.quantity;
  product = getProductInfo(id);
  return `<div class="product-select">
            <div class="product-detail">
              <h5 class="product-name">${product.name}</h5>
              <div class="product-total">
                <p class="product-quantity"><small class="quantityValue-${id}">${quantity}</small><small>x</small></p>
                <p class="product-price"><small>@ $${parseFloat(
                  product.price
                ).toFixed(2)}</small></p>
                <p ><small class="product-subtotal-${id}">$${parseFloat(
    quantity * product.price
  ).toFixed(2)}</small></p>
              </div>
            </div>
            <button onclick="removeFromCart(${id})" class="remove-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
            </button>
          </div>`;
};

const totalCart = () => {
  return `<div class="cart-total">
            <p><small>Order Total</small></p>
            <h4 class="total-price">$${getTotal()}</h4>
          </div>
          <div class="delivery">
            <div>
              <img src="./assets/images/icon-carbon-neutral.svg" alt="" />
            </div>
            <p>
              <small>This is a <b>carbon-neutral</b> delivery</small>
            </p>
          </div>
          <button class="btn_generic" id="confirmOrder" onclick="buyProducts()">
            Confirm Order
          </button>`;
};

const orderItem = ({ image, name, price, id, quantity }) => {
  return `
            <div class="order-product">
              <img src="${image.thumbnail}" alt="" />
              <div class="order-info">
                <h5>${name}</h5>
                <p>
                  <small class="quantity-order-product">${quantity}x </small
                  ><small class="price-order-product">@ ${parseFloat(
                    price
                  ).toFixed(2)}</small>
                </p>
              </div>
              <p>$${parseFloat(quantity * price).toFixed(2)}</p>
            </div>`;
};

const drawOrder = () => {
  const orderProducts = document.querySelector("#order-products");
  let orderItems = "";
  const products = productWithInfo();
  products.forEach((product) => {
    orderItems += orderItem(product);
  });
  orderItems += `<p class="order-total">
              <small class="text-order-total">Order Total</small
              ><span>$${getTotal()}</span>
            </p>`;
  orderProducts.innerHTML = orderItems;
};

function newOrder(){
  cart = [];
  saveCartLC();
  location.href = "./index.html";
}

function productWithInfo() {
  const ids = cart.map((item) => +item.id);
  let products = data.filter((item) => ids.includes(item.id));

  products = products.map((item) => {
    item.quantity = existProductOnCart(item.id).quantity;
    return item;
  });
  return products;
}

// LOCAL STORAGE
function saveCartLC() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
function getTotal() {
  const products = productWithInfo();

  const total = products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return parseFloat(total).toFixed(2);
}
function loadCartLC() {
  return JSON.parse(localStorage.getItem("cart"));
}

// CART FUNCTIONS
function drawCart() {
  cartSection.innerHTML = "";
  if (cart.length > 0) {
    cart.forEach((item) => {
      cartSection.innerHTML += productCartElement(item.id);
    });
    cartSection.innerHTML += totalCart();
  } else {
    cartSection.innerHTML = noProducts;
  }
}
function existCart(id) {
  return cart.some((item) => +item.id === +id);
}

function existProductOnCart(id) {
  return cart.find((item) => +item.id === +id);
}

function updateImageBorder(id) {
  const image = document.getElementById(`image-${id}`);
  if (existProductOnCart(id)) {
    image.classList.add("img__select");
  } else {
    image.classList.remove("img__select");
  }
}

function removeFromCart(id) {
  cart = cart.filter((item) => +item.id !== +id);
  saveCartLC();
  updateButtonContent(id);
  updateImageBorder(id);
  updateTotalQuantity();
  drawCart();
}

function incrementUnit(id) {
  return cart.map((item) => {
    if (item.id === id) {
      item.quantity++;
      return item;
    } else {
      return item;
    }
  });
}
function decrementUnit(id) {
  return cart.map((item) => {
    if (item.id === id) {
      item.quantity--;
      return item;
    } else {
      return item;
    }
  });
}
function addToCart(id) {
  if (!id) return;
  if (existCart(id)) {
    cart = incrementUnit(id);
    updateProductOrder(id);
  } else {
    cart.push({ id, quantity: 1 });
    updateImageBorder(id);
    updateButtonContent(id);
    updateTotalQuantity();
    drawCart();
  }
  saveCartLC();
}

function decrementCart(id) {
  const product = existProductOnCart(id);
  if (!product) return;

  cart = decrementUnit(id);

  if (product && product.quantity < 1) {
    removeFromCart(id);

    return;
  }

  updateProductOrder(id);
  saveCartLC();
}

function getTotalQuantity() {
  let quatityTotal = 0;
  cart.forEach((item) => (quatityTotal += item.quantity));
  return quatityTotal;
}

function updateTotalQuantity() {
  const totalQuatity = document.querySelector(".total-quantity");
  totalQuatity.innerText = getTotalQuantity();
}

function updateButtonContent(id) {
  const button = document.getElementById(`button-content-${id}`);
  button.outerHTML = buttons(id);
}

function updateProductOrder(id) {
  const quantityElements = document.querySelectorAll(`.quantityValue-${id}`);
  if (quantityElements.length < 1) return;
  const product = existProductOnCart(id);
  quantityElements.forEach((element) => (element.innerText = product.quantity));

  const productInfo = getProductInfo(id);

  const updateSubtotal = document.querySelector(`.product-subtotal-${id}`);
  updateSubtotal.innerText = `$${parseFloat(
    product.quantity * productInfo.price
  ).toFixed(2)}`;

  const updateTotal = document.querySelector(".total-price");
  updateTotal.innerText = `$${getTotal()}`;

  updateTotalQuantity();
}

function drawProducts() {
  products.innerHTML = "";
  data.forEach(({ image, name, category, price, id }) => {
    products.innerHTML += productElement(image, name, category, price, id);
  });
}
// END CART FUNCTIONS

function getProductInfo(id) {
  return data.find((product) => product.id === +id);
}

// LOADING DATA
async function getData() {
  try {
    const res = await fetch("./data.json");
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
// END LOADING DATA

function buyProducts() {
  console.log("buy products");

  if (cart.length < 1) return;

  drawOrder()

  const modal = document.getElementById("modal-order");
  modal.style.display = "block";
}
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

window.addEventListener("load", async (event) => {
  cart = loadCartLC() || [];
  data = await getData();
  drawProducts();
  drawCart();
  updateTotalQuantity();
});

products.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("button__add") ||
    e.target.classList.contains("increment")
  ) {
    const id = e.target.id.replace("increment-button-", "");
    addToCart(id);
  }

  if (e.target.classList.contains("decrement")) {
    const id = e.target.id.replace("decrement-button-", "");
    decrementCart(id);
  }
});
