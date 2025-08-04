import express from 'express';
import { getCurrencyRates } from "../services/currencyService.js";

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const rates = await getCurrencyRates();
    console.log("Fetched currency rates:", rates);
    res.json(rates);
  } catch (error) {
    console.error("Error fetching currency rates:", error);
    res.status(500).json({ error: "Failed to fetch currency rates" });
  }
});

export default router;
