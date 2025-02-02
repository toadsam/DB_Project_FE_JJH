import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./ClubApply.styles";

const API_URL = process.env.REACT_APP_API_URL;

function ClubApply({ club_id }) {
  // props로 club_id 받기
  const [recruitmentInfo, setRecruitmentInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecruitment = async () => {
      try {
        console.log("Fetching recruitment info for club_id:", club_id);
        const response = await axios.get(
          `${API_URL}/api/clubs/${club_id}/recruitment`,
          {
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );

        setRecruitmentInfo(response.data);
      } catch (err) {
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    if (club_id) {
      fetchRecruitment();
    }
  }, [club_id]);

  if (loading) return <S.Loading>Loading...</S.Loading>;
  if (error) return <S.Error>{error}</S.Error>;

  return (
    <S.ApplyContainer>
      {recruitmentInfo ? (
        <>
          <S.Title>{recruitmentInfo.title || "모집 공고 제목"}</S.Title>
          <S.Description>
            {recruitmentInfo.description || "모집 공고 내용이 없습니다."}
          </S.Description>
        </>
      ) : (
        <S.Error>모집 공고 정보를 찾을 수 없습니다.</S.Error>
      )}
    </S.ApplyContainer>
  );
}

export default ClubApply;
