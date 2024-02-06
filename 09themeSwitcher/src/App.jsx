import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "./context/theme";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  // name must be same
  const darkTheme = () => {
    setThemeMode("dark");
  };

  // name must be same
  const lightTheme = () => {
    setThemeMode("light");
  };

  // actual theme changing
  useEffect(() => {
    const html = document.querySelector("html");
    // remove all default as we dont know what is set by default
    html.classList.remove("dark", "light");
    // set default light
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    // Here we have direct access to Context values
    // eslint-disable-next-line no-undef
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
