import { createContext, useContext } from "React";

export const ThemeContext = createContext({
  theamMode: "light",
  darkMode: () => {},
  lightMode: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheame() {
  return useContext(ThemeContext);
}
