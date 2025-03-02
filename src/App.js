import React from "react";
import AppRouter from "./router.jsx";
import GlobalStyle from "./GlobalStyle";
import NoticePopup from "./NoticePopup.jsx";
import styled from "styled-components";
const MobileOnlyWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

// 사용 예
function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <MobileOnlyWrapper>
          <NoticePopup />
        </MobileOnlyWrapper>
        <AppRouter />
      </div>
    </>
  );
}

export default App;
