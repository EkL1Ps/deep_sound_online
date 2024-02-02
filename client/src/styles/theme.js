import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  // pallette: {
  //     primary:{
  //         main: "#a18a68",
  //     },
  // },
  // Настройки темы Material-UI

  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*": {
          boxSizing: "border-box",
        },
        "*::before, *::after": {
          boxSizing: "border-box",
        },
        html: {
          height: "100%",
        },
        body: {
          height: "100%",
          margin: 0,
        },
        "img, picture, video, canvas, svg": {
          maxWidth: "100%",
        },
        // Другие глобальные стили...
      },
    },
  },
});
