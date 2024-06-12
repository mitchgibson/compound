import { defineConfig } from "vitepress";

export default defineConfig({
  // Your existing config...
  srcDir: "../src",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Composables', link: '/composables' },
      { text: 'Stores', link: '/stores' }
    ],
    sidebar: [
      {
        text: "Documentation",
        items: [
          {
            text: "Composables",
            link: "/composables",
          },
          {
            text: "Stores",
            link: "/stores",
          },
        ],
      },
    ],
  },
});
