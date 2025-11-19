// src/components/modals/NeedsModal.tsx

import React, { useState, useEffect } from 'react';
import { FedaCheckoutButton } from "fedapay-reactjs";
import { toast } from "sonner";

interface Need {
  icon: string;
  label: string;
  obsolete: string;
  price: number;
}

interface NeedsModalProps {
  isOpen: boolean;
  onClose: () => void;
  needs: Need[];
}

export const NeedsModal: React.FC<NeedsModalProps> = ({ isOpen, onClose, needs }) => {
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  const [totalNeedsAmount, setTotalNeedsAmount] = useState(0);
  const [needsIsValid, setNeedsIsValid] = useState(false);

  // Réinitialiser quand la modal se ferme
  useEffect(() => {
    if (!isOpen) {
      setSelectedNeeds([]);
      setTotalNeedsAmount(0);
      setNeedsIsValid(false);
    }
  }, [isOpen]);

  // Calculer le total
  useEffect(() => {
    const total = needs
      .filter((n) => selectedNeeds.includes(n.label))
      .reduce((sum, n) => sum + n.price, 0);
    setTotalNeedsAmount(total);
    setNeedsIsValid(total >= 100); // Minimum 100 F CFA pour FedaPay
  }, [selectedNeeds, needs]);

  const handleToggleNeed = (label: string) => {
    if (selectedNeeds.includes(label)) {
      setSelectedNeeds(selectedNeeds.filter((i) => i !== label));
    } else {
      setSelectedNeeds([...selectedNeeds, label]);
    }
  };

  const [name, setName] = useState("");
  const [country, setCountry] = useState("");


  const isFormValid = needsIsValid && name.trim() !== "" && country.trim() !== "";


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-xl rounded-2xl p-6 max-h-[90vh] overflow-y-auto">

        <h2 className="text-2xl font-bold text-brand-earth-dark mb-6">
          Choisir les besoins
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

        {/* Sélection des besoins */}

        <div className="space-y-3 mb-6">
          {needs.map((n) => (
            <label
              key={n.label}
              className="flex items-center gap-3 p-3 rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={selectedNeeds.includes(n.label)}
                onChange={() => handleToggleNeed(n.label)}
              />
              <span className="flex-1">{n.label}</span>
              <span className="text-sm font-semibold text-brand-gold">
                {n.price.toLocaleString('fr-FR')} F
              </span>
            </label>
          ))}
        </div>

        <div className="text-xl font-bold text-brand-earth-dark mb-4 p-4 bg-gray-50 rounded-lg">
          Montant total : {totalNeedsAmount.toLocaleString('fr-FR')} F CFA
        </div>


        {/* Message si formulaire incomplet */}
        {!isFormValid && (
          <p className="text-red-500 font-semibold mb-3">
            Veuillez remplir votre nom, votre pays et sélectionner au moins un besoin.
          </p>
        )}

        {needsIsValid && (
          <div key={totalNeedsAmount}>
            {/*  La clé force le re-render quand totalNeedsAmount change */}
            <FedaCheckoutButton
              options={{
                public_key: "pk_live_6lRVpIJc12gxZwTWl8N6zJfl",
                transaction: {
                  amount: totalNeedsAmount,
                  description: `Contribution pour ${selectedNeeds.length} besoin(s) - ${totalNeedsAmount} FCFA`,
                },
                currency: { iso: "XOF" },
                customer: {
                  firstname: name.trim() === "" ? "Anonyme" : name.split(" ")[0],
                  lastname: name.trim() === "" ? "" : name.split(" ").slice(1).join(" "),
                  email: "",
                },
                button: {
                  text: `Payer ${totalNeedsAmount.toLocaleString('fr-FR')} F CFA`,
                  class: "bg-brand-earth-dark text-white px-4 py-3 rounded-lg font-bold w-full",
                },
                onComplete(resp) {
                  console.log("Réponse FedaPay complète:", resp);

                  if (resp.transaction && resp.transaction.status === 'approved') {
                    toast.success("Paiement réussi !", {
                      description: `Votre contribution de ${totalNeedsAmount.toLocaleString('fr-FR')} F CFA pour ${selectedNeeds.length} besoin(s) a été enregistrée. Merci pour votre générosité ! 🎉`,
                      duration: 5000,
                    });
                    onClose();
                  } else if (resp.reason === 'canceled' || resp.reason === 'declined') {
                    toast.error("Paiement annulé", {
                      description: "Vous avez annulé le paiement. Aucun montant n'a été débité.",
                      duration: 4000,
                    });
                  } else if (resp.transaction && resp.transaction.status === 'pending') {

                    /*toast.info("Paiement en cours", {
                      description: "Votre paiement est en cours de traitement. Vous recevrez une confirmation par SMS.",
                      duration: 5000,
                    });
                    */

                    onClose();
                  } else {
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
          className="mt-4 text-center w-full text-red-500 font-semibold hover:text-red-600 transition-colors"
        >
          Fermer
        </button>
      </div>
    </div>
  );
};