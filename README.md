# cls-extended
Zero-runtime Tailwind CSS responsive utilities with better developer experience.

## Features

- ✅ **Zero Runtime Overhead** - Compiles to static strings at build time
- ✅ **Better DX** - Cleaner responsive class syntax
- ✅ **Type Safe** - Full TypeScript support
- ✅ **Universal** - Works with Vite, Webpack, Rollup, esbuild, Rspack, Rolldown, and Farm

## How It Works

Write this:

```tsx
tw("text-xl font-bold", { md: "text-2xl", lg: "text-3xl" });
```

Get this at build time:

```tsx
"text-xl font-bold md:text-2xl lg:text-3xl";
```

No runtime overhead, just static strings.

## Installation

```bash
npm i -D cls-extended
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import TwClassname from "cls-extended/vite";

export default defineConfig({
  plugins: [TwClassname()],
});
```

<br></details>

<details>
<summary>Next.js</summary><br>

**Next.js 15 and earlier (Webpack)**

For build-time transformation with zero runtime overhead:

```js
// next.config.mjs
import clsExtended from "@cls-extended/core/adapters/webpack";

export default {
  webpack: (config) => {
    config.plugins = config.plugins || [];
    config.plugins.push(clsExtended());
    return config;
  },
};
```

**Next.js 16+ (Turbopack)**

Next.js 16 uses Turbopack by default, which doesn't yet support unplugin transformations. Use the runtime `cls()` function:

```js
// next.config.mjs
export default {
  // Turbopack is enabled by default
  turbopack: {},
};
```

```tsx
// In your components
import { cls } from "@cls-extended/core/api";

export default function Component() {
  return (
    <div className={cls("p-4", { md: "p-6", lg: "p-8" })}>
      Content
    </div>
  );
}
```

The `cls()` function provides runtime transformation with minimal overhead (~0.5KB). When unplugin adds Turbopack support, your code will automatically benefit from build-time optimization.

See [examples/nextjs](./examples/nextjs) for a complete working example.

<br></details>




## Usage

```tsx
import { tw } from "cls-extended";

function Component() {
  return (
    <div
      className={tw("container mx-auto px-4", {
        md: "px-6 max-w-4xl",
        lg: "px-8 max-w-6xl",
        xl: "max-w-7xl",
      })}
    >
      Content
    </div>
  );
}
```

The `tw()` function is compiled away at build time, leaving only the static class string.

## Configuration

```ts
TwClassname({
  // Files to include (default: JS/TS/JSX/TSX files)
  include: [/\.[jt]sx?$/],

  // Files to exclude (default: node_modules)
  exclude: [/node_modules/],

  // Custom Tailwind breakpoints
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
});
```

## Development

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test

# Build the plugin
pnpm build

# Development mode with watch
pnpm dev

# Type checking
pnpm typecheck

# Linting
pnpm lint
pnpm lint:fix
```

## How It Works

The plugin uses AST transformation to detect `tw()` calls during the build process and compiles them into static Tailwind class strings. This means:

1. No runtime JavaScript is added to your bundle
2. The transformation happens once during build
3. Your production code contains only plain strings
4. Full compatibility with Tailwind's JIT mode and purging

See [PROJECT-DETAILS.md](./PROJECT-DETAILS.md) for complete implementation details.

## License

[MIT](./LICENSE) License © 2025-PRESENT [Kevin Deng](https://github.com/sxzz)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/cls-extended.svg
[npm-version-href]: https://npmjs.com/package/cls-extended
[npm-downloads-src]: https://img.shields.io/npm/dm/cls-extended
[npm-downloads-href]: https://www.npmcharts.com/compare/cls-extended?interval=30
[unit-test-src]: https://github.com/sxzz/cls-extended/actions/workflows/unit-test.yml/badge.svg
[unit-test-href]: https://github.com/sxzz/cls-extended/actions/workflows/unit-test.yml
