import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";
import { AnimatePresence } from "framer-motion";
import MoonLoader from "react-spinners/MoonLoader";

const LoadingComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return loading ? (
    <div className="loader-container">
      <MoonLoader color={'#d66736'} loading={loading} size={100} />
    </div>
  ) : null;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <AnimatePresence>
          <LoadingComponent />
          <App />
        </AnimatePresence>
      </Provider>
    </Router>
  </React.StrictMode>
);