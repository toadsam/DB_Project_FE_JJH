import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as S from "./ClubInfo.styles";
import defaultImage from "../../asset/mainLogo.png"; // 기본 로고 이미지
const sidebarItems = ["동아리 소개", "모집 공고", "행사 공고"];

function ClubInfo() {
  const { id } = useParams();
  const [clubInfo, setClubInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedItem, setSelectedItem] = useState("동아리 소개");

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
    <S.PageContainer>
      {" "}
      <S.Sidebar>
        <S.SidebarTitle>카테고리</S.SidebarTitle>
        <S.SidebarList>
          {sidebarItems.map((item, index) => (
            <S.SidebarItem
              key={index}
              isSelected={selectedItem === item}
              onClick={() => setSelectedItem(item)}
            >
              {item}
            </S.SidebarItem>
          ))}
        </S.SidebarList>
      </S.Sidebar>{" "}
      <S.InfoContainer>
        <S.Header>
          <S.ClubTitle>{clubInfo?.club_name || "동아리 이름"}</S.ClubTitle>
          <S.TitleBar />
        </S.Header>
        <S.CardContainer>
          <S.CardLogo
            src={clubInfo?.image || defaultImage}
            alt={clubInfo?.club_name || "Club Logo"}
          />
          <S.CardContent>
            <S.ClubName>{clubInfo?.club_name || "동아리 이름"}</S.ClubName>
            <S.CardInfoBox>
              <S.CardInfoItem>
                <S.ContactLabel>위치</S.ContactLabel>
                <S.ContactValue>
                  {clubInfo?.location || "위치 정보가 없습니다."}
                </S.ContactValue>
              </S.CardInfoItem>
              <S.CardInfoItem>
                <S.ContactLabel>연락처</S.ContactLabel>
                <S.ContactValue>
                  {clubInfo?.contact_phone || "연락처 정보가 없습니다."}
                </S.ContactValue>
              </S.CardInfoItem>
              <S.CardInfoItem>
                <S.ContactLabel>SNS</S.ContactLabel>
                <S.ContactValue>
                  <a
                    href={`https://www.instagram.com/${
                      clubInfo?.club_sns || ""
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {clubInfo?.club_sns || "SNS 정보가 없습니다."}
                  </a>
                </S.ContactValue>
              </S.CardInfoItem>
            </S.CardInfoBox>
            <S.CardHashTags>
              {clubInfo?.hashtags?.map((tag, index) => (
                <S.CardHashTagItem key={index}>
                  <S.ContactLabel>#</S.ContactLabel>
                  <S.ContactValue>{tag}</S.ContactValue>
                </S.CardHashTagItem>
              )) || (
                <S.CardHashTagItem>
                  <S.ContactLabel>#</S.ContactLabel>
                  <S.ContactValue>해시태그 정보가 없습니다.</S.ContactValue>
                </S.CardHashTagItem>
              )}
            </S.CardHashTags>
          </S.CardContent>
        </S.CardContainer>

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
            {clubInfo?.activity || "주요 활동 정보가 없습니다."}
          </S.SectionContent>
        </S.Section>
      </S.InfoContainer>
    </S.PageContainer>
  );
}
export default ClubInfo;
