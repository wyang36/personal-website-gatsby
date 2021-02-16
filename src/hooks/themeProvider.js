import React, { useState, createContext } from 'react';
import { getSeasonByMonth } from '../utils/datetime';
import * as themes from '../styles';

export const themeContext = createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes[getSeasonByMonth()]);

  const handleThemeSwitch = () => {
    setTheme((currTheme) => themes[currTheme.next]);
  };

  return (
    <themeContext.Provider
      value={{
        theme,
        handleThemeSwitch,
      }}
    >
      {props.children}
    </themeContext.Provider>
  );
};

export default ({ element }) => <ThemeProvider>{element}</ThemeProvider>;
