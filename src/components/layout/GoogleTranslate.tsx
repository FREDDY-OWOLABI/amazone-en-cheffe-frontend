// src/components/layout/GoogleTranslate.tsx

import { useEffect } from "react";
import "country-flag-icons/react/3x2";
import { FR, GB } from "country-flag-icons/react/3x2";


export const GoogleTranslate = () => {
    useEffect(() => {
        // Injection du script Google Translate
        const addScript = document.createElement("script");
        addScript.src =
            "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2";
        document.body.appendChild(addScript);

        // Fonction requise par Google Translate
        (window as any).googleTranslateElementInit2 = () => {
            new (window as any).google.translate.TranslateElement(
                {
                    pageLanguage: "fr",
                    autoDisplay: false,
                },
                "google_translate_element2"
            );
        };
    }, []);

    // Fonction du système de traduction
    const doGTranslate = (lang: string) => {
        const target = document.querySelector(".goog-te-combo") as HTMLSelectElement;
        if (!target) return;

        const langTo = lang.split("|")[1];
        target.value = langTo;
        target.dispatchEvent(new Event("change"));
    };

    return (
        <div className="flex items-center gap-1">
            {/* Conteneur caché obligatoire */}
            <div id="google_translate_element2" style={{ display: "none" }}></div>

            {/* Boutons avec drapeaux */}

            <div className="flex flex-row items-center gap-2">

                <button onClick={() => doGTranslate("fr|fr")}>
                   
                    <FR className="w-6 h-4" />
                </button>

                <button onClick={() => doGTranslate("fr|en")}>
                    <GB className="w-6 h-4" />
                </button>

            </div>


        </div>
    );
};
