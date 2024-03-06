import { Route, Routes } from "react-router-dom";
import Home from "../container/Home/Home";
import CV from "../container/Cv/CV";
import Wizard from "../container/Wizard/Wizard";
import Login from "../container/Login/Login";
import UserInfo from "../container/UserInfo/UserInfo";
import Dashboard from "../container/Dashboard/Dashboard";
import RoleList from "../container/RoleList/RoleList";
import AuthButtons from "../container/AuthButtons/AuthButtons";
import React from "react";
import Stepper from "../components/Auth/Registeration/Stepper/Stepper";
import Register from "../components/Auth/Registeration/Register";
import RegisterStep2 from "../components/Auth/Registeration/RegisterStep2";
import RegisterStep3 from "../components/Auth/Registeration/RegisterStep3";
import Footer from "../components/Auth/Registeration/Footer/Footer";

const AllRoutes = () => {
  return (
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
  );
};
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
      {currentStep === 2 && (
        <RegisterStep2 onNext={nextStep} onPrev={prevStep} />
      )}
      {currentStep === 3 && (
        <RegisterStep3 onNext={() => {}} onPrev={prevStep} />
      )}
      <Footer />
    </div>
  );
}
export default AllRoutes;
