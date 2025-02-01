import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as S from "./ClubEvent.styles"; // 스타일 파일 임포트

const API_URL = process.env.REACT_APP_API_URL;

function ClubApply() {
  const { club_id } = useParams(); // URL에서 event_id 파라미터를 받아옴
  console.log(club_id);
  const [recruitmentInfo, setRecruitmentInfo] = useState(null); // 행사 정보 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  // 행사 데이터 가져오기
  useEffect(() => {
    const fetchRecruitment = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/api/clubs/${club_id}/events`,
          {
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );

        console.log(response.data);
        setRecruitmentInfo(response.data); // API 응답 데이터를 상태에 저장
      } catch (err) {
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false); // 로딩 종료
      }
    };

    fetchRecruitment();
  }, [club_id]);

  if (loading) return <S.Loading>Loading...</S.Loading>;
  if (error) return <S.Error>{error}</S.Error>;

  return (
    <S.ApplyContainer>
      {recruitmentInfo ? (
        <>
          <S.Title>{recruitmentInfo.title || "행사 제목"}</S.Title>
          <S.Description>
            {recruitmentInfo.description || "행사 설명이 제공되지 않았습니다."}
          </S.Description>
          <S.InfoBox>
            <S.InfoItem>
              <S.Label>장소:</S.Label>
              <S.Value>
                {recruitmentInfo.location || "장소 정보가 없습니다."}
              </S.Value>
            </S.InfoItem>
            <S.InfoItem>
              <S.Label>날짜:</S.Label>
              <S.Value>
                {recruitmentInfo.event_date
                  ? new Date(recruitmentInfo.event_date).toLocaleString()
                  : "날짜 정보가 없습니다."}
              </S.Value>
            </S.InfoItem>
            <S.InfoItem>
              <S.Label>카테고리:</S.Label>
              <S.Value>
                {recruitmentInfo.event_category || "카테고리 정보가 없습니다."}
              </S.Value>
            </S.InfoItem>
            <S.InfoItem>
              <S.Label>연락처:</S.Label>
              <S.Value>
                {recruitmentInfo.event_contact_phone_number ||
                  "연락처 정보가 없습니다."}
              </S.Value>
            </S.InfoItem>
            <S.InfoItem>
              <S.Label>이메일:</S.Label>
              <S.Value>
                {recruitmentInfo.event_contact_email ||
                  "이메일 정보가 없습니다."}
              </S.Value>
            </S.InfoItem>
          </S.InfoBox>
        </>
      ) : (
        <S.Error>행사 정보를 찾을 수 없습니다.</S.Error>
      )}
    </S.ApplyContainer>
  );
}

export default ClubApply;
