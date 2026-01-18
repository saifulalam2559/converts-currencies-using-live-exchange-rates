// currency-converter.js
// Convert currencies using live exchange rates

const amount = 100;
const from = "USD";
const to = "EUR";

const apiUrl = `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    if (!data.success) {
      console.error("Conversion failed");
      return;
    }

    console.log(`Amount: ${amount} ${from}`);
    console.log(`Converted: ${data.result.toFixed(2)} ${to}`);
    console.log(`Rate: 1 ${from} = ${data.info.rate.toFixed(4)} ${to}`);
  })
  .catch(error => {
    console.error("Error fetching exchange rates:", error);
  });

