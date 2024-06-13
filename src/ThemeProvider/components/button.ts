import type { CustomFlowbiteTheme } from 'flowbite-react';

const buttonStyling: CustomFlowbiteTheme['button'] = {
    'color': {
        'primary': 'bg-[#3b82f6] text-white enabled:hover:bg-[#3b82f6]'
    },
    'base': 'font-semibold px-3 py-2 w-fit rounded',
    'size':{
      'lg':'text-lg',
      'md': 'text-base',
    },
};

export default buttonStyling;
