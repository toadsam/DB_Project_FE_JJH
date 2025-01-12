import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as S from "./ClubInfo.styles";
import defaultImage from "../../asset/mainLogo.png"; // 기본 로고 이미지

function ClubInfo() {
  const { id } = useParams();
  const [clubInfo, setClubInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchClubData = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/api/clubs/${id}`);
      setClubInfo(response.data);
    } catch (err) {
      setError("데이터를 불러오는 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClubData();
  }, [id]);

  if (loading) return <S.Loading>Loading...</S.Loading>;
  if (error) return <S.Error>{error}</S.Error>;

  return (
    <S.InfoContainer>
      {/* 상단 로고 및 기본 정보 */}
      <S.TopSection>
        <S.LogoWrapper>
          <S.ClubLogo
            src={clubInfo?.image || defaultImage} // 로고가 없을 경우 기본 이미지 사용
            alt={clubInfo?.club_name || "Club Logo"}
          />
        </S.LogoWrapper>
        <S.ClubInfoWrapper>
          <S.ClubName>{clubInfo?.club_name || "동아리 이름"}</S.ClubName>
          <S.ContactInfo>
            <S.ContactItem>
              <S.ContactLabel>위치</S.ContactLabel>
              <S.ContactValue>
                {clubInfo?.location || "위치 정보가 없습니다."}
              </S.ContactValue>
            </S.ContactItem>
            <S.ContactItem>
              <S.ContactLabel>연락처</S.ContactLabel>
              <S.ContactValue>
                {clubInfo?.contact_phone || "연락처 정보가 없습니다."}
              </S.ContactValue>
            </S.ContactItem>
            <S.ContactItem>
              <S.ContactLabel>SNS</S.ContactLabel>
              <S.ContactValue>
                <a
                  href={`https://www.instagram.com/${clubInfo?.club_sns || ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {clubInfo?.club_sns || "SNS 정보가 없습니다."}
                </a>
              </S.ContactValue>
            </S.ContactItem>
          </S.ContactInfo>
        </S.ClubInfoWrapper>
      </S.TopSection>

      {/* 해시태그 */}
      <S.HashTags>
        {clubInfo?.hashtags?.map((tag, index) => (
          <S.HashTag key={index}>#{tag}</S.HashTag>
        )) || <S.HashTag>해시태그 정보가 없습니다.</S.HashTag>}
      </S.HashTags>

      {/* 동아리 설명 */}
      <S.Section>
        <S.SectionTitle>동아리 설명</S.SectionTitle>
        <S.SectionContent>
          {clubInfo?.description || "동아리 설명이 없습니다."}
        </S.SectionContent>
      </S.Section>

      {/* 주요 활동 */}
      <S.Section>
        <S.SectionTitle>주요 활동</S.SectionTitle>
        <S.SectionContent>
          {clubInfo?.activities?.map((activity, index) => (
            <div key={index}>- {activity}</div>
          )) || "주요 활동 정보가 없습니다."}
        </S.SectionContent>
      </S.Section>

      {/* 지원 버튼 */}
      <S.ButtonWrapper>
        <S.JoinButton onClick={() => alert("지원이 완료되었습니다!")}>
          가입 신청
        </S.JoinButton>
      </S.ButtonWrapper>
    </S.InfoContainer>
  );
}

export default ClubInfo;
