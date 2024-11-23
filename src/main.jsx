import { createRoot } from "react-dom/client";
import "./assets/styles/global.css";
import App from "./App.jsx";
import { Toaster } from "sonner";
import { persistor, store } from "./stores/store.js";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Toaster position="bottom-center" richColors expand={false} />
        <App />
      </PersistGate>
    </Provider>
  </QueryClientProvider>
);