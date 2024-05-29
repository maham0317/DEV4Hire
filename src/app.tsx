import "./app.css";
import { Provider } from "react-redux";
import { ChangeEvent, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useTranslation, I18nextProvider } from "react-i18next";
import AllRoutes from "@/navigation/routes";
import { store } from "@/store/store";
import { ToastContainer } from "react-toastify";
import { Config } from "./config";
import { Flowbite } from "flowbite-react";
import { customTheme } from "@/ThemeProvider";

function App() {
  const [isShellOpen, setIsShellOpen] = useState(false);

  const toggleShell = () => {
    setIsShellOpen((prevState) => !prevState);
  };

  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const languageValue = e.target.value;
    console.log("Language changed to:", languageValue);
    i18n.changeLanguage(languageValue);
  };
  console.log("app...");

  return (
    <Provider store={store}>
      <Flowbite theme={{ theme: customTheme }}>
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

            <ToastContainer
              position="top-right"
              autoClose={Config.Toast.DelayInMs}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              style={{ width: "400px", height: "200px" }}
            />

            <div id="page-wrapper">
              <AllRoutes />
            </div>
          </I18nextProvider>
        </Router>
      </Flowbite>
    </Provider>
  );
}

export default App;
