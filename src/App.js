import React from "react";
import AppRouter from "./router.jsx";
import GlobalStyle from "./GlobalStyle";
import NoticePopup from "./NoticePopup.jsx";

function App() {
  return (
    <>
      <GlobalStyle />{" "}
      <div className="App">
        <NoticePopup />
        <AppRouter />
      </div>
    </>
  );
}

export default App;
