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