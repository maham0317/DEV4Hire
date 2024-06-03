import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { useSearchableDropdown } from "./hooks";

interface Option {
  value: string;
  label: string;
}

interface SearchableDropdownProps {
  options: Option[];
  onChange: (selectedOption: Option | null) => void;
  placeholder?: string;
}

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  options = [], // Provide a default value
  onChange,
  placeholder,
}) => {
  const { searchTerm, isOpen, filteredOptions, setSearchTerm, handleOptionSelect, handleInputClick } = useSearchableDropdown({ options, onChange });

  return (
    <div className="relative">
      <div 
        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        onClick={handleInputClick}
      >
         {searchTerm || placeholder || 'Select option...'}
      </div>
      {isOpen && (
        <ul className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          <input
            type="text"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <li
                key={option.value}
                className="cursor-pointer relative py-2 pl-3 pr-9 hover:bg-indigo-600 hover:text-white"
                onClick={() => handleOptionSelect(option)}
              >
                {option.label}
              </li>
            ))
          ) : (
            <li className="cursor-pointer relative py-2 pl-3 pr-9 text-gray-500">
              No options found
            </li>
          )}
        </ul>
      )}
      <span className="absolute inset-y-0 right-0 flex items-center pr-3">
        <FaAngleDown
          className={`text-gray-400 cursor-pointer ${isOpen ? 'transform rotate-180' : ''}`}
          onClick={handleInputClick}
        />
      </span>
    </div>
  );
};

export default SearchableDropdown;
