import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as S from "./ClubApply.styles"; // 스타일 파일 임포트

function ClubApply() {
  const { id } = useParams(); // URL에서 recruitment_id 파라미터를 받아옴
  const [recruitmentInfo, setRecruitmentInfo] = useState(null); // 모집 공고 정보 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  // 모집 공고 데이터 가져오기
  useEffect(() => {
    const fetchRecruitment = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/recruitments/${id}`
        );
        setRecruitmentInfo(response.data); // API 응답 데이터를 상태에 저장
      } catch (err) {
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false); // 로딩 종료
      }
    };

    fetchRecruitment();
  }, [id]);

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
