import React, { useState, useEffect } from "react";
import * as S from "./NoticePage.styles";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function NoticeList() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotices = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}/api/home/notice`, {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        });
        // ID 내림차순 정렬 (최신순)
        const sortedData = response.data.sort((a, b) => b.id - a.id);
        setNotices(sortedData);
      } catch (err) {
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  if (loading) return <S.Loading>Loading...</S.Loading>;
  if (error) return <S.Error>{error}</S.Error>;

  return (
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
  );
}

export default NoticeList;
