import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FlagProvider } from "@unleash/proxy-client-react";
import "uikit/dist/js/uikit";
import "uikit/dist/js/uikit-icons";
import App from "./App.tsx";
import "uikit/dist/css/uikit.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { config } from "./config";

async function enableMocking() {
  // if (process.env.NODE_ENV !== "production") {
  //   return;
  // }

  const { worker } = await import("./mock/browser.ts");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() =>
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <FlagProvider config={config}>
        <App />
      </FlagProvider>
    </StrictMode>
  )
);
