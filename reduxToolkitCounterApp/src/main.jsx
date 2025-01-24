import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/store"; // Ensure this path points to your store configuration file
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
