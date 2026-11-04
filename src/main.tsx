import { createRoot } from "react-dom/client";
// Fuentes autoalojadas: se empaquetan con la web, sin peticiones a Google.
import "@fontsource-variable/inter/wght.css";
import "@fontsource-variable/playfair-display/wght.css";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
