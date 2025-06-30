import { useEffect, useState } from "react";
import themes from "../components/styles/themes";
import { setToLS, getFromLS } from "../utils/storage";
import { DefaultTheme } from "styled-components";

export const useTheme = () => {
  const [theme, setTheme] = useState<DefaultTheme>(themes.ubuntu);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode: DefaultTheme) => {
    setToLS("tsn-theme", mode.name);
    setTheme(mode);
  };

  useEffect(() => {
  if (!getFromLS("tsn-theme")) {
    setToLS("tsn-theme", "ubuntu"); // change to your desired default theme
  }

  const localThemeName = getFromLS("tsn-theme");
  localThemeName ? setTheme(themes[localThemeName]) : setTheme(themes.ubuntu); // set default here too
  setThemeLoaded(true);
}, []);


  return { theme, themeLoaded, setMode };
};
