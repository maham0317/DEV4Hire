import React, { useState } from "react";

const CvLanguage: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="bg-gray-100 p-12 rounded">
      <div className="bg-white p-10 rounded shadow text-0.75rem">
        <h2 className="text-2xl font-bold text-[#1f0f32]">CV Language</h2>
        <p className="mt-3 text-[#332c55]">
          Choose the language in which you will fill in this CV. Your agent will
          download and print your CV with labels in the chosen language.
        </p>
        <div className="flex flex-col space-y-2 mt-4">
          <div className="flex items-center">
            <input
              type="radio"
              className="hidden"
              id="custom-radio"
              name="language"
              value="Danish"
              checked={selectedLanguage === "Danish"}
              onChange={() => handleLanguageChange("Danish")}
            />
            <label
              htmlFor="custom-radio"
              className={`flex mr-3 items-center justify-center w-6 h-6 border border-gray-300 rounded-full cursor-pointer ${
                selectedLanguage === "Danish" ? "bg-white-200" : ""
              }`}
              style={{ position: "relative" }}
            >
              {selectedLanguage === "Danish" && (
                <div className="w-3 h-3 bg-blue-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              )}
            </label>
            <span className="text-[#332c55]">Danish</span>
          </div>

          <div className="flex items-center text-[#332c55]">
            <input
              type="radio"
              className="hidden"
              id="english"
              name="language"
              value="English"
              checked={selectedLanguage === "English"}
              onChange={() => handleLanguageChange("English")}
            />
            <label
              htmlFor="english"
              className={`flex mr-5 h-6 w-6 mt-2 border border-gray-300 rounded-full cursor-pointer ${
                selectedLanguage === "English" ? "bg-white-200" : ""
              }`}
              style={{ position: "relative" }}
            >
              {selectedLanguage === "English" && (
                <div className="w-3 h-3 bg-blue-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              )}
            </label>
            <span>English</span>
          </div>

          <div className="flex items-center text-[#332c55]">
            <input
              type="radio"
              className="hidden"
              id="german"
              name="language"
              value="German"
              checked={selectedLanguage === "German"}
              onChange={() => handleLanguageChange("German")}
            />
            <label
              htmlFor="german"
              className={`flex mr-5 h-6 w-6 mt-2 border border-gray-300 rounded-full cursor-pointer ${
                selectedLanguage === "German" ? "bg-white-200" : ""
              }`}
              style={{ position: "relative" }}
            >
              {selectedLanguage === "German" && (
                <div className="w-3 h-3 bg-blue-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              )}
            </label>
            <span>German</span>
          </div>

          <div className="flex items-center text-[#332c55]">
            <input
              type="radio"
              className="hidden"
              id="norwegian"
              name="language"
              value="Norwegian"
              checked={selectedLanguage === "Norwegian"}
              onChange={() => handleLanguageChange("Norwegian")}
            />
            <label
              htmlFor="norwegian"
              className={`flex mr-5 h-6 w-6 mt-2 border border-gray-300 rounded-full cursor-pointer ${
                selectedLanguage === "Norwegian" ? "bg-white-200" : ""
              }`}
              style={{ position: "relative" }}
            >
              {selectedLanguage === "Norwegian" && (
                <div className="w-3 h-3 bg-blue-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              )}
            </label>
            <span>Norwegian</span>
          </div>

          <div className="flex items-center text-[#332c55]">
            <input
              type="radio"
              className="hidden"
              id="urdu"
              name="language"
              value="Urdu"
              checked={selectedLanguage === "Urdu"}
              onChange={() => handleLanguageChange("Urdu")}
            />
            <label
              htmlFor="urdu"
              className={`flex mr-5 h-6 w-6 mt-2 border border-gray-300 rounded-full cursor-pointer ${
                selectedLanguage === "Urdu" ? "bg-white-200" : ""
              }`}
              style={{ position: "relative" }}
            >
              {selectedLanguage === "Urdu" && (
                <div className="w-3 h-3 bg-blue-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              )}
            </label>
            <span>Urdu</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvLanguage;
