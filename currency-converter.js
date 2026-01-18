// currency-converter.js
// Convert currencies using live exchange rates with basic validation

const amount = 100;
const from = "USD";
const to = "EUR";

if (amount <= 0) {
  console.error("Amount must be greater than zero");
  process.exit(1);
}

if (!from || !to) {
  console.error("Currency codes are required");
  process.exit(1);
}

const apiUrl = `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`;

fetch(apiUrl)
  .then(res => {
    if (!res.ok) throw new Error("Network response failed");
    return res.json();
  })
  .then(data => {
    if (!data.result) throw new Error("Invalid API response");

    console.log(`Amount: ${amount} ${from}`);
    console.log(`Converted: ${data.result.toFixed(2)} ${to}`);
    console.log(`Rate: 1 ${from} = ${data.info.rate.toFixed(4)} ${to}`);
  })
  .catch(err => {
    console.error("Currency conversion error:", err.message);
  });


//Improve validation and error handling in currency converter
