
import { Provider } from 'react-redux';



import React, { ChangeEvent } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTranslation, I18nextProvider } from "react-i18next";
import i18n from 'i18next';
import  Login  from './components/Auth/Login/Login';
import Register from './components/Auth/Registeration/Register';
import  RegisterStep2  from './components/Auth/Registeration/RegisterStep2';
import  RegisterStep3  from './components/Auth/Registeration/RegisterStep3';
import  Stepper  from './components/Auth/Registeration/Stepper/Stepper';
import AuthButtons from './components/Auth/AuthButtons';
import Home from './components/Home/Home';
import CV from './components/CV/CV';
import  Footer  from './components/Auth/Registeration/Footer/Footer';



 import Wizard from './components/Wizard/Wizard';


import Dashboard from './components/Admin/Dashboard/Dashboard';
import UserInfo from './components/Admin/UserInfo/UserInfo';
import RoleList from './components/Admin/Role/RoleList/RoleList';


function App() {

  const { t, i18n } = useTranslation();
  console.log("i18n instance in App:", i18n);

  
  const changeLanguageHandler = (e: ChangeEvent<HTMLSelectElement>) => {

    const languageValue = e.target.value;
    console.log('Language changed to:', languageValue);
    i18n.changeLanguage(languageValue);
  };
 
  console.log('i18n instance:', i18n);
  
 


  return (
    <Router>
      <I18nextProvider i18n={i18n}>

        <div className="App">
          <select
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            style={{ width: '200px' }}
            onChange={changeLanguageHandler}
          >
            <option value="en-US">English</option>
            <option value="no-NO">Norwegian</option>
          </select>
        </div>
      </I18nextProvider>

      <div className="App">
        <nav></nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CV" element={<CV />} />
           <Route path="/Wizard" element={<Wizard />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/register/*" element={<MultiStepRegister />} />
          <Route path="/auth-buttons" element={<AuthButtons />} />
 
     
          <Route path="/user-info" element={<UserInfo />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/role-list" element={<RoleList />} />

        </Routes>
      </div>
      
    </Router>
  );
}

function MultiStepRegister() {
  const [currentStep, setCurrentStep] = React.useState(1);

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="App">
      <Stepper currentStep={currentStep} />
      {currentStep === 1 && <Register onNext={nextStep} />}
      {currentStep === 2 && <RegisterStep2 onNext={nextStep} onPrev={prevStep} />}
      {currentStep === 3 && <RegisterStep3 onNext={() => {}} onPrev={prevStep} />}
<Footer/>

    </div>
  );
}

export default App;
