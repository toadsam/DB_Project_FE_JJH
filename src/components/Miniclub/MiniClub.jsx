import React, { useState, useEffect } from "react";
import * as S from "./MiniClub.styles";
import axios from "axios";
import defaultImage from "../../asset/mainLogo.png";
import { useNavigate } from "react-router-dom";

import collegesData from "../../colleges.json";

const API_URL = process.env.REACT_APP_API_URL;

function MiniClub() {
  const [colleges, setColleges] = useState([]); // 단과대학 및 학과 목록
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCollege, setSelectedCollege] = useState(""); // 선택한 단과대학
  const [selectedDepartment, setSelectedDepartment] = useState(""); // 선택한 학과
  const navigate = useNavigate();

  // ✅ JSON 데이터를 바로 설정 (fetch 필요 없음)
  useEffect(() => {
    setColleges(collegesData);
  }, []);

  // 🔹 선택한 단과대/학과에 따라 소학회 데이터 불러오기
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        let url = `${API_URL}/api/clubs/academic`;
        let params = {};

        if (selectedCollege) {
          params.college = selectedCollege;
        }
        if (selectedDepartment) {
          params.department = selectedDepartment;
        }

        const response = await axios.get(url, { params });

        setEvents(
          Array.isArray(response.data)
            ? response.data.map((event) => ({
                ...event,
                image: defaultImage,
                description:
                  event.club_description || "설명이 제공되지 않았습니다.",
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

  if (loading) return <S.PageContainer>Loading...</S.PageContainer>;
  if (error) return <S.PageContainer>Error: {error}</S.PageContainer>;

  return (
    <S.PageContainer>
      {/* 왼쪽 사이드바 */}
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

      {/* 오른쪽 콘텐츠 */}
      <S.Content>
        <S.Title1>소학회</S.Title1>
        <S.TitleBar />
        <S.Container>
          {events.map((event) => (
            <S.EventBox
              key={event.club_id}
              onClick={() => navigate(`/clubinfo/${event.club_id}`)}
            >
              <S.ImageWrapper>
                <img src={event.image} alt={event.club_name} />
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
