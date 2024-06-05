import { useState, useMemo, useEffect } from "react";

interface Option {
  value: number;
  label: string;
}

interface UseSearchableDropdownOptions {
  options?: Option[];
  onChange: (selectedOption: Option | null) => void;
  fetchParentOptions: (filters: any) => void;
}

export const useSearchableDropdown = ({
  options = [],
  onChange,
  fetchParentOptions
}: UseSearchableDropdownOptions) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchParentOptions({ SearchTerm: searchTerm, PageSize: 2, CurrentPage: 1 }); // Set page size and current page here
  }, [searchTerm, fetchParentOptions]);

  const filteredOptions = useMemo(() => {
    return options.filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [options, searchTerm]);

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

  return {
    searchTerm,
    isOpen,
    setSearchTerm,
    setIsOpen,
    filteredOptions,
    handleInputFieldClick,
    handleOptionSelect,
    handleOptionClick,
    handleInputClick,
  };
};
