import "./App.css";
import { Header } from "./components/Header/Header";
//import { useEffect } from "react";
function App() {
  /*  const get = async () => {
    const response = await fetch(
      "http://localhost/2KPDonate/src/Server/getData.php"
    );
    const text = await response.text();
    console.log(text);
  };
  useEffect(() => {
    get();
  }, []);*/
  return (
    <>
      <Header />
    </>
  );
}

export default App;
