import type { CustomFlowbiteTheme } from 'flowbite-react';

const buttonStyling: CustomFlowbiteTheme['button'] = {
    'color': {
        'primary': 'bg-[#3b82f6] text-white enabled:hover:bg-[#3b82f6]'
    },
    'base': 'font-semibold px-4 py-2 w-fit group relative flex items-stretch justify-center text-center transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none',
    'size':{
      'lg':'text-lg',
      'md': 'text-base',
    },
    'inner': {
      'isProcessingPadding': {
        'md': 'pl-8',
      }
    }
};

export default buttonStyling;
