import "./App.css";

import GLOBALSTYLES from "./styles/globalStyles";
import LandingSection from "./components/LandingSection/LandingSection";
import Timeline from "./components/Timeline/Timeline";
import MusicSection from "./components/MusicSection/MusicSection";

function App() {
  const styleVariables = {
    "--text-color": GLOBALSTYLES.colors.primary,
    "--secondary-color": GLOBALSTYLES.colors.secondary,
    "--background-color": GLOBALSTYLES.colors.background,
    "--content-font-size": GLOBALSTYLES.typography.fontSizeBase,
    "--font-family": GLOBALSTYLES.typography.fontFamily,
    "--title-font-size": GLOBALSTYLES.typography.fontSizeExtraLarge,
    "--title-bold-weight": GLOBALSTYLES.typography.fontWeightBold,
    "--heading-font-size": GLOBALSTYLES.typography.fontSizeLarge,
    "--subheading-font-size": GLOBALSTYLES.typography.fontSizeBase,
  };

  return (
    <div className="App" style={styleVariables}>
      <LandingSection />
      <Timeline />
      <MusicSection />
    </div>
  );
}

export default App;
