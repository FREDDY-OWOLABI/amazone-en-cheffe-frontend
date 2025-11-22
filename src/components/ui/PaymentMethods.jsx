//src/component/ui/PaymentMethods.jsx

import React from "react";

const PaymentMethods = () => {
    const methods = [

        "/assets/icons/visa.png",
        "/assets/icons/mastercard.png",
        "/assets/icons/momo.png",
        "/assets/icons/moov.jpg",
        "/assets/icons/fedapay.svg",
    ];

    return (
        <div className="flex flex-col items-center justify-center mt-6">


            <div className="flex flex-wrap items-center justify-center gap-4">
                {methods.map((m, i) => (
                    <img
                        key={i}
                        src={m}
                        alt={`Méthode paiement ${i}`}
                        className="h-7 w-auto object-contain"
                    />
                ))}
            </div>
        </div>
    );
};

export default PaymentMethods;
