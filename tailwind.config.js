/**
 * Tailwind CSS v4 Configuration
 * Note: Most configuration is now done via CSS with @theme directive
 * This file is optional but can be used for content scanning paths
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
}
