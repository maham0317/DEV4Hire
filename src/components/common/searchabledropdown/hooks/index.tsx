import { useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface UseSearchableDropdownOptions {
  options?: Option[];
  onChange: (selectedOption: Option | null) => void;
}

export const useSearchableDropdown = ({
  options = [], 
  onChange,
}: UseSearchableDropdownOptions) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOptionClick = (option: Option) => {
    onChange(option);
    setIsOpen(false);
    setSearchTerm(option.label);
  };

  const handleInputClick = () => {
    setIsOpen(!isOpen);
  };

  const handleInputFieldClick = () => {
    if (!isOpen) {
      handleInputClick(); 
    }
  };

  const handleOptionSelect = (option: Option) => {
    handleOptionClick(option);
    setIsOpen(false); 
  };

  return { searchTerm, isOpen, setSearchTerm, setIsOpen, filteredOptions, handleInputFieldClick, handleOptionSelect, handleOptionClick, handleInputClick };
};
