require('dotenv').config();
const stripe = require('stripe')(process.env.SECRET_KEY)

exports.initPayment = async(req, res) => {
  const { product } = req.body;

  const lineItems = product.map((products) => {
    return {
      price_data: {
        currency: "cad",
        product_data: {
          name: products.title
        },
        unit_amount: products.amount * 100,
      },
      quantity: 1
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: "payment",
    success_url: `${process.env.FRONTEND_URL}/payment-success`,
    cancel_url: `${process.env.FRONTEND_URL}/payment-failure`,
  }) 

  res.json({ session })
}