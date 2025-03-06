import React, { useState, useEffect } from 'react';
import * as S from './MiniClub.styles';
import axios from 'axios';
import defaultImage from '../../asset/mainLogo.png';
import { useNavigate, useSearchParams } from 'react-router-dom';
import collegesData from '../../colleges.json';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const API_URL = process.env.REACT_APP_API_URL;

function MiniClub() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialSearchTerm = searchParams.get('search') || '';
  const initialFilter = searchParams.get('subFilter') || '전체';
  const initialCollege = searchParams.get('college') || '';
  // 여기서 additional 필터를 읽어 배열로 변환 (이전에 department로 처리했던 부분을 수정)
  const initialAdditional = searchParams.get('additional')
    ? searchParams.get('additional').split(',')
    : [];

  // 필터 관련 state
  const searchTerm = initialSearchTerm;
  const selectedFilter = initialFilter; // 모집 필터: 전체, 수시, 상시
  const [selectedCollege, setSelectedCollege] = useState(initialCollege);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  // 추가 필터 값 (복수 선택)
  const [selectedAdditional, setSelectedAdditional] =
    useState(initialAdditional);

  const [colleges, setColleges] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 모바일 여부 감지
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 모바일 사이드바 확장 여부
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  useEffect(() => {
    setColleges(collegesData);
  }, []);
  // API 호출: 선택된 대학과 추가 필터를 기반으로 소학회 동아리 목록 조회
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const params = {};
        if (searchTerm) params.search = searchTerm;
        if (selectedCollege) params.college = selectedCollege;
        if (selectedDepartment) params.department = selectedDepartment;
        const queryString = new URLSearchParams(params).toString();
        const url = `${API_URL}/api/clubs/academic${
          queryString ? '?' + queryString : ''
        }`;
        console.log('API 호출 URL:', url);
        const response = await axios.get(url, {
          headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': '69420',
          },
        });
        setEvents(
          Array.isArray(response.data)
            ? response.data.map((event) => ({
                ...event,
                image: event.logo_url || defaultImage,
                description:
                  event.club_description || '설명이 제공되지 않았습니다.',
                recruitment_scope: event.recruitment_scope,
                recruitment_type: event.recruitment_type,
                recruitment_end_date: event.recruitment_end_date,
              }))
            : []
        );
      } catch (err) {
        setError(err.response?.data?.message || err.message);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [selectedCollege, searchTerm, selectedDepartment]);

  // 모집 마감일 계산 함수
  const getRecruitmentLabel = (event) => {
    if (event.recruitment_type === null) {
      return '상시';
    } else if (event.recruitment_type === '수시모집') {
      const today = new Date();
      const endDate = new Date(event.recruitment_end_date);
      const diffTime = endDate - today;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays < 0 ? '마감' : `D-${diffDays}`;
    }
    return '';
  };

  if (loading) return <S.PageContainer>Loading...</S.PageContainer>;
  if (error) return <S.PageContainer>Error: {error}</S.PageContainer>;

  // 클라이언트 측 필터링: 검색어로 시작하는 club_name만 선택 (대소문자 무시, trim 적용)
  let filteredEvents = events.filter((event) =>
    (event.club_name?.trim().toLowerCase() || '').startsWith(
      searchTerm.trim().toLowerCase()
    )
  );

  // 모집 필터 적용 (전체는 필터링하지 않음)
  if (selectedFilter === '수시') {
    filteredEvents = filteredEvents.filter(
      (event) => event.recruitment_type === '수시모집'
    );
  } else if (selectedFilter === '상시') {
    filteredEvents = filteredEvents.filter(
      (event) => !event.recruitment_type || event.recruitment_type === '상시'
    );
  }

  // 추가 필터 적용: 복수 선택된 추가 필터가 있을 경우 recruitment_scope와 비교
  if (selectedAdditional.length > 0) {
    filteredEvents = filteredEvents.filter((event) => {
      const scope = event.recruitment_scope;
      if (!scope) return false;
      const trimmedScope = scope.trim();
      const isMatch = selectedAdditional.some((filter) => {
        return trimmedScope === filter.trim();
      });
      return isMatch;
    });
  }

  const breadcrumbSearch = `소학회 > ${selectedFilter || '전체'}${
    selectedAdditional.length > 0 ? ' > ' + selectedAdditional.join(', ') : ''
  }`;

  // 예시: 사이드바에서 선택한 경우
  const breadcrumbSidebar = `소학회 > ${
    selectedCollege ? selectedCollege : '전체'
  }${selectedDepartment ? ' > ' + selectedDepartment : ''}`;

  const breadcrumb = searchTerm ? breadcrumbSearch : breadcrumbSidebar;
  return (
    <S.PageContainer>
      <S.Sidebar>
        {isMobile ? (
          <>
            <S.SidebarHeader
              onClick={() => setSidebarExpanded(!sidebarExpanded)}
            >
              <S.SidebarTitle>소학회</S.SidebarTitle>
              {sidebarExpanded ? <FaChevronUp /> : <FaChevronDown />}
            </S.SidebarHeader>
            {sidebarExpanded && (
              <S.SidebarList>
                {colleges.map((college, index) => (
                  <div key={index}>
                    <S.SidebarItem
                      onClick={() => {
                        setSelectedCollege(
                          selectedCollege === college.name ? '' : college.name
                        );
                        setSelectedAdditional([]);
                        setSelectedDepartment('');
                      }}
                      isselected={selectedCollege === college.name}
                    >
                      {college.name}
                    </S.SidebarItem>
                    {selectedCollege === college.name &&
                      college.departments.map((dept, idx) => (
                        <S.SidebarSubItem
                          key={idx}
                          onClick={() => {
                            setSelectedDepartment(dept);
                            setSidebarExpanded(false);
                          }}
                          isselected={selectedDepartment === dept}
                        >
                          {dept}
                        </S.SidebarSubItem>
                      ))}
                  </div>
                ))}
              </S.SidebarList>
            )}
          </>
        ) : (
          <>
            <S.SidebarTitle>소학회</S.SidebarTitle>
            <S.SidebarList>
              {colleges.map((college, index) => (
                <div key={index}>
                  <S.SidebarItem
                    onClick={() => {
                      setSelectedCollege(
                        selectedCollege === college.name ? '' : college.name
                      );
                      setSelectedAdditional([]);
                      setSelectedDepartment('');
                    }}
                    isselected={selectedCollege === college.name}
                  >
                    {college.name}
                  </S.SidebarItem>
                  {selectedCollege === college.name &&
                    college.departments.map((dept, idx) => (
                      <S.SidebarSubItem
                        key={idx}
                        onClick={() => setSelectedDepartment(dept)}
                        isselected={selectedAdditional.includes(dept)}
                      >
                        {dept}
                      </S.SidebarSubItem>
                    ))}
                </div>
              ))}
            </S.SidebarList>
          </>
        )}
      </S.Sidebar>

      <S.Content>
        <S.TopBar>
          <S.Title1>{breadcrumb}</S.Title1>
        </S.TopBar>

        <S.TitleBar />
        <S.Container>
          {filteredEvents.map((event) => (
            <S.EventBox
              key={event.club_id}
              onClick={() => navigate(`/clubinfo/${event.club_id}`)}
              bg={event.image}
            >
              <S.ImageWrapper
                data-label={getRecruitmentLabel(event)}
                data-scope={event.recruitment_scope || '정보 없음'}
                style={{ height: '180px', overflow: 'hidden' }}
              >
                <LazyLoadImage
                  src={event.image}
                  alt={event.club_name}
                  effect="blur"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </S.ImageWrapper>
              <S.Title>{event.club_name}</S.Title>
              <S.Description>
                {event.description.length > 25
                  ? `${event.description.slice(0, 25)}...`
                  : event.description}
              </S.Description>
            </S.EventBox>
          ))}
        </S.Container>
      </S.Content>
    </S.PageContainer>
  );
}

export default MiniClub;
