import { loadStripe } from '@stripe/stripe-js';

class Utility {
  static initPayment = async (paymentDetails) => {
    const {
      title = 'title',
      amount = 100,
      sale = 0,
      description = 'desc',
    } = paymentDetails || {};

    const productDetails = [{
      title, amount, sale, description,
    }];

    const stripe = await loadStripe(String(import.meta.env.VITE_PUBLIC_KEY));

    const headers = {
      'Content-Type': 'application/json',
    };
    const body = {
      product: productDetails,
    };

    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/create-checkout-session`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });

    const { session = {} } = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // eslint-disable-next-line no-console
      console.log(result.error);
    }
  };

  static;
}

export default Utility;
