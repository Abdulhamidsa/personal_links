import Main from "../components/Main";
import React, { useEffect } from "react";
import { initGA } from "./analytics";
function Main() {
  useEffect(() => {
    initGA();
  }, []);
}
function App() {
  return (
    <>
      <Main></Main>
    </>
  );
}

export default App;
