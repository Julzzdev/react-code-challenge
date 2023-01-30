import { createContext, useState } from 'react'

const ThemeContext = createContext()

function Provider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false)

  const valueToShare = {
    darkTheme,
    toggleTheme: () => {
      setDarkTheme((prevValue) => !prevValue)
    },
  }

  return (
    <ThemeContext.Provider value={valueToShare}>
      {children}
    </ThemeContext.Provider>
  )
}

export { Provider }
export default ThemeContext
