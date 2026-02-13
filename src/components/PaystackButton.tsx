"use client"

import { usePaystackPayment } from 'react-paystack';
import { Button } from "@/components/ui/button"

interface PaystackButtonProps {
    amount: number;
    email: string;
    firstName?: string;
    lastName?: string;
    disabled?: boolean;
    onSuccess?: (reference: any) => void;
    onClose?: () => void;
    text?: string;
}

export default function PaystackButton({ 
    amount, 
    email, 
    firstName, 
    lastName, 
    disabled, 
    onSuccess, 
    onClose,
    text = "Donate Now"
}: PaystackButtonProps) {
    
    const config = {
        reference: (new Date()).getTime().toString(),
        email: email,
        amount: amount * 100, // Amount is in kobo
        publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || '',
        firstname: firstName,
        lastname: lastName,
        currency: 'GHS',
    };

    const initializePayment = usePaystackPayment(config);

    const handlePayment = () => {
        if (disabled) return;
        
        if (!process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY) {
            alert("Paystack integration is not configured. Please set NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY in your environment variables.");
            console.log("Would initiate payment with config:", config);
            return;
        }

        initializePayment({ 
            onSuccess: onSuccess || ((reference) => console.log(reference)), 
            onClose: onClose || (() => console.log('Payment closed')) 
        });
    }

    return (
        <Button 
            onClick={handlePayment}
            disabled={disabled}
            className="w-full h-14 text-lg font-bold bg-[#EAB308] hover:bg-[#CA8A04] text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 mt-4"
        >
            {text}
        </Button>
    )
}
