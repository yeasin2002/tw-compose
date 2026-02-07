import type { UnpluginInstance } from 'unplugin'
import type { Options } from '../core/options'
import unplugin from '../index'

const vitePlugin: UnpluginInstance<Options | undefined, false>['vite'] =
  unplugin.vite

export default vitePlugin
