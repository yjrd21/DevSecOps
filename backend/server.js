import express from "express";
import currencyRoutes from "./routes/currencyRoutes.js";
import cors from "cors";  // CORS middleware allows cross-origin requests

const app = express();
app.use((req, res, next) => {
  console.log("🔍 Request arrived:");
  console.log("  Method:", req.method);
  console.log("  Path:", req.originalUrl);
  console.log("  Origin:", req.headers.origin);
  next();
});

app.use(cors());          // Enables cross-origin requests from frontend at localhost

// MARK: Routes
app.use("/api/currency", currencyRoutes); // Mount currency routes at /api/currency

// MARK: Start Server
const PORT = process.env.PORT || 5001; // PORT 5001 fallback
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
