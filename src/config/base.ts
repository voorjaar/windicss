import { colors } from "./colors";
import { toType } from "../utils/tools";
import { BaseConfig } from './types'



export const baseConfig: BaseConfig = {
  darkMode: "class", // or 'media'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ...colors,
      gray: colors.coolGray,
      yellow: colors.amber,
      green: colors.emerald,
      purple: colors.violet,
      "light-blue": colors.lightBlue,
      "warm-gray": colors.warmGray,
      "true-gray": colors.trueGray,
      "cool-gray": colors.coolGray,
      "blue-gray": colors.blueGray,
    },
    spacing: {
      px: "1px",
      // float -> float/4 rem
    },
    animation: {
      none: "none",
      spin: "spin 1s linear infinite",
      ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      bounce: "bounce 1s infinite",
    },
    backgroundColor: (theme) => theme("colors"),
    backgroundImage: {
      none: "none",
      "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
      "gradient-to-tr":
        "linear-gradient(to top right, var(--tw-gradient-stops))",
      "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
      "gradient-to-br":
        "linear-gradient(to bottom right, var(--tw-gradient-stops))",
      "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
      "gradient-to-bl":
        "linear-gradient(to bottom left, var(--tw-gradient-stops))",
      "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
      "gradient-to-tl":
        "linear-gradient(to top left, var(--tw-gradient-stops))",
    },
    backgroundOpacity: (theme) => theme("opacity"),
    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
    },
    borderColor: (theme) => ({
      ...(toType(theme("colors"), "object") ?? {}),
      DEFAULT: theme("colors.gray.200", "currentColor"),
    }),
    borderOpacity: (theme) => theme("opacity"),
    borderRadius: {
      none: "0px",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      // nxl
      full: "9999px",
    },
    borderWidth: {
      DEFAULT: "1px",
      // int >=0 -> int px
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
    },
    container: {},
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      "not-allowed": "not-allowed",
    },
    divideColor: (theme) => theme("borderColor"),
    divideOpacity: (theme) => theme("borderOpacity"),
    divideWidth: (theme) => theme("borderWidth"),
    fill: (theme) => theme("colors"),
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none",
    },
    flexGrow: {
      0: "0",
      DEFAULT: "1",
    },
    flexShrink: {
      0: "0",
      DEFAULT: "1",
    },
    fontFamily: {
      sans: [
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        "ui-serif",
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif",
      ],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
      // nxl -> [n rem, lineHeight: 1]
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
      // int[0, 900] -> int
    },
    gap: (theme) => theme("spacing"),
    gradientColorStops: (theme) => theme("colors"),
    gridAutoColumns: {
      auto: "auto",
      min: "min-content",
      max: "max-content",
      fr: "minmax(0, 1fr)",
    },
    gridAutoRows: {
      auto: "auto",
      min: "min-content",
      max: "max-content",
      fr: "minmax(0, 1fr)",
    },
    gridColumn: {
      auto: "auto",
      // span-int(>=1) -> span int / span int
      "span-full": "1 / -1",
    },
    gridColumnEnd: {
      auto: "auto",
      // int >=1 -> int
    },
    gridColumnStart: {
      auto: "auto",
      // int >=1 -> int
    },
    gridRow: {
      auto: "auto",
      // span-int(>=1) -> span int / span int
      "span-full": "1 / -1",
    },
    gridRowStart: {
      auto: "auto",
      // int >=1 -> int
    },
    gridRowEnd: {
      auto: "auto",
      // int >=1 -> int
    },
    transformOrigin: {
      center: "center",
      top: "top",
      "top-right": "top right",
      right: "right",
      "bottom-right": "bottom right",
      bottom: "bottom",
      "bottom-left": "bottom left",
      left: "left",
      "top-left": "top left",
    },
    gridTemplateColumns: {
      none: "none",
      // int >=1 -> repeat(int, minmax(0, 1fr))
    },
    gridTemplateRows: {
      none: "none",
      // int >=1 -> repeat(int, minmax(0, 1fr))
    },
    height: (theme, { breakpoints }) => ({
      auto: "auto",
      ...(toType(theme("spacing"), "object") ?? {}),
      // fraction -> percent
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      // nxl
      full: "100%",
      min: "min-content",
      max: "max-content",
      prose: "65ch",
      screen: "100vh",
      ...breakpoints((toType(theme("screens"), "object") ?? {}) as {[key:string]:string}),
    }),
    inset: (theme) => ({
      auto: "auto",
      ...(toType(theme("spacing"), "object") ?? {}),
      full: "100%",
      // fraction -> percent
      // ...negative
    }),
    keyframes: {
      spin: {
        from: {
          transform: "rotate(0deg)",
        },
        to: {
          transform: "rotate(360deg)",
        },
      },
      ping: {
        "0%": {
          transform: "scale(1)",
          opacity: "1",
        },
        "75%, 100%": {
          transform: "scale(2)",
          opacity: "0",
        },
      },
      pulse: {
        "0%, 100%": {
          opacity: "1",
        },
        "50%": {
          opacity: ".5",
        },
      },
      bounce: {
        "0%, 100%": {
          transform: "translateY(-25%)",
          animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
        },
        "50%": {
          transform: "translateY(0)",
          animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
        },
      },
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      // int>=0 -> int/4 rem
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    margin: (theme) => ({
      auto: "auto",
      ...(toType(theme("spacing"), "object") ?? {}),
      // ...negative
    }),
    maxHeight: (theme, { breakpoints }) => ({
      none: "none",
      ...(toType(theme("spacing"), "object") ?? {}),
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      // nxl
      full: "100%",
      min: "min-content",
      max: "max-content",
      prose: "65ch",
      screen: "100vh",
      ...breakpoints((toType(theme("screens"), "object") ?? {}) as {[key:string]:string}),
    }),
    maxWidth: (theme, { breakpoints }) => ({
      none: "none",
      ...(toType(theme("spacing"), "object") ?? {}),
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      // nxl
      full: "100%",
      min: "min-content",
      max: "max-content",
      prose: "65ch",
      screen: "100vw",
      ...breakpoints((toType(theme("screens"), "object") ?? {}) as {[key:string]:string}),
    }),
    minHeight: (theme) => theme("maxHeight"),
    minWidth: (theme) => theme("maxWidth"),
    objectPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
    },
    opacity: {
      // float -> float/100
    },
    order: {
      first: "-9999",
      last: "9999",
      none: "0",
      // int[1, 9999]
    },
    outline: {
      none: ["2px solid transparent", "2px"],
      white: ["2px dotted white", "2px"],
      black: ["2px dotted black", "2px"],
    },
    padding: (theme) => theme("spacing"),
    placeholderColor: (theme) => theme("colors"),
    placeholderOpacity: (theme) => theme("opacity"),
    ringColor: (theme) => ({
      DEFAULT: theme("colors.blue.500", "#3b82f6"),
      ...(toType(theme("colors"), "object") ?? {}),
    }),
    ringOffsetColor: (theme) => theme("colors"),
    ringOffsetWidth: {
      // float -> float px
    },
    ringOpacity: (theme) => ({
      DEFAULT: "0.5",
      ...(toType(theme("opacity"), "object") ?? {}),
    }),
    ringWidth: {
      DEFAULT: "3px",
      // float -> float px
    },
    rotate: {
      // float[0, 360] -> float[0deg, 360deg]
      // ...negative
    },
    scale: {
      // int >=0 -> int/100
    },
    skew: {
      // float[0, 360] -> float[0deg, 360deg]
      // ...negative
    },
    space: (theme) => theme("spacing"),
    stroke: (theme) => theme("colors"),
    strokeWidth: {
      // >=0 int -> int
    },
    textColor: (theme) => theme("colors"),
    textOpacity: (theme) => theme("opacity"),
    transitionDuration: {
      DEFAULT: "150ms",
      // int >=0 -> int ms
    },
    transitionDelay: {
      // int >=0 -> int ms
    },
    transitionProperty: {
      none: "none",
      all: "all",
      DEFAULT:
        "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
      colors: "background-color, border-color, color, fill, stroke",
      opacity: "opacity",
      shadow: "box-shadow",
      transform: "transform",
    },
    transitionTimingFunction: {
      DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      linear: "linear",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    translate: (theme) => ({
      ...(toType(theme("spacing"), "object") ?? {}),
      full: "100%",
      // fraction -> percent
      // ...negative
    }),
    width: (theme, { breakpoints }) => ({
      auto: "auto",
      ...(toType(theme("spacing"), "object") ?? {}),
      // fraction -> percent
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      // nxl
      full: "100%",
      min: "min-content",
      max: "max-content",
      prose: "65ch",
      screen: "100vw",
      ...breakpoints((toType(theme("screens"), "object") ?? {}) as {[key:string]:string}),
    }),
    zIndex: {
      auto: "auto",
      // int[0, 99999] ->  int[0, 99999]
      // ...negative
    },
  },
  variantOrder: [
    "hover",
    "focus",
    "active",
    "visited",
    "link",
    "target",
    "focus-visible",
    "focus-within",
    "checked",
    "not-checked",
    "default",
    "disabled",
    "enabled",
    "indeterminate",
    "invalid",
    "valid",
    "optional",
    "required",
    "placeholder-shown",
    "read-only",
    "read-write",
    "not-disabled",
    "first-of-type",
    "not-first-of-type",
    "last-of-type",
    "not-last-of-type",
    "first",
    "last",
    "not-first",
    "not-last",
    "only-child",
    "not-only-child",
    "only-of-type",
    "not-only-of-type",
    "even",
    "odd",
    "even-of-type",
    "odd-of-type",
    "root",
    "empty",
    "before",
    "after",
    "first-letter",
    "first-line",
    "selection",
    "svg",
    "all",
    "all-child",
    "sibling",
    "group-hover",
    "group-focus",
    "group-active",
    "group-visited",
    "motion-safe",
    "motion-reduce",
  ],
  plugins: [],
  prefix: ''
};
