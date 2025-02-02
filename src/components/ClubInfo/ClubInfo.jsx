import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as S from "./ClubInfo.styles";
import defaultImage from "../../asset/mainLogo.png";
import ClubApply from "../ClubApply/ClubApply"; // ClubApply 컴포넌트 가져오기
import ClubEvent from "../ClubEvent/ClubEvent";

const API_URL = process.env.REACT_APP_API_URL;

const sidebarItems = ["동아리 소개", "모집 공고", "행사 공고"];

function ClubInfo() {
  const { club_id } = useParams();
  const [clubInfo, setClubInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedItem, setSelectedItem] = useState("동아리 소개");

  useEffect(() => {
    const fetchClubData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}/api/clubs/${club_id}`, {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        });
        setClubInfo(response.data);
      } catch (err) {
        console.error("API Error:", err.response || err.message);
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchClubData();
  }, [club_id]);

  if (loading) return <S.Loading>Loading...</S.Loading>;
  if (error) return <S.Error>{error}</S.Error>;

  return (
    <S.PageContainer>
      <S.Sidebar>
        <S.SidebarTitle>카테고리</S.SidebarTitle>
        <S.SidebarList>
          {sidebarItems.map((item, index) => (
            <S.SidebarItem
              key={index}
              $isSelected={selectedItem === item} // $isSelected 사용
              onClick={() => setSelectedItem(item)}
            >
              {item}
            </S.SidebarItem>
          ))}
        </S.SidebarList>
      </S.Sidebar>

      <S.InfoContainer>
        <S.Header>
          <S.ClubTitle>{clubInfo?.club_name || "동아리 이름"}</S.ClubTitle>
          <S.TitleBar />
        </S.Header>
        <S.CardContainer>
          <S.CardLogo
            src={clubInfo?.image || defaultImage} // 기본 이미지 처리
            alt={clubInfo?.club_name || "Club Logo"}
          />
          <S.CardContent>
            <S.ClubName>{clubInfo?.club_name || "동아리 이름"}</S.ClubName>
            <S.CardInfoBox>
              <S.CardInfoItem>
                <S.ContactLabel>위치</S.ContactLabel>
                <S.ContactValue>
                  {clubInfo?.club_location || "위치 정보가 없습니다."}
                </S.ContactValue>
              </S.CardInfoItem>
              <S.CardInfoItem>
                <S.ContactLabel>연락처</S.ContactLabel>
                <S.ContactValue>
                  {clubInfo?.club_contact_phone_number ||
                    "연락처 정보가 없습니다."}
                </S.ContactValue>
              </S.CardInfoItem>
              <S.CardInfoItem>
                <S.ContactLabel>SNS</S.ContactLabel>
                <S.ContactValue>
                  <a
                    href={clubInfo?.club_sns || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {clubInfo?.club_sns || "SNS 정보가 없습니다."}
                  </a>
                </S.ContactValue>
              </S.CardInfoItem>
            </S.CardInfoBox>
          </S.CardContent>
        </S.CardContainer>
        {/* 조건부 렌더링 */}
        {selectedItem === "동아리 소개" && (
          <>
            <S.Section>
              <S.SectionTitle>동아리 설명</S.SectionTitle>
              <S.SectionContent>
                {clubInfo?.club_description || "동아리 설명이 없습니다."}
              </S.SectionContent>
            </S.Section>

            <S.Section>
              <S.SectionTitle>분류</S.SectionTitle>
              <S.SectionContent>
                {clubInfo?.club_category || "분류 정보가 없습니다."}
              </S.SectionContent>
            </S.Section>

            <S.Section>
              <S.SectionTitle>상세 분류</S.SectionTitle>
              <S.SectionContent>
                {clubInfo?.detail_category_1 || "상세 분류 정보가 없습니다."}
              </S.SectionContent>
            </S.Section>

            <S.Section>
              <S.SectionTitle>대학 및 학과</S.SectionTitle>
              <S.SectionContent>
                {clubInfo?.college_name || "대학 정보가 없습니다."} /{" "}
                {clubInfo?.department_name || "학과 정보가 없습니다."}
              </S.SectionContent>
            </S.Section>
          </>
        )}
        {selectedItem === "모집 공고" && <ClubApply club_id={club_id} />}{" "}
        {/* 모집 공고 표시 */}
        {selectedItem === "행사 공고" && <ClubEvent />}
      </S.InfoContainer>
    </S.PageContainer>
  );
}

export default ClubInfo;
