import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import * as S from "./ClubInfo.styles";
import defaultImage from "../../asset/mainLogo.png";
import ClubApply from "../ClubApply/ClubApply";
import ClubEvent from "../ClubEvent/ClubEvent";
import { jwtDecode } from "jwt-decode";

const API_URL = process.env.REACT_APP_API_URL;

const userRole = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  try {
    const decoded = jwtDecode(token);
    return decoded.role;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

function ClubInfo() {
  const { club_id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [clubInfo, setClubInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const role = userRole();
  const [selectedItem, setSelectedItem] = useState(
    location.state?.defaultTab || "동아리 소개"
  );
  const [selectedImage, setSelectedImage] = useState(null);

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

  const sidebarItems = [
    "동아리 소개",
    "모집 공고",
    "행사 공고",
    ...(role === "admin"
      ? ["중앙동아리", "소확회", "모집공고", "부원관리", "신청목록"]
      : []),
  ];

  const handleSidebarClick = (item) => {
    setSelectedItem(item);
    navigate(`/clubinfo/${club_id}`, { state: { defaultTab: item } });
  };

  const handleImageClick = (imgUrl) => {
    setSelectedImage(imgUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <S.PageContainer>
      <S.Sidebar>
        <S.SidebarTitle>카테고리</S.SidebarTitle>
        <S.SidebarList>
          {sidebarItems.map((item, index) => (
            <S.SidebarItem
              key={index}
              $isSelected={selectedItem === item}
              onClick={() => handleSidebarClick(item)}
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
            src={clubInfo?.logo_url || defaultImage}
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
                    href={clubInfo?.club_sns1 || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {clubInfo?.club_sns1 || "SNS 정보가 없습니다."}
                  </a>
                </S.ContactValue>
              </S.CardInfoItem>
            </S.CardInfoBox>
          </S.CardContent>
        </S.CardContainer>

        {selectedItem === "동아리 소개" && (
          <>
            <S.Section>
              <S.SectionTitle>동아리 설명</S.SectionTitle>
              <S.SectionContent>
                {clubInfo?.club_description || "동아리 설명이 없습니다."}
              </S.SectionContent>
            </S.Section>

            <S.Section>
              <S.SectionTitle>주요 활동</S.SectionTitle>
              <S.SectionContent>
                {clubInfo?.club_main_activities || "주요 활동 설명이 없습니다."}
              </S.SectionContent>
            </S.Section>

            {clubInfo?.club_activity_images &&
              clubInfo.club_activity_images.length > 0 && (
                <S.Section>
                  <S.SectionTitle>활동 사진</S.SectionTitle>
                  <S.ActivityImagesGrid>
                    {clubInfo.club_activity_images.map((imgUrl, index) => (
                      <S.ActivityImageItem
                        key={index}
                        src={imgUrl}
                        alt={`활동 사진 ${index + 1}`}
                        onClick={() => handleImageClick(imgUrl)}
                      />
                    ))}
                  </S.ActivityImagesGrid>
                </S.Section>
              )}
          </>
        )}

        {selectedItem === "모집 공고" && <ClubApply club_id={club_id} />}
        {selectedItem === "행사 공고" && <ClubEvent club_id={club_id} />}
      </S.InfoContainer>

      {selectedImage && (
        <S.ModalOverlay onClick={closeImageModal}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.CloseButton onClick={closeImageModal}>X</S.CloseButton>
            <S.ModalImage src={selectedImage} alt="확대된 활동 사진" />
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </S.PageContainer>
  );
}

export default ClubInfo;
