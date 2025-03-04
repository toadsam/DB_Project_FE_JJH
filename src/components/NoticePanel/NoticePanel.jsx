import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from './NoticePanel.styles';

const API_URL = process.env.REACT_APP_API_URL;
const hardcodedNoticeData = {
  공지사항: [],
  '제휴 업체': [
    {
      id: 3,
      title: '[제휴업체 2번째 혜택] 트리플 스페이스',
      date: '2025.02.13',
    },
    { id: 1, title: '[제휴업체 1번째 혜택] 정원 볼링센터', date: '2025.02.13' },
  ],
};

function NoticePanel() {
  const [activeTab, setActiveTab] = useState('공지사항');
  const [noticeData, setNoticeData] = useState(hardcodedNoticeData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotices = async () => {
      if (activeTab === '공지사항') {
        setLoading(true);
        try {
          const response = await axios.get(`${API_URL}/api/home/notice`, {
            headers: {
              'Content-Type': 'application/json',
              'ngrok-skip-browser-warning': '69420',
            },
          });
          setNoticeData((prevData) => ({
            ...prevData,
            공지사항: response.data,
          }));
        } catch (err) {
          setError('공지사항 데이터를 불러오는 중 오류가 발생했습니다.');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchNotices();
  }, [activeTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleMoreClick = () => {
    navigate(`/notice`);
  };

  const handleNoticeClick = (notice) => {
    if (notice.link) {
      window.open(notice.link, '_blank');
    }
  };

  const limitedData = [...(noticeData[activeTab] || [])]
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  if (loading) return <S.PanelContainer>Loading...</S.PanelContainer>;
  if (error) return <S.PanelContainer>{error}</S.PanelContainer>;

  return (
    <S.PanelContainer>
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

      <S.NoticeList>
        {limitedData.map((notice) => (
          <S.NoticeItem
            key={notice.id}
            onClick={() => handleNoticeClick(notice)}
          >
            <S.Title>
              {notice.title.length > 30
                ? `${notice.title.substring(0, 25)}...`
                : notice.title}
            </S.Title>
            <S.Date>{notice.date}</S.Date>
          </S.NoticeItem>
        ))}
      </S.NoticeList>

      <S.MoreButton onClick={handleMoreClick}>더보기</S.MoreButton>
    </S.PanelContainer>
  );
}

export default NoticePanel;
