// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import {loadStripe} from '@stripe/stripe-js';
// import {
//   PaymentElement,
//   Elements,
//   useStripe,
//   useElements,
// } from '@stripe/react-stripe-js';

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const [errorMessage, setErrorMessage] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (elements == null) {
//       return;
//     }

//     // Trigger form validation and wallet collection
//     const {error: submitError} = await elements.submit();
//     if (submitError) {
//       // Show error to your customer
//       setErrorMessage(submitError.message);
//       return;
//     }

//     // Create the PaymentIntent and obtain clientSecret from your server endpoint
//     const res = await fetch('/create-intent', {
//       method: 'POST',
//     });

//     const {client_secret: clientSecret} = await res.json();

//     const {error} = await stripe.confirmPayment({
//       //`Elements` instance that was used to create the Payment Element
//       elements,
//       clientSecret,
//       confirmParams: {
//         return_url: 'https://example.com/order/123/complete',
//       },
//     });

//     if (error) {
     
//       setErrorMessage(error.message);
//     } else {
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <PaymentElement />
//       <button type="submit" disabled={!stripe || !elements}>
//         Pay
//       </button>
//       {}
//       {errorMessage && <div>{errorMessage}</div>}
//     </form>
//   );
// };

// const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

// const options = {
//   mode: 'payment',
//   amount: 1099,
//   currency: 'usd',
//   appearance: {
//   },
// };

// export default function Moneys(){
//   <Elements stripe={stripePromise} options={options}>
//     <CheckoutForm />
//   </Elements>
// }

// ReactDOM.render(<money />, document.body);