import fetch from 'node-fetch';

const getCurrencyRates = async () => {
  const response = await fetch(import.meta.env.VITE_API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch currency rates');
  }
  const data = await response.json();
  console.log("Fetched currency rates:", data);
  return data.conversion_rates;
}

export { getCurrencyRates };