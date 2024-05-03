import React, { useEffect } from "react";
import Content from "../components/Content";
import { initGA } from "./analytics";
function App() {
  useEffect(() => {
    initGA();
  }, []);
  return (
    <>
      <Content></Content>
    </>
  );
}

export default App;
