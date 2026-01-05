import express from "express";
import paymentRoutes from "./payment.routes.js";

const router = express.Router();

// Health check route
router.get("/", (req, res) => {
  res.json({ message: "API is working!" });
});

// Mount payment routes
router.use("/", paymentRoutes);

export default router;
