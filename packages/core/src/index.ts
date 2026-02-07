import { createUnplugin, type UnpluginInstance } from 'unplugin'
import { resolveOptions, type Options } from './core/options'

const unplugin: UnpluginInstance<Options | undefined, false> = createUnplugin(
  (rawOptions = {}) => {
    const options = resolveOptions(rawOptions)

    const name = "cls-extended";
    return {
      name,

      transform: {
        filter: {
          id: { include: options.include, exclude: options.exclude },
        },
        handler(code, id) {
          // Perform transformation
          // return transformationFunction(code, id, options)
        },
      },
    }
  },
)

export default unplugin
export type { Options } from './core/options'
