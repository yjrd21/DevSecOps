import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config(); // load .env into process.env

console.log("Loaded API_URL:", process.env.API_URL);
const getCurrencyRates = async () => {
  const response = await fetch(process.env.VITE_API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch currency rates');
  }
  const data = await response.json();
  console.log("Fetched currency rates:", data);
  return data.conversion_rates;
}

export { getCurrencyRates };