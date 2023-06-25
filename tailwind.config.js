// tailwind.config.js
module.exports = {
  future: {},
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: [
        "Source Sans Pro",
        `-apple-system`,
        `system-ui`,
        `BlinkMacSystemFont`,
        `Segoe UI`,
        `Roboto`,
        `Helvetica Neue`,
        `Arial`,
        `sans-serif`,
      ],
      serif: [
        `-apple-system`,
        `system-ui`,
        `BlinkMacSystemFont`,
        `Segoe UI`,
        `serif`,
      ],
      mono: [
        `ui-monospace`,
        `SFMono-Regular`,
        `Menlo`,
        `Monaco`,
        `Consolas`,
        `Liberation Mono`,
        `Courier New`,
        `monospace`,
      ],
    },
    extend: {
      colors: {
        primary: `#00ccbd`,
        secondary: `#2d3748`,
        dark: `#212529`,
        plum: `#CCA4C9`,
        violet: `#512E4F`,
        darkviolet: `#3A0C39`,
        lime: `#C2FE0C`,
        mindaro: `#EAFC88`,
      },
      lineHeight: {
        base: `1.2`,
      },
    },
  },
  variants: {},
  plugins: [],
}