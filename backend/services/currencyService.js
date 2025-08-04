import fetch from 'node-fetch';

const getCurrencyRates = async () => {
  const response = await fetch('https://v6.exchangerate-api.com/v6/7a8603e3443d3b45f8fc50a5/latest/SGD');
  if (!response.ok) {
    throw new Error('Failed to fetch currency rates');
  }
  const data = await response.json();
  console.log("Fetched currency rates:", data);
  return data.conversion_rates;
}

export { getCurrencyRates };