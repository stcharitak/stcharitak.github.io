import BackgroundImage from "./components/BackgroundImage";
import MainContainer from "./components/MainContainer";
import Preloader from "./components/Preloader";
import ScrollButton from "./components/ScrollButton";

function App() {
  return (
    <>
      <BackgroundImage />
      <Preloader />
      <ScrollButton />
      <MainContainer />
    </>
  );
}

export default App;
