import {createContext, useContext, useState} from "react";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {

  const [state, setState] = useState({
    isOpen: false,
    // Type can be either "success" or "error"
    type: 'success',
    // Message to be displayed, can be any string
    message: '',
  });

  const [language, setLanguage ] = useState("EN");

  const toggleLanguage = () => {
    setLanguage((prev) => {
      if (prev === "EN") return "ES";
      if (prev === "ES") return "DE";
      return "EN";
    });
  };

  const [colorMode, setColorMode] = useState(false);
  
  const toggleColorMode = () => {
    setColorMode((prev) => (!prev));
  };

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message) => setState({ isOpen: true, type, message }),
        onClose: () => setState({ isOpen: false, type: '', message: '' }),
        language,
        toggleLanguage,
        colorMode,
        toggleColorMode,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
