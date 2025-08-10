import express from "express";
import currencyRoutes from "./routes/currencyRoutes.js";
import cors from "cors";  // CORS middleware allows cross-origin requests
import dotenv from "dotenv";


dotenv.config({ path: '.env' }); // Load environment variables from .env file
const app = express();

app.use(cors());          // Enables cross-origin requests from frontend at localhost
app.use(express.json());

app.use("/api/currency", currencyRoutes);

// MARK: Start Server
const PORT = process.env.PORT || 5001; // PORT 5001 fallback
// IMPORTANT for Docker: bind to 0.0.0.0 so container is reachable
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`);
});
