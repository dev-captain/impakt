import { ThemeOverride, extendTheme, theme as base } from "@chakra-ui/react";

const theme: ThemeOverride = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  colors: {
    brand: {},
  },

  fonts: {
    heading: `Poppins ,${base.fonts?.heading}`,
    body: `Poppins ,${base.fonts?.body}`,
  },

  components: {},
};

export default extendTheme(theme);
