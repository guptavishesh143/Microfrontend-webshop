# Microfrontend Webshop Demo

This is a multi-brand microfrontend architecture built with Next.js and Module Federation.

## Project Structure

- **host**: The main entry point and shell application.
- **decide**: Product Listing and Details (PLP/PDP).
- **checkout**: Cart and Order Management.
- **blogs**: Content and Article management.
- **mfe-shared**: Shared components, themes, and utilities.

## Brands Supported

- Lee
- Wrangler
- Dockers
- G-Star

## Local Development

| App | Port | URL |
|-----|------|-----|
| host | 3001 | http://localhost:3001 |
| decide | 3002 | http://localhost:3002 |
| checkout | 3003 | http://localhost:3003 |
| blogs | 3004 | http://localhost:3004 |
| mfeshared | 3000 | http://localhost:3000 |

## Requisites

- Node.js 18+
- npm 9+

## Commands

- `npm install`: Install all dependencies (uses npm workspaces).
- `npm run dev`: Start all apps in development mode.
- `npm run build`: Build all apps for production.
- `npm run start`: Start production servers.

## Features

- **Shared Theming**: Controlled from `mfe-shared/components/ThemeProvider.js`.
- **Dynamic URLs**: Environment-aware URL generation via `mfe-shared/utils/urlConfigs.js`.
- **Common Redux**: Shared store and state management.
- **Error Boundaries**: Component-level fault tolerance.
- **SEO Optimized**: Brand-specific meta tags and `robots.txt`.

---
*Last updated: 3/6/2026, 10:52:44 PM*
