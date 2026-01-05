import crypto from "crypto";
import { getRazorpayInstance } from "../config/razorpay.config.js";

export const createPaymentOrder = async (req, res) => {
  try {
    const razorpay = getRazorpayInstance();

    if (!req.body) {
      return res.status(400).send("Bad request");
    }
    const options = req.body;

    const order = await razorpay.orders.create(options);

    if (!order) {
      return res.status(400).send("Bad request");
    }

    res.json(order);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const validatePayment = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
  const sha = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);

  sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  const digest = sha.digest("hex");

  if (digest !== razorpay_signature) {
    return res.status(400).json({ msg: "Transaction is not legit!" });
  }
  res.json({
    msg: "Transaction is legit!",
    orderId: razorpay_order_id,
    paymentId: razorpay_payment_id,
  });
};
