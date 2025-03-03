import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import * as S from "./ClubInfo.styles";
import defaultImage from "../../asset/mainLogo.png";
import ClubApply from "../ClubApply/ClubApply";
import ClubEvent from "../ClubEvent/ClubEvent";
import { jwtDecode } from "jwt-decode";
import { FaInstagram } from "react-icons/fa";

const API_URL = process.env.REACT_APP_API_URL;

const getUserInfo = () => {
  const token = localStorage.getItem("accessToken"); // 최신 accessToken 가져오기
  console.log("🔹 accessToken:", token); // ✅ 콘솔에 accessToken 출력
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
  const location = useLocation();
  const [clubInfo, setClubInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // getUserInfo를 useMemo로 호출해 한 번만 계산되도록 함
  const userInfo = useMemo(() => getUserInfo(), []);

  // ✅ 로그인 여부 체크 후 로그인 페이지로 리디렉트
  useEffect(() => {
    if (!userInfo) {
      alert("로그인이 필요합니다!");
      navigate("/login"); // ✅ 로그인 페이지로 이동
    }
  }, [userInfo, navigate]);

  // JWT 토큰에 clubAdmin 속성이 true라면 해당 사용자는 클럽 관리자라고 가정
  const isClubAdmin = userInfo && userInfo.clubAdmin;
  console.log("🔹 isClubAdmin:", isClubAdmin); // ✅ 콘솔에 관리자 여부 출력

  // 관리자인 경우에만 추가 메뉴를 보여줌
  const [selectedItem, setSelectedItem] = useState(
    location.state?.defaultTab || "동아리 소개"
  );

  useEffect(() => {
    const fetchClubData = async () => {
      setLoading(true);
      const token = localStorage.getItem("accessToken"); // ✅ 토큰 가져오기
      if (!token) {
        setError("로그인이 필요합니다.");
        setLoading(false);
        return;
      }

      try {
        console.log("🔹 API 요청 헤더:", { Authorization: `Bearer ${token}` }); // ✅ 콘솔에 헤더 정보 출력
        const response = await axios.get(`${API_URL}/api/clubs/${club_id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // ✅ accessToken 포함
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

  // 전화번호 포맷 함수 (예: 010-xxxx-xxxx)
  const formatPhoneNumber = (phoneNumber) => {
    const cleaned = ("" + phoneNumber).replace(/\D/g, "");
    if (cleaned.length === 11 && cleaned.startsWith("010")) {
      return cleaned.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
    }
    return phoneNumber;
  };

  if (loading) return <S.Loading>Loading...</S.Loading>;
  if (error) return <S.Error>{error}</S.Error>;

  const getFormattedClubTitle = () => {
    if (!clubInfo) return "동아리 이름";
    if (clubInfo.club_type === "중앙동아리") {
      return `중앙동아리 > ${clubInfo.detail_category_1 || "분과 없음"} > ${
        clubInfo.club_name
      }`;
    } else if (clubInfo.club_type === "소학회") {
      return `소학회 > ${clubInfo.college_name || "단과대"} > ${
        clubInfo.department_name || "소속학과"
      } > ${clubInfo.club_name}`;
    }
    return clubInfo.club_name;
  };

  // ✅ 기본 메뉴 + 관리자 전용 메뉴 (isClubAdmin이 true일 때만 보이도록 설정)
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
          <S.ClubTitle>{getFormattedClubTitle()}</S.ClubTitle>
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
                  {clubInfo?.club_contact_phone_number
                    ? formatPhoneNumber(clubInfo.club_contact_phone_number)
                    : "연락처 정보가 없습니다."}
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
                      <FaInstagram
                        size={24}
                        style={{ verticalAlign: "middle" }}
                      />
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
