import React, { useState } from "react";
import * as S from "./NoticePage.styles";

// 게시글 데이터
const noticeData = {
  공지사항: [
    { id: 12, title: "[공지] 2025년도 등록금 납부 안내", date: "2025.01.20" },
    { id: 11, title: "창업 경진대회 사전 설명회 개최", date: "2025.01.19" },
    { id: 10, title: "[모집] 국제교환학생 2025", date: "2025.01.18" },
    { id: 9, title: "2025년 동계 학술대회 안내", date: "2025.01.17" },
    { id: 8, title: "[필독] 학사 일정 변경 공지", date: "2025.01.16" },
    { id: 7, title: "2025년도 졸업생 모의 면접", date: "2025.01.15" },
    { id: 6, title: "장학금 신청 마감일 안내", date: "2025.01.14" },
    {
      id: 5,
      title: "학생회 주최 겨울 방학 문화 프로그램",
      date: "2025.01.13",
    },
    {
      id: 4,
      title: "[재공지][품질경영분야] 6시그마 Black Belt 자격과정",
      date: "2025.01.10",
    },
    { id: 3, title: "유익한 방학생활 에세이 공모전", date: "2025.01.10" },
    {
      id: 2,
      title: "[국제대학원] 누비아주 35기를 모집합니다",
      date: "2025.01.11",
    },
    {
      id: 1,
      title: "※D-DAY※ [양현재] 2025 로스쿨 입학설명회",
      date: "2025.01.12",
    },
  ],
  제휴업체: [
    { id: 12, title: "2025년 봄 시즌 할인 프로모션 안내", date: "2025.01.20" },
    { id: 11, title: "기숙사 입주 관련 협력업체 모집", date: "2025.01.19" },
    { id: 10, title: "신규 도서관 협력업체 계약 공지", date: "2025.01.18" },
    { id: 9, title: "학생 식당 새로운 메뉴 출시", date: "2025.01.17" },
    { id: 8, title: "캠퍼스 내 보안 서비스 변경 안내", date: "2025.01.16" },
    { id: 7, title: "겨울철 난방 서비스 점검 일정", date: "2025.01.15" },
    { id: 6, title: "2025 OT 행사 관련 협력 공지", date: "2025.01.14" },
    { id: 5, title: "학생 복지 협력업체 만족도 조사", date: "2025.01.13" },
    { id: 4, title: "동아리 지원 업체 혜택 공지", date: "2025.01.12" },
    { id: 3, title: "캠퍼스 무료 이벤트 업체 모집", date: "2025.01.11" },
    { id: 2, title: "도서관 연장 운영 협력업체 공지", date: "2025.01.10" },
    { id: 1, title: "2025 신입생 OT 안내", date: "2025.01.05" },
  ],
};

function NoticePage() {
  const [activeTab, setActiveTab] = useState("공지사항"); // 현재 활성화된 탭

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // 현재 탭에 따른 데이터를 정렬하여 가져오기
  const sortedData = [...noticeData[activeTab]].sort((a, b) => b.id - a.id);

  return (
    <S.Container>
      {/* 제목과 하단바 */}
      <S.Title>공지사항</S.Title>
      <S.TitleBar />

      {/* 선택지 박스 */}
      <S.TabContainer>
        <S.TabItem
          active={activeTab === "공지사항"}
          onClick={() => handleTabChange("공지사항")}
        >
          공지사항
        </S.TabItem>
        <S.TabItem
          active={activeTab === "제휴업체"}
          onClick={() => handleTabChange("제휴업체")}
        >
          제휴 업체
        </S.TabItem>
      </S.TabContainer>

      {/* 게시글 리스트 */}
      <S.List>
        <S.ListHeader>
          <S.ListColumn>번호</S.ListColumn>
          <S.ListColumn>제목</S.ListColumn>
          <S.ListColumn>날짜</S.ListColumn>
        </S.ListHeader>
        {sortedData.map((notice) => (
          <S.ListRow key={notice.id}>
            <S.ListColumn>{notice.id}</S.ListColumn>
            <S.ListColumn>{notice.title}</S.ListColumn>
            <S.ListColumn>{notice.date}</S.ListColumn>
          </S.ListRow>
        ))}
      </S.List>
    </S.Container>
  );
}

export default NoticePage;
