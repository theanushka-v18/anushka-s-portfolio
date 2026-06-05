import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { store } from "./store";
import { theme } from "./theme";
import "./index.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <MantineProvider theme={theme} forceColorScheme="dark" defaultColorScheme="dark" withGlobalStyles withNormalizeCSS>
        <App />
      </MantineProvider>
    </Provider>
  </StrictMode>
);
