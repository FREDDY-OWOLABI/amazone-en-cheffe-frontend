// src/components/modals/AmountModal.tsx

import React, { useState, useEffect } from 'react';
import { FedaCheckoutButton } from "fedapay-reactjs";
import { toast } from "sonner";

interface AmountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AmountModal: React.FC<AmountModalProps> = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState("");
  const [amountNumber, setAmountNumber] = useState(0);
  const [amountIsValid, setAmountIsValid] = useState(false);

  const toNumber = (value: string): number => {
    const clean = value.replace(/[^\d]/g, "");
    const parsed = parseInt(clean, 10);
    return isNaN(parsed) ? 0 : parsed;
  };

  useEffect(() => {
    if (!isOpen) {
      setAmount("");
      setAmountNumber(0);
      setAmountIsValid(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const num = toNumber(amount);
    setAmountNumber(num);
    setAmountIsValid(num >= 100);
  }, [amount]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-brand-earth-dark mb-4">
          Entrer un montant
        </h2>

        <input
          type="number"
          placeholder="Ex: 5000"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="100"
          className="w-full border rounded-lg px-4 py-3 mb-4"
        />

        {!amountIsValid && (
          <p className="text-red-500 font-semibold mb-3">
            Veuillez entrer un montant valide (minimum 100 F CFA).
          </p>
        )}

        {amountIsValid && (
          <div key={amountNumber}>
            <FedaCheckoutButton
              options={{
                public_key: "pk_live_6lRVpIJc12gxZwTWl8N6zJfl",
                transaction: {
                  amount: amountNumber,
                  description: `Contribution volontaire de ${amountNumber} FCFA`,
                },
                currency: { iso: "XOF" },
                button: {
                  text: `Payer ${amountNumber} F CFA`,
                  class: "bg-brand-earth-dark text-white px-4 py-3 rounded-lg font-bold w-full",
                },
                onComplete(resp) {
                  
                   toast.success("Paiement terminé !", {
                    description: `Votre contribution de ${amountNumber.toLocaleString('fr-FR')} F CFA a été enregistrée. Merci pour votre soutien !`,
                    duration: 5000,
                  });
                  onClose();
                },
              }}
            />
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-4 text-center w-full text-red-500 font-semibold"
        >
          Fermer
        </button>
      </div>
    </div>
  );
};