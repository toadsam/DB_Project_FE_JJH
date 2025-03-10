import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from './ClubInfo.styles';
import defaultImage from '../../asset/mainLogo.png';
import ClubApply from '../ClubApply/ClubApply';
import ClubEvent from '../ClubEvent/ClubEvent';
import { jwtDecode } from 'jwt-decode';
import { FaInstagram, FaYoutube, FaLink, FaGlobe } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import RecruitmentPage from '../RecruitmentPage/RecruitmentPage'; // ✅ 추가
import EditRecruitmentPage from '../EditRecruitmentPage/EditRecruitmentPage'; // ✅ 추가

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const API_URL = process.env.REACT_APP_API_URL;

// ✅ 리프레시 토큰을 사용해 새로운 액세스 토큰을 요청하는 함수
const refreshAccessToken = async () => {
  console.log("🔄 Trying to refresh access token...");
  try {
    const response = await axios.post(
      `${API_URL}/api/auth/refresh`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true, // ✅ 서버가 refreshToken을 쿠키에서 가져갈 수 있도록 설정
      }
    );

    if (response.data.accessToken) {
      localStorage.setItem('accessToken', response.data.accessToken);
      console.log("✅ New access token received:", response.data.accessToken);
      return jwtDecode(response.data.accessToken);
    } else {
      console.error("🚨 No access token received from refresh API");
      return null;
    }
  } catch (error) {
    console.error("🚨 Refresh token request failed:", error.response?.data || error.message);
    return null;
  }
};

const getUserInfo = async () => {
  let token = localStorage.getItem('accessToken');

  if (!token || isTokenExpired(token)) {
    console.log("🚨 Access token missing or expired, trying refresh...");
    const newUser = await refreshAccessToken();

    if (!newUser) {
      console.log("🚨 Refresh token failed, user needs to log in.");
      return null;
    }

    token = localStorage.getItem('accessToken'); // ✅ 새로 발급받은 액세스 토큰 가져오기
  }

  try {
    return jwtDecode(token);
  } catch (error) {
    console.error("🚨 Invalid access token after refresh:", error);
    return null;
  }
};


// ✅ 토큰 만료 여부를 체크하는 함수 추가
const isTokenExpired = (token) => {
  try {
    const { exp } = jwtDecode(token);
    return exp * 1000 < Date.now();
  } catch (error) {
    return true; // 토큰이 잘못된 경우도 만료된 것으로 처리
  }
};



function ClubInfo() {
  const { club_id } = useParams();
  const navigate = useNavigate();
  const [clubInfo, setClubInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTab, setSelectedTab] = useState('동아리 소개');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const [userInfo, setUserInfo] = useState(null);

useEffect(() => {
  const fetchUserInfo = async () => {
    const user = await getUserInfo();
    setUserInfo(user);
  };

  fetchUserInfo();
}, []);

  const isClubAdmin = userInfo?.club_ids?.includes(Number(club_id));
  useEffect(() => {
    const checkUser = async () => {
      const user = await getUserInfo();
      if (!user) {
        alert("로그인이 필요합니다!");
        navigate("/login");
      } else {
        setUserInfo(user);
      }
    };
  
    checkUser();
  }, [navigate]);
  
  useEffect(() => {
    const fetchClubData = async () => {
      setLoading(true);
  
      let token = localStorage.getItem('accessToken');
      if (!token || isTokenExpired(token)) {
        console.log("🚨 Access token missing or expired, attempting refresh...");
        const newUserInfo = await refreshAccessToken();
        if (!newUserInfo) {
          setError("로그인이 필요합니다.");
          setLoading(false);
          return;
        }
        token = localStorage.getItem('accessToken'); // ✅ 최신 액세스 토큰 사용
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
  
  
  
  // 전화번호 포맷 함수 (예: 010-xxxx-xxxx)
  const formatPhoneNumber = (phoneNumber) => {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    if (cleaned.length === 11 && cleaned.startsWith('010')) {
      return cleaned.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    }
    return phoneNumber;
  };

  if (loading) return <S.Loading>Loading...</S.Loading>;
  if (error) return <S.Error>{error}</S.Error>;

  const getFormattedClubTitle = () => {
    if (!clubInfo) return '동아리 이름';
    if (clubInfo.club_type === '중앙동아리') {
      return `중앙동아리 > ${clubInfo.detail_category_1 || '분과 없음'} > ${
        clubInfo.club_name
      }`;
    } else if (clubInfo.club_type === '소학회') {
      return `소학회 > ${clubInfo.college_name || '단과대'} > ${
        clubInfo.department_name || '소속학과'
      } > ${clubInfo.club_name}`;
    }
    return clubInfo.club_name;
  };
  const socialLinks = [
    { url: clubInfo?.club_sns1, icon: <FaInstagram />, label: 'Instagram' },
    { url: clubInfo?.club_sns2, icon: <FaYoutube />, label: 'YouTube' },
    { url: clubInfo?.club_sns3, icon: <FaLink />, label: 'Linktree' },
    { url: clubInfo?.club_sns4, icon: <FaGlobe />, label: 'Website' },
  ].filter((sns) => sns.url); // 링크가 존재하는 것만 필터링

  // 기본 메뉴에 관리자인 경우에만 추가 메뉴를 포함
  const sidebarItems = [
    '동아리 소개',
    '모집 공고',
    '행사 공고',
    ...(isClubAdmin ? ['모집공고 작성', '모집공고 수정'] : []),
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
        <S.Header>
          <S.ClubTitle>{getFormattedClubTitle()}</S.ClubTitle>
          <S.TitleBar />
        </S.Header>
        <S.CardContainer>
          <S.CardLogo
            src={clubInfo?.logo_url || defaultImage}
            alt={clubInfo?.club_name || 'Club Logo'}
          />
          <S.CardContent>
            <S.ClubName>{clubInfo?.club_name || '동아리 이름'}</S.ClubName>
            <S.CardInfoBox>
              <S.CardInfoItem>
                <S.ContactLabel>위치</S.ContactLabel>
                <S.ContactValue>
                  {clubInfo?.club_location || '위치 정보가 없습니다.'}
                </S.ContactValue>
              </S.CardInfoItem>
              <S.CardInfoItem>
                <S.ContactLabel>연락처</S.ContactLabel>
                <S.ContactValue>
                  {clubInfo?.club_contact_phone_number
                    ? formatPhoneNumber(clubInfo.club_contact_phone_number)
                    : '연락처 정보가 없습니다.'}
                </S.ContactValue>
              </S.CardInfoItem>
              <S.CardInfoItem>
                <S.ContactLabel>SNS</S.ContactLabel>
                <S.ContactValue>
                  <S.SocialLinksContainer>
                    {socialLinks.map((sns, index) => (
                      <S.SocialLink key={index} href={sns.url} target="_blank">
                        {sns.icon}
                      </S.SocialLink>
                    ))}
                  </S.SocialLinksContainer>
                </S.ContactValue>
              </S.CardInfoItem>
            </S.CardInfoBox>
          </S.CardContent>
        </S.CardContainer>
        {selectedTab === '동아리 소개' && (
          <>
            <S.Section>
              <S.SectionTitle>동아리 설명</S.SectionTitle>
              <S.SectionContent>
                {clubInfo?.club_description
                  ? clubInfo.club_description
                      .replace(/\\n/g, '\n')
                      .split('\n')
                      .map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))
                  : '동아리 설명이 없습니다.'}
              </S.SectionContent>
            </S.Section>
            <S.Section>
              <S.SectionTitle>주요 활동</S.SectionTitle>
              <S.SectionContent>
                {clubInfo?.club_main_activities
                  ? clubInfo.club_main_activities
                      .replace(/\\n/g, '\n')
                      .split('\n')
                      .map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))
                  : '주요 활동 설명이 없습니다.'}
              </S.SectionContent>
            </S.Section>
            {clubInfo?.club_activity_images &&
              clubInfo.club_activity_images.length > 0 && (
                <S.Section>
                  <S.SectionTitle>활동 사진</S.SectionTitle>

                  {/* 📌 데스크탑에서는 기존 그리드 유지 */}
                  <S.ActivityImagesGrid>
                    {clubInfo.club_activity_images.map((image, index) => (
                      <S.ActivityImageItem
                        key={index}
                        src={image}
                        alt={`활동 사진 ${index + 1}`}
                        onClick={() => setSelectedImageIndex(index)}
                      />
                    ))}
                  </S.ActivityImagesGrid>

                  {/* 📌 모바일에서는 Swiper 적용 (손가락으로 스와이프 가능) */}
                  <S.MobileSwiperContainer>
                    <Swiper
                      spaceBetween={10}
                      slidesPerView="auto"
                      freeMode={true}
                      pagination={{ clickable: true, el: '.swiper-pagination' }}
                      modules={[Pagination]}
                      className="custom-swiper"
                    >
                      {clubInfo.club_activity_images.map((image, index) => (
                        <SwiperSlide key={index} style={{ width: '150px' }}>
                          <S.MobileGalleryImage
                            src={image}
                            alt={`활동 사진 ${index + 1}`}
                            onClick={() => setSelectedImageIndex(index)}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="swiper-pagination"></div>{' '}
                    {/* 👇 페이지네이션 위치 조정 */}
                  </S.MobileSwiperContainer>
                </S.Section>
              )}

            {selectedImageIndex !== null && (
              <S.ModalOverlay onClick={() => setSelectedImageIndex(null)}>
                <S.ModalImage
                  src={clubInfo.club_activity_images[selectedImageIndex]}
                  alt="확대된 활동 사진"
                />
              </S.ModalOverlay>
            )}
          </>
        )}
        {selectedTab === '모집 공고' && <ClubApply club_id={club_id} />}
        {selectedTab === '행사 공고' && <ClubEvent club_id={club_id} />}
        {selectedTab === '모집공고 작성' && <RecruitmentPage />}{' '}
        {/* ✅ 모집공고 작성 */}
        {selectedTab === '모집공고 수정' && <EditRecruitmentPage />}{' '}
        {/* ✅ 모집공고 수정 */}
      </S.InfoContainer>
    </S.PageContainer>
  );
}

export default ClubInfo;
