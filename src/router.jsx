import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Category from './components/Category/Category';
import AcademicSchedule from './components/AcademicSchedule/AcademicSchedule';
import NoticePanel from './components/NoticePanel/NoticePanel';
import NewRecruitment from './components/NewRecruitment/NewRecruitment';
import FootBar from './components/FooterBar/FootBar';
import styled from 'styled-components';
import * as S from './router.styles.jsx';

// 전체 레이아웃 컨테이너 (스티키 푸터 적용)
const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// 메인 콘텐츠 영역: 내용물이 적을 경우 남은 공간을 채움
const MainContent = styled.main`
  flex: 1;
`;

// React.lazy를 이용한 코드 스플리팅 (메인 페이지 외)
const ClubList = lazy(() => import('./components/ClubList/ClubList'));
const ClubInfo = lazy(() => import('./components/ClubInfo/ClubInfo'));
const MemberInfo = lazy(() => import('./components/MemberInfo/MemberInfo'));
const EventInfo = lazy(() => import('./components/EventInfo/EventInfo'));
const MiniClub = lazy(() => import('./components/Miniclub/MiniClub'));
const NoticePage = lazy(() => import('./components/Notice/NoticePage'));
const LoginPage = lazy(() => import('./components/LoginPage/LoginPage'));
const EditProfilePage = lazy(() =>
  import('./components/EditProfilePage/EditProfilePage')
);
const ChangePasswordPage = lazy(() =>
  import('./components/ChangePasswordPage/ChangePasswordPage')
);
const MyPage = lazy(() => import('./components/MyPage/MyPage'));
const CentralClubPage = lazy(() =>
  import('./components/CentralClubPage/CentralClubPage')
);
const SmallClubPage = lazy(() =>
  import('./components/SmallClubPage/SmallClubPage')
);
const RecruitmentPage = lazy(() =>
  import('./components/RecruitmentPage/RecruitmentPage')
);
const MemberManagementPage = lazy(() =>
  import('./components/MemberManagementPage/MemberManagementPage')
);
const ApplicationListPage = lazy(() =>
  import('./components/ApplicationListPage/ApplicationListPage')
);
const ClubEvent = lazy(() => import('./components/ClubEvent/ClubEvent'));
const Introduction = lazy(() =>
  import('./components/Introduction/Introduction')
);
const ClubCategory = lazy(() =>
  import('./components/ClubCategory/ClubCategory')
);
const NoticeLayout = lazy(() => import('./components/Notice/NoticeLayout'));
const Partners = lazy(() => import('./components/Partners/Partners'));
const RecruitmentListPage = lazy(() =>
  import('./components/RecruitmentListPage/RecruitmentListPage')
);

function AppRouter() {
  return (
    <Router basename="/">
      <PageLayout>
        <Header />
        <MainContent>
          {/* Suspense로 lazy-loaded 컴포넌트들의 로딩 상태를 처리 */}
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {/* 메인 페이지는 코드 스플리팅 없이 바로 렌더링 */}
              <Route
                path="/"
                element={
                  <>
                    <S.MainContainer>
                      <Category />
                      <S.RowContainer>
                        <S.PanelWrapper>
                          <AcademicSchedule />
                        </S.PanelWrapper>
                        <S.PanelWrapper>
                          <NoticePanel />
                        </S.PanelWrapper>
                      </S.RowContainer>
                      <NewRecruitment />
                    </S.MainContainer>
                  </>
                }
              />
              {/* 나머지 라우트들은 lazy 로딩 */}
              <Route path="/miniclublist" element={<MiniClub />} />
              <Route path="/eventinfo" element={<EventInfo />} />
              <Route path="/clublist" element={<ClubList />} />
              <Route path="/clubinfo/:club_id" element={<ClubInfo />} />
              <Route path="/member-info/:id" element={<MemberInfo />} />
              <Route path="/event-info/:id" element={<EventInfo />} />
              <Route path="/notice" element={<NoticeLayout />}>
                <Route index element={<NoticePage />} />
                <Route path="partners" element={<Partners />} />
              </Route>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/edit-profile" element={<EditProfilePage />} />
              <Route path="/change-password" element={<ChangePasswordPage />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/central-club" element={<CentralClubPage />} />
              <Route path="/small-club" element={<SmallClubPage />} />
              <Route path="/recruitment" element={<RecruitmentPage />} />
              <Route
                path="/member-management"
                element={<MemberManagementPage />}
              />
              <Route
                path="/application-list"
                element={<ApplicationListPage />}
              />
              <Route path="/club-event/:id" element={<ClubEvent />} />
              <Route path="/introduce" element={<Introduction />} />
              <Route
                path="/category/:categoryName"
                element={<ClubCategory />}
              />
              <Route
                path="/recruitment-list"
                element={<RecruitmentListPage />}
              />
            </Routes>
          </Suspense>
        </MainContent>
        <FootBar />
      </PageLayout>
    </Router>
  );
}

export default AppRouter;
