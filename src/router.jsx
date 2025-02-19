import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
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
import LoginPage from "./components/LoginPage/LoginPage";
import EditProfilePage from "./components/EditProfilePage/EditProfilePage";
import ChangePasswordPage from "./components/ChangePasswordPage/ChangePasswordPage";
import MyPage from "./components/MyPage/MyPage";
import CentralClubPage from "./components/CentralClubPage/CentralClubPage";
import SmallClubPage from "./components/SmallClubPage/SmallClubPage";
import RecruitmentPage from "./components/RecruitmentPage/RecruitmentPage";
import MemberManagementPage from "./components/MemberManagementPage/MemberManagementPage";
import ApplicationListPage from "./components/ApplicationListPage/ApplicationListPage";
import ClubEvent from "./components/ClubEvent/ClubEvent";
import Introduction from "./components/Introduction/Introduction";
import ClubCategory from "./components/ClubCategory/ClubCategory";
import * as S from "./router.styles";
import NoticeLayout from "./components/Notice/NoticeLayout";
import FootBar from "./components/FooterBar/FootBar";
import Partners from "./components/Partners/Partners";

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
                <FestivalList />
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
        <Route path="/member-management" element={<MemberManagementPage />} />
        <Route path="/application-list" element={<ApplicationListPage />} />
        <Route path="/club-event/:id" element={<ClubEvent />} />
        <Route path="/introduce" element={<Introduction />} />
        <Route path="/category/:categoryName" element={<ClubCategory />} />
      </Routes>
      <FootBar />
    </Router>
  );
}

export default AppRouter;
