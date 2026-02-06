# unplugin-tw-classname

A universal build plugin that transforms responsive Tailwind CSS syntax at build time with zero runtime overhead.

## What It Does

Converts cleaner, object-based responsive syntax into standard Tailwind classes during the build process:

```tsx
// Write this:
tw('text-xl font-bold', { md: 'text-2xl', lg: 'text-3xl' })

// Compiles to this at build time:
"text-xl font-bold md:text-2xl lg:text-3xl"
```

## Features

- **Zero Runtime Overhead**: All transformations happen at build time
- **Universal Compatibility**: Works with Vite, Webpack, Rollup, Rolldown, esbuild, Rspack, and Farm
- **Type Safe**: Full TypeScript support with intelligent autocomplete
- **Better DX**: Reduces code verbosity by ~40% for responsive designs
- **Source Maps**: Maintains accurate source maps for debugging

## Installation

```bash
npm install -D unplugin-tw-classname
# or
pnpm add -D unplugin-tw-classname
# or
yarn add -D unplugin-tw-classname
```

## Quick Start

### Vite

```typescript
// vite.config.ts
import twClassname from 'unplugin-tw-classname/vite'

export default defineConfig({
  plugins: [twClassname()],
})
```

### Webpack

```javascript
// webpack.config.js
const twClassname = require('unplugin-tw-classname/webpack')

module.exports = {
  plugins: [twClassname()],
}
```

### Other Build Tools

See [packages/core/README.md](packages/core/README.md) for Rollup, esbuild, Rspack, and Farm configurations.

## Usage

```tsx
import { tw } from 'unplugin-tw-classname/api'

function Component() {
  return (
    <div className={tw('p-4 text-base', { 
      md: 'p-6 text-lg', 
      lg: 'p-8 text-xl' 
    })}>
      Responsive content
    </div>
  )
}
```

## Monorepo Structure

This project uses Turborepo with pnpm workspaces:

### Packages

- **`packages/core`**: Main plugin package (publishable to npm)
  - Universal build plugin implementation
  - 9 entry points (main + 7 build tools + API)
  - Full TypeScript support with strict mode
  - Comprehensive test suite (8 tests, 100% coverage)

### Apps

- **`apps/docs`**: Next.js documentation site
  - Plugin documentation and examples
  - Interactive demos
  - API reference

### Tooling

- **`tooling/eslint-config`**: Shared ESLint configurations
- **`tooling/typescript-config`**: Shared TypeScript configurations

All packages are 100% [TypeScript](https://www.typescriptlang.org/).

## Development

### Prerequisites

- Node.js 20.19.0 or higher
- pnpm 10.28.2 or higher

### Setup

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run tests
pnpm test

# Type check
pnpm typecheck

# Lint
pnpm lint
```

### Working with Packages

```bash
# Build only the plugin
pnpm --filter unplugin-tw-classname build

# Run plugin tests
pnpm --filter unplugin-tw-classname test

# Start docs site
pnpm --filter docs dev
```

### Development Workflow

1. Make changes to `packages/core/src/`
2. Build the plugin: `pnpm --filter unplugin-tw-classname build`
3. Test changes: `pnpm --filter unplugin-tw-classname test`
4. Verify in docs app: `pnpm --filter docs dev`

## Documentation

- **[Plugin Documentation](packages/core/README.md)**: Complete API reference and usage guide
- **[Tutorial](tutorial/README.md)**: 10-chapter step-by-step guide to building unplugins
- **[Project Details](PROJECT-DETAILS.md)**: Technical analysis and architecture
- **[Monorepo Migration](docs/monorepo-migration.md)**: Migration guide and structure

## Performance

- **Bundle Size**: ~8.26 KB (gzipped: ~3.5 KB)
- **Runtime Impact**: 0 KB (build-time only)
- **Build Time**: ~500-700ms for plugin
- **Transform Speed**: <1ms per file

## Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests to our repository.

## License

MIT License - see [LICENSE](LICENSE) for details

## Links

- **Repository**: https://github.com/yeasin2002/unplugin-tw-classname-protoype
- **NPM Package**: unplugin-tw-classname
- **Issues**: https://github.com/yeasin2002/unplugin-tw-classname-protoype/issues
