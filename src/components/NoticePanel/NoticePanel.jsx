import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // react-router-dom import
import axios from "axios";
import * as S from "./NoticePanel.styles";

const API_URL = process.env.REACT_APP_API_URL;

// 초기 하드코딩 데이터
const hardcodedNoticeData = {
  공지사항: [], // 공지사항 초기값 추가
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
  const [noticeData, setNoticeData] = useState(hardcodedNoticeData); // 초기 데이터
  const [loading, setLoading] = useState(false); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태
  const navigate = useNavigate(); // useNavigate 훅 사용

  useEffect(() => {
    const fetchNotices = async () => {
      if (activeTab === "공지사항") {
        setLoading(true);
        try {
          const response = await axios.get(`${API_URL}/api/home/notice`, {
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "69420",
            },
          });
          setNoticeData((prevData) => ({
            ...prevData,
            공지사항: response.data, // API 데이터 업데이트
          }));
        } catch (err) {
          setError("공지사항 데이터를 불러오는 중 오류가 발생했습니다.");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchNotices();
  }, [activeTab]); // activeTab 변경 시 호출

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleMoreClick = () => {
    navigate(`/notice`); // 현재 활성화된 탭에 따라 이동
  };

  // 현재 탭의 데이터를 정렬 후 상위 4개만 가져오기
  const limitedData = [...(noticeData[activeTab] || [])]
    .sort((a, b) => b.id - a.id) // id 기준 내림차순 정렬
    .slice(0, 4); // 상위 4개만 가져오기

  if (loading) return <S.PanelContainer>Loading...</S.PanelContainer>;
  if (error) return <S.PanelContainer>{error}</S.PanelContainer>;

  return (
    <S.PanelContainer>
      {/* 탭 메뉴 */}
      <S.TabMenu>
        {Object.keys(hardcodedNoticeData).map((tab) => (
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
            <S.Title>
              {notice.title.length > 30
                ? `${notice.title.substring(0, 30)}...`
                : notice.title}
            </S.Title>
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
