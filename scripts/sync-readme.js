import fs from 'fs';
import path from 'path';
import { _port } from '../mfe-shared/utils/urlConfigs.js';

const ROOT_DIR = process.cwd();
const README_PATH = path.join(ROOT_DIR, 'README.md');

const generateReadme = () => {
    const ports = _port.get('host');
    const apps = Object.keys(ports);

    let readmeContent = `# Microfrontend Webshop Demo

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
${apps.map(app => `| ${app} | ${ports[app]} | http://localhost:${ports[app]} |`).join('\n')}

## Requisites

- Node.js 18+
- npm 9+

## Commands

- \`npm install\`: Install all dependencies (uses npm workspaces).
- \`npm run dev\`: Start all apps in development mode.
- \`npm run build\`: Build all apps for production.
- \`npm run start\`: Start production servers.

## Features

- **Shared Theming**: Controlled from \`mfe-shared/components/ThemeProvider.js\`.
- **Dynamic URLs**: Environment-aware URL generation via \`mfe-shared/utils/urlConfigs.js\`.
- **Common Redux**: Shared store and state management.
- **Error Boundaries**: Component-level fault tolerance.
- **SEO Optimized**: Brand-specific meta tags and \`robots.txt\`.

---
*Last updated: ${new Date().toLocaleString()}*
`;

    fs.writeFileSync(README_PATH, readmeContent);
    console.log('README.md updated successfully!');
};

generateReadme();
