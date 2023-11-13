# Aufgabe 6 - make it beautiful

Experimentiere auf der Übersichtsseite bzw. auf der Detailseite mit verschiedenen Styling-Varianten

1. Verwende inline Styling mit dem style-Attribut und einem Style-Objekt
2. Nutze den Import von CSS-Dateien
3. Nutze CSS-Modules 
   1. Erstelle eine Datei, die wie die Komponente heißt und auf `.module.css` endet
   2. Definiere dort Style-Klassen, wie du sie benötigst
   3. Importiere den Standard-Export aus dieser Datei `import styles from '@/my.module.css`
   4. Binde die Styles als Klasse ein: `className={styles.myStyle}`
   5. (optional): installiere das Paket clsx und nutze es, um die Klassen zu verwalten
4. Installiere Styled-Components `npm install styled-components` und nutze die Komponenten in der Applikation (ACHTUNG: https://nextjs.org/docs/app/building-your-application/styling/css-in-js#styled-components)
5. Installiere Sass `nmp install -D sass` und nutze es zum stylen der Applikation `import '@/mystyle.scss`
6. Nutze Tailwind zum stylen der Applikation