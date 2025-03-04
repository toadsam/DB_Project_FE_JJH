import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import * as S from './NoticePage.styles';

function NoticeLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  // 현재 URL에 따라 활성 탭을 결정합니다.
  const activeTab = location.pathname.includes('/partners')
    ? '제휴업체'
    : '공지사항';

  return (
    <S.Container>
      <S.Title>{activeTab}</S.Title>
      <S.TitleBar />

      <S.TabContainer>
        <S.TabItem
          active={activeTab === '공지사항'}
          onClick={() => navigate('/notice')}
        >
          공지사항
        </S.TabItem>
        <S.TabItem
          active={activeTab === '제휴업체'}
          onClick={() => navigate('/notice/partners')}
        >
          제휴 업체
        </S.TabItem>
      </S.TabContainer>

      {/* Outlet에 따라 아래 내용이 변경됩니다 */}
      <Outlet />
    </S.Container>
  );
}

export default NoticeLayout;
