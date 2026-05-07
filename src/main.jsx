import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store/configureStore.js";
import Main from "./components/Main.jsx";
import Home from "./components/Home.jsx";
import QuestionsMenu from "./components/QuestionsMenu.jsx";
import Disc from "./components/Disc.jsx";

import "./styles/app.scss";

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="questions" element={<QuestionsMenu />} />
            <Route path="disc" element={<Disc />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
