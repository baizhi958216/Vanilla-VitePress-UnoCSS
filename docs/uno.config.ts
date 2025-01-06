import { defineConfig, transformerDirectives, presetIcons } from "unocss";

export default defineConfig({
  transformers: [transformerDirectives()],
  presets: [presetIcons()],
});
