import nightOwl from "@theme-ui/prism/presets/night-owl"
import parnassus from "typography-theme-parnassus"
import merge from "deepmerge"
import { toTheme } from "@theme-ui/typography"

export default merge(toTheme(parnassus), {
  colors: {
    primary: "#326AFF",
    secondary: "#7790CC",
    text: "hsl(0, 0%, 10%)",
    background: "white",
  },

  breakpoints: ["40em", "56em", "64em"],

  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
    monospace: "Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace",
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
    secondary: {
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
    socialLink: {
      display: "flex",
      alignItems: "center",
      color: "primary",
      textDecoration: "none",
      mr: "45px",
      pt: [1, 0],
      svg: { mr: 1 },
    },
  },

  styles: {
    a: {
      textDecoration: "none",
      color: "primary",
    },
    pre: {
      overflow: "auto",
      mx: [-3, 0],
      borderRadius: [0, 3],
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
        fontFamily: "monospace",
        bg: "#f1f1f1",
        color: "text",
        padding: "2px 4px",
        fontSize: "85%",
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
      article: {},
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
