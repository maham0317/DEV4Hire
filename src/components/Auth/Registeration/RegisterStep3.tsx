import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useTranslation } from 'react-i18next';

interface RegisterStep3Props {
  onNext: () => void;
  onPrev: () => void;
}

export const RegisterStep3: React.FC<RegisterStep3Props> = (props) => {
  const { t } = useTranslation();
  const [captchaResponse, setCaptchaResponse] = useState<string | null>(null);

  const handleCaptchaChange = (response: string | null) => {
    setCaptchaResponse(response);
  };

  const handleSubmit = () => {
    if (captchaResponse) {
      console.log('Form submitted with reCAPTCHA response:', captchaResponse);
    } else {
      console.log('Please complete the reCAPTCHA before submitting.');
    }
  };

  return (
    <div>
      
                <div className="flex justify-center pb-48  items-center min-h-screen  text-sm">
                <div className="bg-white p-8  rounded mb-5 shadow-md w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className=" tracking-wide   text-[#332c55] mb-2" htmlFor="grid-specialization">
              {t('DoYouWantToAdd')}
              </label> 
            
              <input
            className="appearance-none block mt-2 w-full bg-white-200 text-gray-700 border border-gray-200 rounded h-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="text"
            placeholder={t('InfoPlaceholder')}
          />
          
         
            
              </div>
              
              
        
         
            </div>
            <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="relative float-left  -ml-[1.5rem] mr-1 mt-4 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label
                className="mt-3 inline-block pl-[0.15rem] text-[#332c55] hover:cursor-pointer"
                htmlFor="inlineRadio1"
              >
              {t('AcceptTermsLabel')}
              </label>
              <span className="mt-px inline-block mb-3 pl-[0.15rem] hover:cursor-pointer text-blue-500">
                <span className="font-semibold">{t('PolicyLabel')}</span>
              </span>
            </div>
        <div className='ml-4'>
        {/* reCAPTCHA */}
        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Pending.. Replace with your reCAPTCHA Site Key
          onChange={handleCaptchaChange}
        />
        </div>

 <div className="flex justify-between items-center mt-4">
  <button
    type="button"
    onClick={props.onPrev} 
    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-none rounded"
  >
    <span className="mr-2">
      <i className="fas fa-arrow-left"></i>
    </span>
    {t('Back')}
  </button>
  <button
    type="submit" 
    className="mt-px inline-block px-3 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
 {t('SubmitButton')}
  </button>
 
</div>
      </div>
    </div>
    </div>
  );
};
export default RegisterStep3;