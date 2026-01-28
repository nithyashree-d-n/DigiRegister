/***********************
 * IndexedDB Setup
 ***********************/
let db;
let sales = [];

const request = indexedDB.open("DigiRegisterDB", 1);

request.onupgradeneeded = function (event) {
  db = event.target.result;

  if (!db.objectStoreNames.contains("sales")) {
    db.createObjectStore("sales", { autoIncrement: true });
  }
};

request.onsuccess = function (event) {
  db = event.target.result;
  loadSalesFromDB();
};

request.onerror = function () {
  console.error("IndexedDB error");
};

/***********************
 * Helper Functions
 ***********************/
function getCurrentDateTime() {
  const now = new Date();
  return {
    date: now.toLocaleDateString(),
    time: now.toLocaleTimeString()
  };
}

function loadSalesFromDB() {
  const transaction = db.transaction(["sales"], "readonly");
  const store = transaction.objectStore("sales");
  const getAll = store.getAll();

  getAll.onsuccess = function () {
    sales = getAll.result || [];
    renderSales();
    calculateTotals();
  };
}

function renderSales() {
  const salesList = document.getElementById("salesList");
  salesList.innerHTML = "";

  sales.slice().reverse().forEach(sale => {
    const li = document.createElement("li");
    li.innerText =
      `${sale.item} ×${sale.quantity} — ${sale.payment.toUpperCase()} — ₹${sale.amount} (${sale.time})`;
    salesList.appendChild(li);
  });
}

function calculateTotals() {
  let cashAmount = 0;
  let upiAmount = 0;

  sales.forEach(sale => {
    if (sale.payment === "cash") {
      cashAmount += sale.amount;
    } else if (sale.payment === "upi") {
      upiAmount += sale.amount;
    }
  });

  document.getElementById("cashTotal").innerText = cashAmount;
  document.getElementById("upiTotal").innerText = upiAmount;
}

/***********************
 * App State
 ***********************/
let selectedQuantity = 0;
let selectedItem = null;

const prices = {
  Pen: 10,
  Notebook: 40
};

/***********************
 * Quantity Buttons
 ***********************/
document.querySelectorAll(".qty-btn").forEach(button => {
  button.addEventListener("click", function () {
    selectedQuantity = parseInt(this.dataset.qty);
    selectedItem = this.closest("tr").dataset.item;

    document.getElementById("selectedQty").innerText =
      `+${selectedQuantity} (${selectedItem})`;
  });
});

/***********************
 * Payment Buttons
 ***********************/
document.querySelectorAll(".pay-btn").forEach(button => {
  button.addEventListener("click", function () {
    if (!selectedItem || selectedQuantity === 0) {
      document.getElementById("selectedQty").innerText =
        "Please select item & quantity";
      return;
    }

    const paymentType = this.dataset.pay;
    const amount = selectedQuantity * prices[selectedItem];
    const dateTime = getCurrentDateTime();

    const saleRecord = {
      item: selectedItem,
      quantity: selectedQuantity,
      payment: paymentType,
      amount: amount,
      date: dateTime.date,
      time: dateTime.time
    };

    // Save in memory
    sales.push(saleRecord);

    // Save in IndexedDB
    const transaction = db.transaction(["sales"], "readwrite");
    const store = transaction.objectStore("sales");
    store.add(saleRecord);

    // Update UI
    renderSales();
    calculateTotals();

    // Reset selection
    selectedQuantity = 0;
    selectedItem = null;
    document.getElementById("selectedQty").innerText = "None";
  });
});
