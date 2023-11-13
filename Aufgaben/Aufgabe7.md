# Aufgabe 7 - Material UI

1. Installiere Material-UI: `npm install @mui/material @mui/styled-engine-sc styled-components`
2. Installiere die Material-UI-Icons: `npm install @mui/icons-material`
3. Nutze die Roboto-Schriftart von Next
   1. Erzeuge eine Datei `app/ui/fonts.ts`
   2. Lade die Schriftart
   3. Binde die Schriftart im Root Layout ein `<body className={`${roboto.className} antialiased`}>`
4. Wende die Material Components wie Textfield, Button oder Card an.


Code snippet zum Laden der Schriftart:
```ts
import { Roboto } from 'next/font/google';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});
```