import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ClubList from "./components/ClubList/ClubList";
import ClubPage from "./components/ClubPage/ClubPage";
import MemberInfo from "./components/MemberInfo/MemberInfo";
import EventInfo from "./components/EventInfo/EventInfo";
import Profile from "./components/Profile/Profile";
import ClubApply from "./components/ClubApply/ClubApply";

function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ClubList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/club/:id" element={<ClubPage />} />
        <Route path="/member-info/:id" element={<MemberInfo />} />
        <Route path="/event-info/:id" element={<EventInfo />} />
        <Route path="/club-apply/:id" element={<ClubApply />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
