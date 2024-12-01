import React, { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./ClubList.styles";
import { Link } from "react-router-dom";

function ClubList() {
  const [clubs, setClubs] = useState([]); // 초기값을 빈 배열로 설정
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        // 프록시 설정을 통해 상대 경로로 요청
        const response = await axios.get(
          "https://2c4a-218-155-90-54.ngrok-free.app/api/clubs",
          {
            headers: {
              "Content-Type": `application/json`,
              "ngrok-skip-browser-warning": "69420", // 이거였어이거였어!!!!!!!!!!!
            },
          }
        );

        console.log("API Response:", response.data); // 디버깅
        setClubs(Array.isArray(response.data) ? response.data : []); // 배열 확인
      } catch (err) {
        setError(err.response?.data?.message || err.message);
        setClubs([]); // 에러 발생 시 빈 배열로 설정
      } finally {
        setLoading(false);
      }
    };

    fetchClubs();
  }, []);

  if (loading) return <S.Container>Loading...</S.Container>;
  if (error) return <S.Container>Error: {error}</S.Container>;

  return (
    <S.Container>
      {clubs.map((club) => (
        <Link
          to={`/club/${club.club_id}`}
          key={club.club_id}
          style={{ textDecoration: "none" }}
        >
          <S.ClubBox>
            <S.ClubName>{club.club_name}</S.ClubName>
            <S.Description>{club.description}</S.Description>
            <S.Category>카테고리: {club.category}</S.Category>
          </S.ClubBox>
        </Link>
      ))}
    </S.Container>
  );
}

export default ClubList;
