import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ClubList from "./components/ClubList/ClubList";
import NewRecruitment from "./components/NewRecruitment/NewRecruitment";
import ClubInfo from "./components/ClubInfo/ClubInfo";
import MemberInfo from "./components/MemberInfo/MemberInfo";
import EventInfo from "./components/EventInfo/EventInfo";
import FestivalList from "./components/FestivalList/FestivalList";
import MiniClub from "./components/Miniclub/MiniClub";
import Category from "./components/Category/Category";
import AcademicSchedule from "./components/AcademicSchedule/AcademicSchedule";
import NoticePanel from "./components/NoticePanel/NoticePanel";
import NoticePage from "./components/Notice/NoticePage";
import LoginPage from "./components/LoginPage/LoginPage"; // LoginPage 컴포넌트
import EditProfilePage from "./components/EditProfilePage/EditProfilePage"; // EditProfilePage 경로
import ChangePasswordPage from "./components/ChangePasswordPage/ChangePasswordPage"; // ChangePasswordPage 경로
import MyPage from "./components/MyPage/MyPage"; // 새로 추가할 컴포넌트
import CentralClubPage from "./components/CentralClubPage/CentralClubPage";
import SmallClubPage from "./components/SmallClubPage/SmallClubPage";
import RecruitmentPage from "./components/RecruitmentPage/RecruitmentPage";
import MemberManagementPage from "./components/MemberManagementPage/MemberManagementPage";
import ApplicationListPage from "./components/ApplicationListPage/ApplicationListPage";
import ClubEvent from "./components/ClubEvent/ClubEvent";
import Introduction from "./components/Introduction/Introduction";
import * as S from "./router.styles";

function AppRouter() {
  return (
    <Router basename="/DB_Project_FE">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <S.MainContainer>
                <Category />{" "}
                <S.RowContainer>
                  <S.PanelWrapper>
                    <AcademicSchedule />
                  </S.PanelWrapper>
                  <S.PanelWrapper>
                    <NoticePanel />
                  </S.PanelWrapper>
                </S.RowContainer>
                <FestivalList />
                <NewRecruitment />
              </S.MainContainer>
            </>
          }
        />
        <Route path="/miniclublist" element={<MiniClub />} />
        <Route path="/eventinfo" element={<EventInfo />} />
        <Route path="/clublist" element={<ClubList />} />
        <Route path="/clubinfo/:club_id" element={<ClubInfo />} />
        <Route path="/member-info/:id" element={<MemberInfo />} />
        <Route path="/event-info/:id" element={<EventInfo />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/login" element={<LoginPage />} /> {/* 로그인 페이지 */}
        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />
        <Route path="/mypage" element={<MyPage />} /> {/* 내 정보 경로 추가 */}
        <Route path="/central-club" element={<CentralClubPage />} />
        <Route path="/small-club" element={<SmallClubPage />} />
        <Route path="/recruitment" element={<RecruitmentPage />} />
        <Route path="/member-management" element={<MemberManagementPage />} />
        <Route path="/application-list" element={<ApplicationListPage />} />
        <Route path="/club-event/:id" element={<ClubEvent />} />
        <Route path="/introduce" element={<Introduction />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
