import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import { createTheme } from "@mantine/core";

const theme = createTheme({
  colors: {
    brand: [
      "#FFFFFF",
      "#ffe2bf",
      "#ffcf99",
      "#ffbb73",
      "#ffa84d",
      "#ff9500",
      "#e68600",
      "#cc7700",
      "#b36800",
      "#995900",
    ],
    gray: [
      "#B3B3B3",
      "#d9d9d9",
      "#bfbfbf",
      "#a6a6a6",
      "#8c8c8c",
      "#F7F7F8",
      "#595959",
      "#404040",
      "#262626",
      "#0d0d0d",
    ],
  },
  primaryColor: "brand",
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
});

createRoot(document.getElementById("root")!).render(
  <MantineProvider theme={theme}>
    <App />
    );
  </MantineProvider>
);
