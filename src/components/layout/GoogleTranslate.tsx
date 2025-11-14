// src/components/layout/GoogleTranslate.tsx

import { useEffect } from "react";

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

            <div className="flex flex-col items-center gap-1">

                <button onClick={() => doGTranslate("fr|fr")}>
                    <img src="/assets/images/france-flag.png" className="w-6" alt="Français" />
                </button>

                <button onClick={() => doGTranslate("fr|en")}>
                    <img src="/assets/images/anglais-flag.png" className="w-6" alt="English" />
                </button>

            </div>


        </div>
    );
};
