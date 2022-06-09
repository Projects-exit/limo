
import React, { useState, useEffect } from "react";

import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe } from "@stripe/react-stripe-js";

import CheckoutForm from './CheckoutForm'

const stripePromise = loadStripe("pk_test_51KzzNoSD9r1spZZHeXfYN5iiAIIKkgZ663OsJb2S5gwENhB9L6M0ZwHupTiu3kcuLY0RYLcj3edNPtDMDlREtXau00rTcGrMPS", {
    betas: ["process_order_beta_1"],
    apiVersion: "2020-08-27; orders_beta=v3"
});

export default function Checkout(props) {

    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // The items the customer wants to buy
        const items = [{ product: "prod_LhkdEZ77TJJOoE", quantity: 1 }];

        // Create Order as soon as the page loads
        fetch("http://localhost:1337/api/reservation/createOrder", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: items }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret,
        appearance,
      };

    return (
        <>
        {clientSecret &&
            <div className=" w-full  max-w-lg mx-auto">
            <Elements options={options}  stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
            </div>
        }

        </>
    )
}
