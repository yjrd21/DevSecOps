interface CurrencyService {
  fetchRates: () => Promise<{ [key: string]: number }>;
}

const ApiCurrencyService: CurrencyService = {
  async fetchRates() {
    const response = await fetch("http://localhost:5001/api/currency/");
    if (!response.ok) {
      throw new Error("Failed to fetch currency data");
    }
    return response.json(); // deserialize JSON response into in-memory object
  },
};

export { ApiCurrencyService };
export type { CurrencyService };