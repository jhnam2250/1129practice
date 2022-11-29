import { createGlobalStyle } from "styled-components";
import BackgroundPic from "./components/BackgroundPic";
import Audio from "./components/Audio";

const GlobalStyle = createGlobalStyle``;

function App() {
  return (
    <>
      <GlobalStyle />
      <Audio></Audio>
      <BackgroundPic></BackgroundPic>
    </>
  );
}

export default App;
