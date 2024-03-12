import React from 'react'
import Stepper from '../../components/Auth/Registeration/Stepper/Stepper';
import Register from '../../components/Auth/Registeration/Register';
import RegisterStep2 from '../../components/Auth/Registeration/RegisterStep2';
import RegisterStep3 from '../../components/Auth/Registeration/RegisterStep3';
import Footer from '../../components/Auth/Registeration/Footer/Footer';

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
          <RegisterStep3 onNext={() => { }} onPrev={prevStep} />
        )}
        <Footer />
      </div>
    );
  }

export default MultiStepRegister