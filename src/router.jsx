import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ClubList from "./components/ClubList/ClubList";
import NewRecruitment from "./components/NewRecruitment/NewRecruitment";
import ClubInfo from "./components/ClubInfo/ClubInfo";
import MemberInfo from "./components/MemberInfo/MemberInfo";
import EventInfo from "./components/EventInfo/EventInfo";
import Profile from "./components/Profile/Profile";
import ClubApply from "./components/ClubApply/ClubApply";
import FestivalList from "./components/FestivalList/FestivalList";
import MiniClub from "./components/Miniclub/MiniClub";
import Manage from "./components/Manage/Manage";
import Category from "./components/Category/Category";
import ClubCategory from "./components/ClubCategory/ClubCategory";
import AcademicSchedule from "./components/AcademicSchedule/AcademicSchedule";
import NoticePanel from "./components/NoticePanel/NoticePanel";
import * as S from "./router.styles";

function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
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
            </>
          }
        />
        <Route path="/miniclublist" element={<MiniClub />} />
        <Route path="/eventinfo" element={<EventInfo />} />
        <Route path="/clublist" element={<ClubList />} />
        <Route path="/profile" element={<Profile />} />{" "}
        <Route path="/manage/:id" element={<Manage />} />
        <Route path="/clubinfo/:id" element={<ClubInfo />} />
        <Route path="/member-info/:id" element={<MemberInfo />} />
        <Route path="/event-info/:id" element={<EventInfo />} />
        <Route path="/club-apply/:id" element={<ClubApply />} />
        <Route path="/manage/:id" element={<Manage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
