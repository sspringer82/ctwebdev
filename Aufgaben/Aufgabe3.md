# Aufgabe 3 - Produktsuche

1. Nutze die searchParams-Prop, um der Seite Suchparameter übergeben zu können. Verwende den `name`-Parameter, um einen Suchstring zu übergeben.
2. Nutze den searchParam `name`, um das Ergebnis, das der Server zurückliefert zu filtern.
3. Wende den Suchfilter manuell in der Adresszeile deines Browser an
4. Füge eine neue Client Komponente `Search` ein
   1. Diese Komponente rendert ein einfaches input-Element
   2. Beim Ändern des Wertes verändern Sie die Suchparameter der aktuellen Seite und lösen so ein Rerendern aus

Tipp:
- mit useSearchParams haben Sie Zugriff auf den aktuellen Wert (für den Startwert)
- mit usePathname können Sie auf den aktuellen Pfad zugreifen
- useRouter aus next/navigation gibt Ihnen ein Router-Objekt. Mit der replace-Methode können Sie auf eine andere Adresse navigieren

(optional)
- nutzen Sie das `use-debounce`-Paket, um die Eingabe zu verzögern und so nicht bei jedem Tastendruck einen neuen Request zu senden