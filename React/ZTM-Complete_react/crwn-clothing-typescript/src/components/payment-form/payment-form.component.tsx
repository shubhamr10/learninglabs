import { PaymentFormContainer, FormContainer } from "./payment-form.styles";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { StripeCardElement } from "@stripe/stripe-js";

// type guard
const ifValidCardElement = (card: StripeCardElement | null): card is StripeCardElement => card !== null;

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);

    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const paymentHandler = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!stripe || !elements){
            return;
        }

        setIsProcessingPayment(true);

        const response = await fetch("/api/create-payment-intent",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({ amount:amount * 100 })
        }).then(res => res.json());

        const cardDetails = elements.getElement(CardElement);

        // if(cardDetails === null) return;
        if(!ifValidCardElement(cardDetails)) return;
        const {client_secret} = response.data;
        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method:{
                card: cardDetails,
                billing_details:{
                    name:currentUser ? currentUser.displayName : "Guest user!"
                }
            }
        });

        setIsProcessingPayment(false);

        if(paymentResult.error){
            alert(paymentResult.error);
        } else {
            if(paymentResult.paymentIntent.status === "succeeded"){
                alert("paumet success");
            }
        }

    }
    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit card payment:</h2>
                <CardElement />
                <Button isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}> Pay now</Button>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm;