import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // react-router-dom import
import * as S from "./NoticePanel.styles";

// 공지사항 데이터
const noticeData = {
  공지사항: [
    {
      id: 12,
      title: "※D-DAY※ [양현재] 2025 로스쿨 입학설명회",
      date: "2025.01.12",
    },
    {
      id: 11,
      title: "[국제대학원] 누비아주 35기를 모집합니다",
      date: "2025.01.11",
    },
    { id: 10, title: "유익한 방학생활 에세이 공모전", date: "2025.01.10" },
    {
      id: 9,
      title: "[재공지][품질경영분야] 6시그마 Black Belt 자격과정",
      date: "2025.01.10",
    },
    { id: 8, title: "학생회 주최 겨울 방학 문화 프로그램", date: "2025.01.09" },
    { id: 7, title: "장학금 신청 마감일 안내", date: "2025.01.08" },
  ],
  "제휴 업체": [
    { id: 6, title: "2025 신입생 OT 안내", date: "2025.01.05" },
    { id: 5, title: "겨울방학 중 도서관 운영시간 변경", date: "2025.01.04" },
    { id: 4, title: "학생 식당 메뉴 변경 공지", date: "2025.01.03" },
    { id: 3, title: "캠퍼스 보안 시스템 점검 안내", date: "2025.01.02" },
    { id: 2, title: "새로운 동아리 지원 혜택", date: "2025.01.01" },
  ],
};

function NoticePanel() {
  const [activeTab, setActiveTab] = useState("공지사항"); // 현재 활성화된 탭
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleMoreClick = () => {
    navigate(`/notice`); // 현재 활성화된 탭에 따라 이동
  };

  // 현재 탭의 데이터를 정렬 후 상위 4개만 가져오기
  const limitedData = [...noticeData[activeTab]]
    .sort((a, b) => b.id - a.id) // id가 큰 순서대로 정렬
    .slice(0, 4); // 상위 4개만 가져오기

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
        {limitedData.map((notice) => (
          <S.NoticeItem key={notice.id}>
            <S.Title>{notice.title}</S.Title>
            <S.Date>{notice.date}</S.Date>
          </S.NoticeItem>
        ))}
      </S.NoticeList>

      {/* 더보기 버튼 */}
      <S.MoreButton onClick={handleMoreClick}>더보기</S.MoreButton>
    </S.PanelContainer>
  );
}

export default NoticePanel;
