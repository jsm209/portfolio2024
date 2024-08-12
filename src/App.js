import "./App.css";

import GLOBALSTYLES from "./styles/globalStyles";
import LandingSection from "./components/LandingSection/LandingSection";

function App() {
  const styleVariables = {
    "--text-color": GLOBALSTYLES.colors.primary,
    "--background-color": GLOBALSTYLES.colors.background,
    "--p-font-size": GLOBALSTYLES.typography.fontSizeBase,
    "--font-family": GLOBALSTYLES.typography.fontFamily,
  };

  return (
    <div className="App" style={styleVariables}>
      <LandingSection />
    </div>
  );
}

export default App;
