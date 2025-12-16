async function predict() {
  const data = {
    age: parseInt(document.getElementById("age").value),
    price: parseFloat(document.getElementById("price").value),
    gender: document.getElementById("gender").value,
    product_category: document.getElementById("category").value,
    payment_method: document.getElementById("payment").value
  };

  const res = await fetch("/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  document.getElementById("result").innerText =
    result.purchase_prediction === 1
      ? "Customer WILL purchase"
      : "Customer will NOT purchase";
}
