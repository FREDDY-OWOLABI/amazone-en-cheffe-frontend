
import { useState, useRef, useEffect } from "react";
import GuinnessRecord from "./GuinnessRecord";
import About from "./About";
import News from "./News";
import Team from "./Team";
import Support from "./Support";
import Ressources from "./Ressources";

// Configuration des pages à charger avec infinite scroll

const pages = [
  { id: "guinness", component: <GuinnessRecord hideHeader={true} hideFooter={true} /> },
  { id: "about", component: <About hideHeader={true} hideFooter={true} /> },
  { id: "news", component: <News hideHeader={true} hideFooter={true} /> },
//  { id: "team", component: <Team hideHeader={true} hideFooter={true} /> },
  { id: "support", component: <Support hideHeader={true} hideFooter={true} /> },
  { id: "resources", component: <Ressources hideHeader={true} hideFooter={true} /> },
];

const OnePageScroll = () => {
  const [visiblePages, setVisiblePages] = useState([]);
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisiblePages((prev) => {
            const nextIndex = prev.length;
            if (nextIndex < pages.length) {
              return [...prev, pages[nextIndex]];
            }
            return prev;
          });
        }
      },
      { 
        root: null, 
        rootMargin: "200px", // Commence à charger 200px avant d'atteindre le bas
        threshold: 0.1 
      }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [visiblePages.length]);

  return (
    <div>
      {/* Affichage des pages chargées */}
      {visiblePages.map((page) => (
        <div key={page.id}>{page.component}</div>
      ))}
      
      {/* Élément déclencheur pour charger la page suivante */}
      {visiblePages.length < pages.length && (
        <div ref={loaderRef} className="h-20 flex items-center justify-center">
          <div className="animate-pulse text-brand-earth-dark">
            Chargement...
          </div>
        </div>
      )}
    </div>
  );
};

export default OnePageScroll;