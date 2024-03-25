import { Provider } from "react-redux";
import React, { ChangeEvent, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTranslation, I18nextProvider } from "react-i18next";
import AllRoutes from "./navigation/routes";
import { store } from "./store/store";
import Sidebar from "./components/sidebar/sidebar";
import "./app.css";
import Navbar from "./components/header/navbar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };
  const { t, i18n } = useTranslation();
  console.log("i18n instance in App:", i18n);

  const changeLanguageHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const languageValue = e.target.value;
    console.log("Language changed to:", languageValue);
    i18n.changeLanguage(languageValue);
  };

  console.log("i18n instance:", i18n);
  return (
    <Provider store={store}>
      <Router>
        <I18nextProvider i18n={i18n}>
          <div className="App">
            <select
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              style={{ width: "200px" }}
              onChange={changeLanguageHandler}
            >
              <option value="en-US">English</option>
              <option value="no-NO">Norwegian</option>
            </select>
          </div>
        </I18nextProvider>
        <div className="flex">
          <Sidebar open={isSidebarOpen} />
          <div id="page-wrapper" className="w-10/12">
            <Navbar toggleSidebar={toggleSidebar} />
            <AllRoutes />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
