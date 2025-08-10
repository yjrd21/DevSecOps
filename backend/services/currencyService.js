import fetch from 'node-fetch';
import dotenv from 'dotenv';
import path from 'path';


const getCurrencyRates = async () => {
  const apiUrl = process.env.CURRENCY_API_URL;
  console.log ("Fetching currency rates from:", apiUrl);
  if (!apiUrl) {
    throw new Error("CURRENCY_API_URL is not set");
  }
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('Failed to fetch currency rates');
  }
  const data = await response.json();
  console.log("Fetched currency rates:", data);
  return data.conversion_rates;
}

export { getCurrencyRates };