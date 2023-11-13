# Setup

```bash
npx create-next-app@latest
```

## Optionen

1. What is your project named? my-app
2. Would you like to use TypeScript? No / Yes
3. Would you like to use ESLint? No / Yes
4. Would you like to use Tailwind CSS? No / Yes
5. Would you like to use `src/` directory? No / Yes
6. Would you like to use App Router? (recommended) No / Yes
7. Would you like to customize the default import alias (@/*)? No / Yes
8. What import alias would you like configured? @/*

# Struktur

- config files im Wurzelverzeichnis
- public: für statische Inhalte
- app: Code der Applikation
  - layout.tsx: Root Layout
  - page.tsx: / Seite

# Client vs. Server Components

## Server Components
- Standard in App Router
- werden serverseitig gerendert
- Serverseitiges Data Fetching
- Security: sensitive data bleibt serverseitig
- Caching: Ergebnis kann wiederverwendet werden
- Bundle Size: größere Abhängigkeiten können serverseitig bleiben
- Initialer Page Load und First Contentful Paint: gefühlt schnellere Ergebnisse
- SEO: gerendertes HTML kann indexiert werden
- Streaming: Rendering in Chunks splitten
- Achtung:
  - Kein Lifecycle
  - Kein State
  - kann Async sein

## Client Components
- 'use client'
- Reguläre React Komponenten
- Interaktivität
- Browser APIs (geolocation, localStorage)

## Routing
- filesystembasiertes Routing
- page.tsx definieren die Seiten
- layout.tsx shared layout in verzeichnishierarchie (root layout erforderlich)

## Error handling
error.tsx 
- Erzeugt eine Error Boundary, hat die Möglichkeit den renderprozess neu zu starten

## Static vs. Dynamic rendering
- Static rendering by default (zur Buildzeit vorgeneriert und on demand revalidated)
  - keine dynamischen Funktionen, gecachte Daten
- dynamic rendering bei jedem Request
  - dynamische Funktionen und/oder nicht gecachte daten
- dynamische funktionen: 
  - cookies(), headers()
  - useSearchParams() - bis zur nächsten suspense boundary
  - searchParams page props
- uncached data: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#opting-out-of-data-caching
  - cache: 'no-store' im fetch
  - revalidate: 0 im fetch
  - const dynamic = 'force-dynamic
  - ...

## Dynamic Routes
- [xxx] als Verzeichnisname. xxx steht für eine Variable
- Zugriff über params.xxx in den Page Props
- Navigation
  - <Link href=""> => prefetching im build modus
  - useRouter => router.push('/xxx')
- `next/navigation` - notFound() - löst eine notfound exception aus
  - not-found.tsx wird in diesem Fall gerendert, falls vorhanden

## Prerendering
- statische seiten werden standardmäßig vorgerendert
- dynamische routen können vorgerendert werden, wenn alle möglichen parameter bekannt sind
- export async function generateStaticParams gibt ein Array aller parameter zurück

## Styling
- inline styling
- css import
- css modules
  - Datei endet auf .module.css
  - import styles from '@/bla/blubb';
  - classNames={styles.asdf}
  - clsx-Bibliothek 
- css-in-js (styled-components, emotion)
- sass
  - npm install -D sass
  - style.import scss
- Tailwind

## Material-UI
- Installation und Einbettung

## Server Actions
- async Funktionen, die von den Komponenten aufgerufen werden
- in Server Components definiert oder von Client components aufgerufen werden
  - <form action={server action}>
  - 'use server' innerhalb der Funktion
  - kann `revalidatePath` aus 'next/cache' aufrufen, um einen Pfad nue zu rendern (oder `revalidateTag`)
  - mit `redirect` aus 'next/navigation' weiterleiten
  - useFormStatus, um loading indicator zu zeigen `const {pending} = useFormStatus()` aus react-dom
  - Fehlerbehandlung : ServerAction gibt etwas zurück => state aus useFormState - const [state, formAction] = useFormState(createTodo, initialState);

## API Routen

## Auth
- npm install next-auth@beta bcrypt
- Login Page + Form Erzeugen
- .env mit Auth URL und auth secret
- auth.config.ts
- middleware.ts
- authenticate.action
- signout