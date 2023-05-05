import { loadStripe } from "@stripe/stripe-js";

// load stripe is what runs in order of us to actually know that is our stripe instance.
export const stripePromise = loadStripe(
  import.meta.env.VITE_APP_STRIPE_PUBLISHABLE_KEY
);
