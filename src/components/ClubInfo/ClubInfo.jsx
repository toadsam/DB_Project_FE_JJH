import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom"; // ✅ location 제거
import axios from "axios";
import * as S from "./ClubInfo.styles";
import defaultImage from "../../asset/mainLogo.png";
import ClubApply from "../ClubApply/ClubApply";
import ClubEvent from "../ClubEvent/ClubEvent";
import { jwtDecode } from "jwt-decode";
import { FaInstagram } from "react-icons/fa";

const API_URL = process.env.REACT_APP_API_URL;

const getUserInfo = () => {
  const token = localStorage.getItem("accessToken");
  console.log("🔹 accessToken:", token);
  if (!token) return null;
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error("🚨 Invalid token:", error);
    return null;
  }
};

function ClubInfo() {
  const { club_id } = useParams();
  const navigate = useNavigate();
  const [clubInfo, setClubInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // ✅ selectedItem 상태 추가
  const [selectedItem, setSelectedItem] = useState("동아리 소개");

  const userInfo = useMemo(() => getUserInfo(), []);

  const isClubAdmin = userInfo?.club_ids?.includes(Number(club_id)); 
  console.log("🔹 현재 클럽 ID:", club_id);
  console.log("🔹 관리자 클럽 목록:", userInfo?.club_ids);
  console.log("🔹 isClubAdmin:", isClubAdmin);

  useEffect(() => {
    if (!userInfo) {
      alert("로그인이 필요합니다!");
      navigate("/login");
    }
  }, [userInfo, navigate]);

  useEffect(() => {
    const fetchClubData = async () => {
      setLoading(true);
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setError("로그인이 필요합니다.");
        setLoading(false);
        return;
      }

      try {
        console.log("🔹 API 요청 헤더:", { Authorization: `Bearer ${token}` });
        const response = await axios.get(`${API_URL}/api/clubs/${club_id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            "ngrok-skip-browser-warning": "69420",
          },
        });
        setClubInfo(response.data);
      } catch (err) {
        console.error("🚨 API Error:", err.response || err.message);
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
    ...(isClubAdmin ? ["모집공고 작성", "모집공고 수정"] : []),
  ];

  const handleSidebarClick = (item) => {
    setSelectedItem(item);
    if (item === "모집공고 작성") {
      navigate(`/recruitment/create/${club_id}`);
    } else if (item === "모집공고 수정") {
      navigate(`/recruitment/edit/${club_id}`);
    } else {
      navigate(`/clubinfo/${club_id}`, { state: { defaultTab: item } });
    }
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
                  {clubInfo?.club_contact_phone_number || "연락처 정보가 없습니다."}
                </S.ContactValue>
              </S.CardInfoItem>
              <S.CardInfoItem>
                <S.ContactLabel>SNS</S.ContactLabel>
                <S.ContactValue>
                  {clubInfo?.club_sns1 ? (
                    <S.Link
                      href={clubInfo.club_sns1}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram size={24} />
                    </S.Link>
                  ) : (
                    "SNS 정보가 없습니다."
                  )}
                </S.ContactValue>
              </S.CardInfoItem>
            </S.CardInfoBox>
          </S.CardContent>
        </S.CardContainer>

        {selectedItem === "동아리 소개" && (
          <S.Section>
            <S.SectionTitle>동아리 설명</S.SectionTitle>
            <S.SectionContent>
              {clubInfo?.club_description || "동아리 설명이 없습니다."}
            </S.SectionContent>
          </S.Section>
        )}

        {selectedItem === "모집 공고" && <ClubApply club_id={club_id} />}
        {selectedItem === "행사 공고" && <ClubEvent club_id={club_id} />}
      </S.InfoContainer>
    </S.PageContainer>
  );
}

export default ClubInfo;
