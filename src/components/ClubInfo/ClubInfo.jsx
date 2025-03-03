import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./ClubInfo.styles";
import defaultImage from "../../asset/mainLogo.png";
import ClubApply from "../ClubApply/ClubApply";
import ClubEvent from "../ClubEvent/ClubEvent";
import RecruitmentPage from "../RecruitmentPage/RecruitmentPage"; // ✅ 추가
import EditRecruitmentPage from "../EditRecruitmentPage/EditRecruitmentPage"; // ✅ 추가
import { jwtDecode } from "jwt-decode";
import { FaInstagram } from "react-icons/fa";

const API_URL = process.env.REACT_APP_API_URL;

const getUserInfo = () => {
  const token = localStorage.getItem("accessToken");
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
  
  // ✅ 클릭하면 하단 내용만 바뀌도록 selectedTab 추가
  const [selectedTab, setSelectedTab] = useState("동아리 소개");

  const userInfo = useMemo(() => getUserInfo(), []);
  const isClubAdmin = userInfo?.club_ids?.includes(Number(club_id));

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
        const response = await axios.get(`${API_URL}/api/clubs/${club_id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
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
    setSelectedTab(item); // ✅ navigate를 사용하지 않고, 상태값만 변경
  };

  return (
    <S.PageContainer>
      <S.Sidebar>
        <S.SidebarTitle>카테고리</S.SidebarTitle>
        <S.SidebarList>
          {sidebarItems.map((item, index) => (
            <S.SidebarItem
              key={index}
              $isSelected={selectedTab === item}
              onClick={() => handleSidebarClick(item)}
            >
              {item}
            </S.SidebarItem>
          ))}
        </S.SidebarList>
      </S.Sidebar>

      <S.InfoContainer>
        {/* ✅ 동아리 정보 (고정) */}
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

        {/* ✅ 클릭한 메뉴에 따라 하단 내용만 변경 */}
        {selectedTab === "동아리 소개" && (
          <S.Section>
            <S.SectionTitle>동아리 설명</S.SectionTitle>
            <S.SectionContent>
              {clubInfo?.club_description || "동아리 설명이 없습니다."}
            </S.SectionContent>
          </S.Section>
        )}

        {selectedTab === "모집 공고" && <ClubApply club_id={club_id} />}
        {selectedTab === "행사 공고" && <ClubEvent club_id={club_id} />}

        {selectedTab === "모집공고 작성" && <RecruitmentPage />} {/* ✅ 모집공고 작성 */}
        
        {selectedTab === "모집공고 수정" && <EditRecruitmentPage />} {/* ✅ 모집공고 수정 */}
        
      </S.InfoContainer>
    </S.PageContainer>
  );
}

export default ClubInfo;
