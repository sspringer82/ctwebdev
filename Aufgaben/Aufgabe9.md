# Aufgabe 9 - Checkout

Erzeuge eine neue Page `/products/checkout`

Zeige dem User den warenkorb an

Implementiere ein Formular, mit dem der User folgende Daten eingeben kann:
- Vorname
- Nachname
- Straße
- PLZ
- Stadt
- Land

Nutze für das Formular react-hook-form

Sende das formular mit swr an den Server, implementiere hierfür eine API Route `/products/checkout/submit`
1. erzeuge das Verzeichnis `/app/products/checkout/submit`
2. erzeuge eine Datei `route.ts`
3. Implementiere eine `asynchrone Funktion POST`
4. Kommuniziere mit dem Backend über die fetch-API

Wenn das speichern erfolgreich war, leite den User zurück zur Produktliste