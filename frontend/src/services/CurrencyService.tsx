interface CurrencyService {
  fetchRates: () => Promise<{ [key: string]: number }>;
}

const API_BASE = import.meta.env.VITE_BACKEND_ORIGIN;

const ApiCurrencyService: CurrencyService = {
  async fetchRates() {
    const response = await fetch(`${API_BASE}/api/currency`);
    if (!response.ok) {
      throw new Error("Failed to fetch currency data");
    }
    return response.json(); // deserialize JSON response into in-memory object
  },
};

export { ApiCurrencyService };
export type { CurrencyService };