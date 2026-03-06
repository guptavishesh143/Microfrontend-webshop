# Microfrontend Demo - Aceturtle Portal

This project is a Microfrontend (MFE) architecture demonstration built using **Next.js** and **Webpack Module Federation**. It showcases how multiple independent applications (remotes) can be composed into a single cohesive experience (host) while sharing state and UI components.

## 🏗️ Architecture Overview

The system consists of a Host application and four remote modules:

-   **Host (`host`)**: The central shell of the application. It provides the main layout, routing, and the global Redux store.
-   **Decide (`decide`)**: Handles product discovery and listing (PLP).
-   **Checkout (`checkout`)**: Manages order summaries and the checkout flow.
-   **Blogs (`blogs`)**: Serves blog content.
-   **MFE Shared (`mfe-shared`)**: A common utility application that consumes multiple remotes, often used for cross-functional views or shared pages.

## 🚦 Port Mapping

| Application | Port | URL |
| :--- | :--- | :--- |
| **Host** | `3001` | [http://localhost:3001](http://localhost:3001) |
| **Decide** | `3002` | [http://localhost:3002](http://localhost:3002) |
| **Checkout** | `3003` | [http://localhost:3003](http://localhost:3003) |
| **Blogs** | `3004` | [http://localhost:3004](http://localhost:3004) |
| **MFE Shared**| `3000` | [http://localhost:3000](http://localhost:3000) |

## 🚀 Getting Started

### 1. Installation

Install dependencies from the root directory:

```bash
npm install
```

### 2. Running in Development

You can start all microfrontends simultaneously using the root-level script:

```bash
npm run dev
```

This runs all applications in parallel using `concurrently`.

## 🔄 Shared Logic & Connections

### 📦 Shared Redux State (Redux Toolkit + Persistence)

The project implements a **centralized state management** system shared across all remotes:

1.  **Host as Store Provider**: The global Redux store is defined in `host/store/store.js`.
2.  **State Persistence**: Uses `redux-persist` with `CookieStorage`. This ensures that state remains consistent even when navigating between different microfrontend routes or refreshing the page.
3.  **Connection via Provider**: The host exposes a `ReduxProvider` component. Remotes consume this dynamically:
    ```javascript
    // In Remote's _app.js
    const ReduxProvider = dynamic(() => import('host/ReduxProvider'), { ssr: false });

    function App({ Component, pageProps }) {
      return (
        <ReduxProvider>
          <Component {...pageProps} />
        </ReduxProvider>
      );
    }
    ```

### 🎨 Shared UI Components

To maintain visual consistency and bypass CSS processing limitations in federated modules:

-   **Shared Components**: Components like `Header`, `Navbar`, and `SharedButton` are exposed by the `host`.
-   **Styling Strategy**: These components use **Inline Styles** (or CSS-in-JS patterns) to ensure they look identical regardless of whether they are rendered in the Host or a Remote application, avoiding conflicts with tailwind or local CSS.

## 🛠️ Component Exposure Map

| Source | Exposed Item | Purpose |
| :--- | :--- | :--- |
| **Host** | `./Header` | Global navigation header |
| **Host** | `./SharedButton` | Branded interactive button |
| **Host** | `./ReduxProvider` | Shared state wrapper |
| **Decide** | `./PLP` | Product Listing Page |
| **Checkout** | `./OrderSummary`| Checkout details |
| **Blogs** | `./Blogs` | Blog content module |

---
*Built for Aceturtle - Microfrontend Demo*
