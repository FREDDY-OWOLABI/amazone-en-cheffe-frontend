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

  const [name, setName] = useState("");
  const [country, setCountry] = useState("");

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


  const isFormValid = amountIsValid && name.trim() !== "" && country.trim() !== "";

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-brand-earth-dark mb-4">
          Entrer un montant
        </h2>
        {/* Nom et pays */}
        <div className="mb-4 space-y-3">
          <input
            type="text"
            placeholder="Nom et prénom ou Anonyme"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          />
          <input
            type="text"
            placeholder="Pays"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <input
          type="number"
          placeholder="Ex: 5000"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="100"
          className="w-full border rounded-lg px-4 py-3 mb-4"
        />


        {!isFormValid && (
          <p className="text-red-500 font-semibold mb-3">
            Veuillez remplir votre nom, votre pays et entrer un montant valide (minimum 100 F CFA).
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
                customer: {
                  firstname: name.trim() === "" ? "Anonyme" : name.split(" ")[0],
                  lastname: name.trim() === "" ? "" : name.split(" ").slice(1).join(" "),
                  email: "",
                },
                button: {
                  text: `Payer ${amountNumber} F CFA`,
                  class: "bg-brand-earth-dark text-white px-4 py-3 rounded-lg font-bold w-full",
                },

                onComplete(resp) {
                  console.log("Réponse FedaPay complète:", resp);

                  // Vérifier que le paiement est vraiment réussi
                  if (resp.transaction && resp.transaction.status === 'approved') {
                    toast.success("Paiement réussi !", {
                      description: `Votre contribution de ${amountNumber.toLocaleString('fr-FR')} F CFA a été enregistrée. Merci pour votre soutien !`,
                      duration: 5000,
                    });
                    onClose();
                  } else if (resp.reason === 'canceled' || resp.reason === 'declined') {
                    // Paiement annulé ou refusé
                    toast.error("Paiement annulé", {
                      description: "Vous avez annulé le paiement. Aucun montant n'a été débité.",
                      duration: 4000,
                    });
                  } else if (resp.transaction && resp.transaction.status === 'pending') {
                    // Paiement en attente
                    /*
                    toast.info("Paiement en cours", {
                      description: "Votre paiement est en cours de traitement. Vous recevrez une confirmation par SMS.",
                      duration: 5000,
                    });
                    */

                    onClose();
                  } else {
                    // Statut inconnu
                    console.warn("Statut de transaction inconnu:", resp);
                    /*
                     toast.warning("Statut incertain", {
                                          description: "Veuillez vérifier votre SMS ou contactez-nous si le problème persiste.",
                                          duration: 5000,
                                        });
                      */

                  }
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