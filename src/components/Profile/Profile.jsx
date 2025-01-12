import React, { useState, useEffect } from "react";
import * as S from "./Profile.styles"; // 스타일 파일
import { Link } from "react-router-dom";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState(null); // 사용자 데이터
  const [clubsJoined, setClubsJoined] = useState([]); // 가입된 클럽
  const [clubsApplied, setClubsApplied] = useState([]); // 신청된 클럽
  const [clubsManaged, setClubsManaged] = useState([]); // 운영하는 클럽
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = 1; // 실제 사용자 ID
        const baseUrl = "http://localhost:5001/api";

        // 사용자 정보 가져오기
        const userResponse = await axios.get(`${baseUrl}/users/${userId}`, {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        });
        console.log("User Response:", userResponse.data);
        const { username, email } = userResponse.data;
        setUser({ username, email });

        // 가입된 클럽 가져오기
        const joinedResponse = await axios.get(
          `${baseUrl}/users/${userId}/clubs`,
          {
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        console.log("Joined Clubs Response:", joinedResponse.data);

        setClubsJoined(
          Array.isArray(joinedResponse.data)
            ? joinedResponse.data.map((club) => club.club_name)
            : []
        );

        // 신청된 클럽 가져오기
        const appliedResponse = await axios.get(
          `${baseUrl}/users/${userId}/applicatedclubs`,
          {
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        console.log("Applied Clubs Response:", appliedResponse.data);

        setClubsApplied(
          Array.isArray(appliedResponse.data)
            ? appliedResponse.data.map((club) => club.club_name)
            : []
        );

        // 운영하는 클럽 가져오기
        const managedResponse = await axios.get(
          `${baseUrl}/users/${userId}/managementclubs`,
          {
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        console.log("Managed Clubs Response:", managedResponse.data);

        setClubsManaged(
          Array.isArray(managedResponse.data)
            ? managedResponse.data.map((club) => club.club_name)
            : []
        );
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message || "데이터를 불러오는데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);
  const handleClick = () => {
    // 페이지 맨 위로 스크롤
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드러운 스크롤
    });
  };
  if (loading) return <S.Container>Loading...</S.Container>;
  if (error) return <S.Container>Error: {error}</S.Container>;

  return (
    <S.Container>
      <S.Title>회원 정보</S.Title>
      {user && (
        <>
          <S.ProfileInfo>
            <S.Label>이름:</S.Label>
            <S.Value>{user.username}</S.Value>
          </S.ProfileInfo>
          <S.ProfileInfo>
            <S.Label>이메일:</S.Label>
            <S.Value>{user.email}</S.Value>
          </S.ProfileInfo>
        </>
      )}
      <S.SectionTitle>가입된 동아리</S.SectionTitle>
      <S.List>
        {clubsJoined.length > 0 ? (
          clubsJoined.map((clubName, index) => (
            <S.ClubBox key={index}>
              <S.ClubName>{clubName}</S.ClubName>
            </S.ClubBox>
          ))
        ) : (
          <S.NoData>가입된 동아리가 없습니다.</S.NoData>
        )}
      </S.List>

      <S.SectionTitle>신청된 동아리</S.SectionTitle>
      <S.List>
        {clubsApplied.length > 0 ? (
          clubsApplied.map((clubName, index) => (
            <S.ClubBox key={index}>
              <S.ClubName>{clubName}</S.ClubName>
            </S.ClubBox>
          ))
        ) : (
          <S.NoData>신청된 동아리가 없습니다.</S.NoData>
        )}
      </S.List>

      <S.SectionTitle>운영하는 동아리</S.SectionTitle>
      <S.List>
        {clubsManaged.length > 0 ? (
          clubsManaged.map((clubName, index) => (
            <S.ClubBox key={index}>
              {clubName === "스파이더스(락밴드)" ? (
                <S.LogoLink to={`/manage/${6}`} onClick={handleClick}>
                  <S.ClubName>{clubName}</S.ClubName>
                </S.LogoLink>
              ) : (
                <S.ClubName>{clubName}</S.ClubName>
              )}
            </S.ClubBox>
          ))
        ) : (
          <S.NoData>운영하는 동아리가 없습니다.</S.NoData>
        )}
      </S.List>

      <Link to="/edit-profile">
        <S.EditButton>회원 정보 수정</S.EditButton>
      </Link>
    </S.Container>
  );
}

export default Profile;
