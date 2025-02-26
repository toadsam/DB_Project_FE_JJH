import React, { useState, useEffect } from "react";
import * as S from "./MiniClub.styles";
import axios from "axios";
import defaultImage from "../../asset/mainLogo.png";
import { useNavigate } from "react-router-dom";
import collegesData from "../../colleges.json";

const API_URL = process.env.REACT_APP_API_URL;

function MiniClub() {
  const [colleges, setColleges] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCollege, setSelectedCollege] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setColleges(collegesData);
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        let url = `${API_URL}/api/clubs/academic`;
        let params = {};
        if (selectedCollege) params.college = selectedCollege;
        if (selectedDepartment) params.department = selectedDepartment;

        const response = await axios.get(url, { params });
        setEvents(
          Array.isArray(response.data)
            ? response.data.map((event) => ({
                ...event,
                image: event.logo_url || defaultImage,
                description:
                  event.club_description || "설명이 제공되지 않았습니다.",
                recruitment_scope: event.recruitment_scope,
                recruitment_type: event.recruitment_type,
                recruitment_end_date: event.recruitment_end_date,
              }))
            : []
        );
      } catch (err) {
        setError(err.response?.data?.message || err.message);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [selectedCollege, selectedDepartment]);

  // 모집 마감일 계산 함수
  const getRecruitmentLabel = (event) => {
    if (event.recruitment_type === null) {
      return "상시";
    } else if (event.recruitment_type === "수시모집") {
      const today = new Date();
      const endDate = new Date(event.recruitment_end_date);
      const diffTime = endDate - today;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays < 0 ? "마감" : `D-${diffDays}`;
    }
    return "";
  };

  if (loading) return <S.PageContainer>Loading...</S.PageContainer>;
  if (error) return <S.PageContainer>Error: {error}</S.PageContainer>;

  return (
    <S.PageContainer>
      <S.Sidebar>
        <S.SidebarTitle>소학회</S.SidebarTitle>
        <S.SidebarList>
          {colleges.map((college, index) => (
            <div key={index}>
              <S.SidebarItem
                onClick={() =>
                  setSelectedCollege(
                    selectedCollege === college.name ? "" : college.name
                  )
                }
                isselected={selectedCollege === college.name}
              >
                {college.name}
              </S.SidebarItem>
              {selectedCollege === college.name &&
                college.departments.map((dept, idx) => (
                  <S.SidebarSubItem
                    key={idx}
                    onClick={() => setSelectedDepartment(dept)}
                    isselected={selectedDepartment === dept}
                  >
                    {dept}
                  </S.SidebarSubItem>
                ))}
            </div>
          ))}
        </S.SidebarList>
      </S.Sidebar>

      <S.Content>
        <S.Title1>소학회</S.Title1>
        <S.TitleBar />
        <S.Container>
          {events.map((event) => (
            <S.EventBox
              key={event.club_id}
              onClick={() => navigate(`/clubinfo/${event.club_id}`)}
              bg={event.image}
            >
              <S.ImageWrapper
                data-label={getRecruitmentLabel(event)}
                data-scope={event.recruitment_scope || "정보 없음"}
                style={{ height: "180px", overflow: "hidden" }}
              >
                <img
                  src={event.image}
                  alt={event.club_name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </S.ImageWrapper>
              <S.Title>{event.club_name}</S.Title>
              <S.Description>
                {event.description.length > 25
                  ? `${event.description.slice(0, 25)}...`
                  : event.description}
              </S.Description>
            </S.EventBox>
          ))}
        </S.Container>
      </S.Content>
    </S.PageContainer>
  );
}

export default MiniClub;
