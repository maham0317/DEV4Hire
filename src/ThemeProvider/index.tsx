import type { CustomFlowbiteTheme } from 'flowbite-react';
import modalStyling from './components/modal';
import buttonStyling from './components/button';
import textInputStyling from './components/textInput';

export const customTheme: CustomFlowbiteTheme = {
    modal: modalStyling,
    button: buttonStyling,
    textInput: textInputStyling,
};