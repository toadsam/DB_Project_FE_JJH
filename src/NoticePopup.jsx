import React, { useState, useEffect } from "react";
import styled from "styled-components";

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const PopupContainer = styled.div`
  background: #fff;
  width: 300px;
  max-width: 80%;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

const PopupTitle = styled.h2`
  margin-top: 0;
  font-size: 18px;
  color: #333;
`;

const PopupMessage = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.4;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  background: #007aff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #005bb5;
  }
`;

function NoticePopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // 사이트 최초 접속 시 팝업을 보여주고,
    // 닫은 후에는 다시 열리지 않도록 localStorage 등에 기록할 수 있음
    const isClosed = localStorage.getItem("noticePopupClosed");
    if (!isClosed) {
      setVisible(true);
    }
  }, []);

  const handleClose = () => {
    // '닫기'를 누르면 localStorage에 기록하고 팝업을 닫음
    localStorage.setItem("noticePopupClosed", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <PopupOverlay>
      <PopupContainer>
        <PopupTitle>안내 드립니다.</PopupTitle>
        <PopupMessage>
          본 사이트는 주로 데스크톱(PC) 환경에 맞춰 개발되었습니다.
          <br />
          모바일 기기 이용 시 일부 기능이 제한되거나
          <br />
          화면 레이아웃이 달라질 수 있습니다.
          <br />
          원활한 이용을 위해 가급적 데스크톱 환경에서 접속해 주시기 바랍니다.
        </PopupMessage>
        <CloseButton onClick={handleClose}>닫기</CloseButton>
      </PopupContainer>
    </PopupOverlay>
  );
}

export default NoticePopup;
