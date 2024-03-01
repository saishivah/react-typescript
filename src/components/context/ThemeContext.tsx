import { createContext } from "react";
import { theme } from "./theme";

type ThemeContextProps = {
  children: React.ReactNode;
};
// creating a context with intital value as theme object
export const ThemeContext = createContext(theme);

// children as passed down as props for theming
export const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
