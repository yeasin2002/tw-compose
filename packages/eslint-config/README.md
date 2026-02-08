# @repo/eslint-config

Shared ESLint configurations for the cls-extended monorepo.

## Configurations

### Base Config

Base ESLint configuration with TypeScript support and Turbo plugin.

```js
import { config } from "@repo/eslint-config/base";

export default config;
```

### Next.js Config

ESLint configuration for Next.js applications with React and TypeScript support.

```js
import { nextJsConfig } from "@repo/eslint-config/next-js";

export default nextJsConfig;
```

### React Internal Config

ESLint configuration for internal React libraries.

```js
import { reactInternalConfig } from "@repo/eslint-config/react-internal";

export default reactInternalConfig;
```

## Usage

1. Install the package in your workspace:

```json
{
  "devDependencies": {
    "@repo/eslint-config": "workspace:*",
    "eslint": "catalog:"
  }
}
```

2. Create an `eslint.config.js` or `eslint.config.mjs` file:

```js
import { config } from "@repo/eslint-config/base";

export default config;
```

## Catalogs

This package uses pnpm catalogs to ensure consistent ESLint versions across the monorepo. All ESLint-related dependencies are defined in the root `pnpm-workspace.yaml` file.

See [pnpm catalogs documentation](https://pnpm.io/catalogs) for more information.
