// shadow src/gatsby-plugin-theme-ui/index.js
// import base from "gatsby-theme-ui-blog/src/gatsby-plugin-theme-ui"
import nightOwl from "@theme-ui/prism/presets/night-owl.json"
import parnassus from "typography-theme-parnassus"
import merge from "deepmerge"
import { toTheme } from "@theme-ui/typography"
import { mix, darken, lighten } from "@theme-ui/color"

export default merge(toTheme(parnassus), {
  // ...base,
  // useColorSchemeMediaQuery: true,
  // useCustomProperties: true,
  colors: {
    primary: "#326AFF",
    secondary: "#7790CC",
    text: "hsl(0, 0%, 10%)",
    background: "white",
    modes: {
      dark: {
        primary: "#326AFF",
        text: "hsl(255, 0%,95%)",
        background: "hsl(0, 0%, 5%)",
      },
    },
  },

  breakpoints: ["40em", "56em", "64em"],

  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
    monospace: "monospace",
  },

  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
  },

  layout: {
    container: {
      p: [2, 3, 4], // this should work but doesn't?
    },
  },

  buttons: {
    primary: {
      bg: "text",
      color: "background",
      cursor: "pointer",
    },
    icon: {
      "&:hover": {
        opacity: 1,
      },
      cursor: "pointer",
    },
  },

  links: {
    button: {
      p: 2,
      bg: "primary",
      color: "background",
      textDecoration: "none",
      fontFamily: "heading",
      fontWeight: "normal",
    },
    navlink: {
      height: "100%",
      color: "background",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      mr: 2,
    },
  },

  styles: {
    a: {
      textDecoration: "none",
      color: "primary",
    },
    pre: {
      overflow: "auto",
      mx: [-2, 0],
    },
    blockquote: {
      fontStyle: "italic",
      fontSize: "110%",
      borderLeft: "2px solid",
      borderColor: "black",
      ml: 0,
      pl: 3,
    },
    root: {
      code: {
        bg: "#f1f1f1",
        p: "3px 7px",
        fontFamily: "monospace",
        fontSize: "90%",
      },
      ul: {
        listStyleType: "disc",
        ml: 2,
      },
      ol: {
        listStyleType: "decimal",
        ml: 2,
        // listStylePosition: "inside",
      },
      "em, i": {
        fontStyle: "italic",
      },
      color: "text",
      article: {
        a: {
          textDecoration: "underline",
        },
      },
    },
    ul: {
      ml: 0,
    },
    code: {
      ...nightOwl,
      fontFamily: "monospace",
    },
  },
})
