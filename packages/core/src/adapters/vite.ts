import type { UnpluginInstance } from "unplugin";
import unplugin from "..";
import type { Options } from "../core/options";

const vitePlugin: UnpluginInstance<Options | undefined, false>["vite"] =
  unplugin.vite;

export default vitePlugin;
