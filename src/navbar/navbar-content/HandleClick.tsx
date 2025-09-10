import type {ReactNode} from "react";
import { createContext, useContext, useState} from "react";

type ThemeContextType = {
  light: boolean;
  toggleTheme: () => void;
};

// 1. Crear el contexto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 2. Provider: envuelve la App y maneja el estado
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [light, setLight] = useState<boolean>(true);

  const toggleTheme = () => {
    setLight((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ light, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom hook para consumir el contexto
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe usarse dentro de <ThemeProvider>");
  }
  return context;
}
