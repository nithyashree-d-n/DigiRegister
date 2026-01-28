// --------------------
// Load saved totals
// --------------------
let cashTotal = localStorage.getItem("cashTotal");
let upiTotal = localStorage.getItem("upiTotal");

cashTotal = cashTotal ? parseInt(cashTotal) : 0;
upiTotal = upiTotal ? parseInt(upiTotal) : 0;

// Update UI on load
document.getElementById("cashTotal").innerText = cashTotal;
document.getElementById("upiTotal").innerText = upiTotal;

// --------------------
// App state
// --------------------
let selectedQuantity = 0;
const pricePerPen = 10;

// --------------------
// Quantity buttons
// --------------------
document.getElementById("pen-1").addEventListener("click", function () {
  selectedQuantity = 1;
  alert("Quantity selected: +1");
});

document.getElementById("pen-2").addEventListener("click", function () {
  selectedQuantity = 2;
  alert("Quantity selected: +2");
});

document.getElementById("pen-3").addEventListener("click", function () {
  selectedQuantity = 3;
  alert("Quantity selected: +3");
});

// --------------------
// Payment buttons
// --------------------
document.getElementById("pen-cash").addEventListener("click", function () {
  if (selectedQuantity === 0) {
    alert("Please select quantity first");
    return;
  }

  cashTotal += selectedQuantity * pricePerPen;
  localStorage.setItem("cashTotal", cashTotal);
  document.getElementById("cashTotal").innerText = cashTotal;

  selectedQuantity = 0;
});

document.getElementById("pen-upi").addEventListener("click", function () {
  if (selectedQuantity === 0) {
    alert("Please select quantity first");
    return;
  }

  upiTotal += selectedQuantity * pricePerPen;
  localStorage.setItem("upiTotal", upiTotal);
  document.getElementById("upiTotal").innerText = upiTotal;

  selectedQuantity = 0;
});
