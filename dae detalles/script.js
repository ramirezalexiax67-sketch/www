const whatsappNumber = "59168280904";

let cart = [];
const cartList = document.getElementById("cart-list");
const cartTotal = document.getElementById("cart-total");

document.querySelectorAll(".btn-add").forEach(btn => {
  btn.addEventListener("click", () => {
    const product = btn.parentElement;
    const name = product.dataset.name;
    const price = parseFloat(product.dataset.price);

    cart.push({ name, price });
    updateCart();
  });
});

function updateCart() {
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price} BS`;
    cartList.appendChild(li);
  });

  cartTotal.textContent = total;
}

document.getElementById("clear-cart").addEventListener("click", () => {
  cart = [];
  updateCart();
});

document.getElementById("save-cart").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Tu carrito está vacío");
    return;
  }

  let message = "Hola, quiero comprar:\n";
  cart.forEach(item => {
    message += `- ${item.name} (${item.price} BS)\n`;
  });

  message += `\nTotal: ${cartTotal.textContent} BS`;

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});
