import React, { useState } from "react";
import * as S from "./NoticePanel.styles";

// 공지사항 데이터
const noticeData = {
  공지사항: [
    { title: "※D-DAY※ [양현재] 2025 로스쿨 입학설명회", date: "2025.01.12" },
    { title: "[국제대학원] 누비아주 35기를 모집합니다", date: "2025.01.11" },
    { title: "유익한 방학생활 에세이 공모전", date: "2025.01.10" },
    {
      title: "[재공지][품질경영분야] 6시그마 Black Belt 자격과정",
      date: "2025.01.10",
    },
  ],
  "제휴 업체": [
    { title: "2025 신입생 OT 안내", date: "2025.01.05" },
    { title: "겨울방학 중 도서관 운영시간 변경", date: "2025.01.04" },
  ],
};

function NoticePanel() {
  const [activeTab, setActiveTab] = useState("공지사항"); // 현재 활성화된 탭

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <S.PanelContainer>
      {/* 탭 메뉴 */}
      <S.TabMenu>
        {Object.keys(noticeData).map((tab) => (
          <S.TabItem
            key={tab}
            active={activeTab === tab}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </S.TabItem>
        ))}
      </S.TabMenu>

      {/* 공지 리스트 */}
      <S.NoticeList>
        {noticeData[activeTab]?.map((notice, index) => (
          <S.NoticeItem key={index}>
            <S.Title>{notice.title}</S.Title>
            <S.Date>{notice.date}</S.Date>
          </S.NoticeItem>
        ))}
      </S.NoticeList>

      {/* 더보기 버튼 */}
      <S.MoreButton>더보기</S.MoreButton>
    </S.PanelContainer>
  );
}

export default NoticePanel;
