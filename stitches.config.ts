import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";
export type { VariantProps } from "@stitches/react";

export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
  reset,
} = createStitches({
  media: {
    bp1: "(min-width: 520px)",
    bp2: "(min-width: 900px)",
    bp3: "(max-width: 1080px)",
    bp4: "(max-width: 720px)",
    bp5: "(min-width: 1200px)",
    bp6: "(min-width: 1800px)",
    bp7: "(max-width: 900px)",
    bp8: "(min-width: 1500px)",
    motion: "(prefers-reduced-motion)",
    hover: "(any-hover: hover)",
    dark: "(prefers-color-scheme: dark)",
    light: "(prefers-color-scheme: light)",
  },
  theme: {
    colors: {
      light: "#FFFFFF",
      dark: "#0B0B0F",
      grayLight: "#898CA9",
      grayDark: "#2B2C3B",
      grayDarker: "#1A1B23",
      greenLighter: "rgb(3, 166, 109)",
      danger: "#CF304A",
      warning: "#ffc107",
      purple: "#B982FF",
      salmon: "#FEDCC5",
      background: "#f5f5f9",
      text: "rgb(105, 122, 141)",
    },

    space: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
      7: "45px",
      8: "65px",
      9: "80px",
    },
    sizes: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
      7: "45px",
      8: "65px",
      9: "80px",
    },
    fontSizes: {
      1: "12px",
      2: "13px",
      3: "15px",
      4: "17px",
      5: "19px",
      6: "21px",
      7: "27px",
      8: "35px",
      9: "59px",
    },
    fonts: {
      general: "Raleway" || "sans-serif",
      price: "Inter" || "sans-serif",
    },
  },
  utils: {
    p: (value: Stitches.PropertyValue<"padding">) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<"paddingRight">) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<"paddingBottom">) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<"margin">) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<"marginRight">) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<"marginTop">) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value: Stitches.PropertyValue<"textAlign">) => ({ textAlign: value }),

    fd: (value: Stitches.PropertyValue<"flexDirection">) => ({
      flexDirection: value,
    }),
    fw: (value: Stitches.PropertyValue<"flexWrap">) => ({ flexWrap: value }),

    ai: (value: Stitches.PropertyValue<"alignItems">) => ({
      alignItems: value,
    }),
    ac: (value: Stitches.PropertyValue<"alignContent">) => ({
      alignContent: value,
    }),
    jc: (value: Stitches.PropertyValue<"justifyContent">) => ({
      justifyContent: value,
    }),
    as: (value: Stitches.PropertyValue<"alignSelf">) => ({ alignSelf: value }),
    fg: (value: Stitches.PropertyValue<"flexGrow">) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<"flexShrink">) => ({
      flexShrink: value,
    }),
    fb: (value: Stitches.PropertyValue<"flexBasis">) => ({ flexBasis: value }),

    bc: (value: Stitches.PropertyValue<"backgroundColor">) => ({
      backgroundColor: value,
    }),

    br: (value: Stitches.PropertyValue<"borderRadius">) => ({
      borderRadius: value,
    }),
    btrr: (value: Stitches.PropertyValue<"borderTopRightRadius">) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: Stitches.PropertyValue<"borderBottomRightRadius">) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: Stitches.PropertyValue<"borderBottomLeftRadius">) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: Stitches.PropertyValue<"borderTopLeftRadius">) => ({
      borderTopLeftRadius: value,
    }),

    bs: (value: Stitches.PropertyValue<"boxShadow">) => ({ boxShadow: value }),

    lh: (value: Stitches.PropertyValue<"lineHeight">) => ({
      lineHeight: value,
    }),

    ox: (value: Stitches.PropertyValue<"overflowX">) => ({ overflowX: value }),
    oy: (value: Stitches.PropertyValue<"overflowY">) => ({ overflowY: value }),

    pe: (value: Stitches.PropertyValue<"pointerEvents">) => ({
      pointerEvents: value,
    }),
    us: (value: Stitches.PropertyValue<"userSelect">) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    userSelect: (value: Stitches.PropertyValue<"userSelect">) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: Stitches.PropertyValue<"width">) => ({
      width: value,
      height: value,
    }),

    appearance: (value: Stitches.PropertyValue<"appearance">) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: Stitches.PropertyValue<"backgroundClip">) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
});

export type CSS = Stitches.CSS<typeof config>;

export const darkTheme = createTheme("dark-theme", {});
