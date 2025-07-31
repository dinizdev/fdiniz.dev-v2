/** @type {import('tailwindcss').Config} */
export const content = [
  './components/**/*.{js,ts,vue}',
  './layouts/**/*.{js,ts,vue}',
  './pages/**/*.{js,ts,vue}',
  './plugins/**/*.{js,ts}',
  './app.vue',
  './error.vue',
  './nuxt.config.{js,ts}'
];
export const theme = {
  extend: {
    colors: {
      'bg-primary': '#08070B', // Example primary color
    },
  },
};
export const plugins = [];
