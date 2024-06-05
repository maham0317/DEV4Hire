import { FC } from "react";
import { useSearchableDropdown } from "./hooks";
import { FaAngleDown } from "react-icons/fa";

interface Option {
  value: number;
  label: string;
}

interface SearchableDropdownProps {
  options: Option[];
  onChange: (selectedOption: Option | null) => void;
  fetchParentOptions: (filters: any) => void;
  placeholder?: string;
}

const SearchableDropdown: FC<SearchableDropdownProps> = ({ options, onChange, fetchParentOptions, placeholder }) => {
  const {
    searchTerm,
    isOpen,
    setSearchTerm,
    filteredOptions,
    handleInputFieldClick,
    handleOptionSelect,
    handleInputClick,
  } = useSearchableDropdown({ options, onChange, fetchParentOptions });

  return (
    <div className="relative">
      <div 
        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        onClick={handleInputClick}
      >
        {searchTerm || placeholder || 'Select option...'}
      </div>
      {isOpen && (
        <ul className="mt-1 absolute z-10 w-full bg-white border border-gray-300">
          <input
            type="text"
            className="block w-full px-4 py-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {filteredOptions.length > 0 ? (
            filteredOptions.map(option => (
              <li
                key={option.value}
                onClick={() => handleOptionSelect(option)}
                className="p-2 hover:bg-gray-200 cursor-pointer"
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
