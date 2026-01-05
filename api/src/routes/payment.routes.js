import express from "express";
import {
  createPaymentOrder,
  validatePayment,
} from "../controllers/payment.controller.js";

const router = express.Router();

router.post("/payment", createPaymentOrder);
router.post("/validate", validatePayment);

export default router;
