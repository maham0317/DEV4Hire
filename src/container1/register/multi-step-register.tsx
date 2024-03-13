import React from "react";
import Stepper from "../../components1/auth/registeration/stepper/stepper";
import Register from "../../components1/auth/registeration/register";
import RegisterStep2 from "../../components1/auth/registeration/register-step2";
import RegisterStep3 from "../../components1/auth/registeration/register-step3";
import Footer from "../../components1/auth/registeration/footer/footer";

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

export default MultiStepRegister;
