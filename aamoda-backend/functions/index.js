const functions = require("firebase-functions");
const Razorpay = require("razorpay");
const cors = require("cors")({ origin: true });

// Initialize Razorpay instance
const razorpay = new Razorpay({
    key_id: "rzp_live_3InjjEzd3LUWLP", 
    key_secret: "5fTPtuIMrWKvFJzZawGtLoXH"
});

// HTTP Function to create Razorpay Order
exports.createRazorpayOrder = functions.https.onRequest((req, res) => {
    cors(req, res, async () => {
        if (req.method !== "POST") {
            return res.status(405).send("Method Not Allowed");
        }

        const { amount, currency, receipt } = req.body;

        try {
            const options = {
                amount: amount,
                currency: currency || "INR",
                receipt: receipt || "receipt_" + Date.now(),
                payment_capture: 1 // auto-capture
            };

            const order = await razorpay.orders.create(options);
            return res.status(200).json(order);
        } catch (error) {
            console.error("Error creating Razorpay order:", error);
            return res.status(500).send("Error creating order");
        }
    });
});
