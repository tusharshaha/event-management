import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./Contexts/AuthContext.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <QueryClientProvider client={queryClient}>
      <Router>
        <React.StrictMode>
          <App />
          <Toaster />
        </React.StrictMode>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  </AuthContextProvider>
);
