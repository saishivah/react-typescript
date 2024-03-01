import { createContext } from "react";
import { theme } from "./theme";
// change as per requirement
const customTheme = {
  secondary: {
    main: "white", // Changed key from 'background' to 'main'
    text: "black",
  },
  primary: {
    main: "black",
    text: "white",
  },
};

type ThemeContextProps = {
  children: React.ReactNode;
};
// creating a context with intital value as theme object
export const ThemeContext = createContext(theme);

// children as passed down as props for theming
export const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  return (
    <ThemeContext.Provider value={customTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
