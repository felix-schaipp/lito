import React, { ReactChild, ReactChildren, useState } from 'react'
import { useContext } from 'react'

const ThemeContext = React.createContext(false)
const ThemeUpdateContext = React.createContext(() => {})

export function useTheme(): boolean {
  return useContext(ThemeContext)
}

export function useThemeUpdate(): () => void {
  return useContext(ThemeUpdateContext)
}

interface ThemeProviderProps {
  children: ReactChild | ReactChildren
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDarkTheme, setDarkTheme] = useState(false)

  function toggleTheme(): void {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }
  return (
    <ThemeContext.Provider value={isDarkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}
