import React, { useState, useEffect } from "react";
import * as S from "./NoticePage.styles"; // 스타일 파일
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function NoticePage() {
  const [activeTab, setActiveTab] = useState("공지사항"); // 현재 활성화된 탭
  const [notices, setNotices] = useState([]); // 공지사항 데이터 상태
  const [loading, setLoading] = useState(false); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  useEffect(() => {
    const fetchNotices = async () => {
      setLoading(true);
      try {
        const endpoint =
          activeTab === "공지사항"
            ? `${API_URL}/api/home/notice`
            : `${API_URL}/api/home/partners`; // 탭에 따라 다른 API 호출
        const response = await axios.get(endpoint, {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        });
        // 응답 데이터 정렬 (ID 오름차순)
        const sortedData = response.data.sort((a, b) => b.id - a.id);
        setNotices(sortedData); // 정렬된 데이터 상태에 저장
      } catch (err) {
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false); // 로딩 종료
      }
    };

    fetchNotices();
  }, [activeTab]); // 탭이 변경될 때마다 API 호출

  if (loading) return <S.Loading>Loading...</S.Loading>;
  if (error) return <S.Error>{error}</S.Error>;

  return (
    <S.Container>
      {/* 제목과 하단바 */}
      <S.Title>{activeTab}</S.Title>
      <S.TitleBar />

      {/* 탭 선택 */}
      <S.TabContainer>
        <S.TabItem
          active={activeTab === "공지사항"}
          onClick={() => setActiveTab("공지사항")}
        >
          공지사항
        </S.TabItem>
        <S.TabItem
          active={activeTab === "제휴업체"}
          onClick={() => setActiveTab("제휴업체")}
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
        {notices.map((notice) => (
          <S.ListRow key={notice.id}>
            <S.ListColumn>{notice.id}</S.ListColumn>
            <S.ListColumn>
              <a href={notice.link} target="_blank" rel="noopener noreferrer">
                {notice.title}
              </a>
            </S.ListColumn>
            <S.ListColumn>{notice.date}</S.ListColumn>
          </S.ListRow>
        ))}
      </S.List>
    </S.Container>
  );
}

export default NoticePage;
