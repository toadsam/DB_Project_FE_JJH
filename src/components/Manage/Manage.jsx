import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import * as S from "./Manage.styles"; // 스타일 파일 임포트
import spiders from "../../asset/spiders.png";

function Manage() {
  const { id } = useParams(); // URL에서 동아리 ID를 받아옴
  const [clubInfo, setClubInfo] = useState(null);
  const [members, setMembers] = useState([]);
  const [waitingMembers, setWaitingMembers] = useState([]);
  const [recruitments, setRecruitments] = useState([]); // 행사공고 데이터
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState("clubInfo"); // 표시할 섹션 상태

  useEffect(() => {
    const fetchClubInfoAndMembers = async () => {
      try {
        // 클럽 정보 가져오기
        const clubResponse = await axios.get(
          `http://localhost:5001/api/clubs/${id}`
        );
        setClubInfo(clubResponse.data);

        // 회원 리스트 가져오기
        const membersResponse = await axios.get(
          `http://localhost:5001/api/clubs/${id}/member`
        );
        setMembers(membersResponse.data);

        // 신청 목록 가져오기
        const waitingMembersResponse = await axios.get(
          `http://localhost:5001/api/clubs/${id}/waitingMember`
        );
        setWaitingMembers(waitingMembersResponse.data);

        // 행사 공고 가져오기
        const recruitmentsResponse = await axios.get(
          `http://localhost:5001/api/clubs/${id}/recruitments`
        );
        console.log("Recruitments Data:", recruitmentsResponse.data);
        setRecruitments(recruitmentsResponse.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchClubInfoAndMembers();
  }, [id]);
  const approveMember = (member) => {
    // 회원 리스트에 추가
    setMembers((prevMembers) => [
      ...prevMembers,
      { ...member, role: "일반 회원", activity: "활동 중" },
    ]);
    // 신청 리스트에서 제거
    setWaitingMembers((prevWaiting) =>
      prevWaiting.filter((m) => m.user_id !== member.user_id)
    );
  };
  const sortedMembers = members.sort((a, b) => {
    if (a.role === "임원" && b.role !== "임원") {
      return -1; // 임원이 먼저 오도록
    }
    if (a.role !== "임원" && b.role === "임원") {
      return 1;
    }
    return 0; // 나머지는 순서 유지
  });
  const rejectMember = (member) => {
    // 신청 리스트에서 제거
    setWaitingMembers((prevWaiting) =>
      prevWaiting.filter((m) => m.user_id !== member.user_id)
    );
  };
  if (loading) return <S.PageContainer>Loading...</S.PageContainer>;
  if (error) return <S.PageContainer>Error: {error}</S.PageContainer>;

  return (
    <S.PageContainer>
      <S.Sidebar>
        <S.SidebarTitle>메뉴</S.SidebarTitle>
        <S.MenuList>
          <S.MenuItem onClick={() => setActiveSection("clubInfo")}>
            <S.MenuLink>동아리 정보</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem onClick={() => setActiveSection("members")}>
            <S.MenuLink>회원 리스트</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem onClick={() => setActiveSection("waitingMembers")}>
            <S.MenuLink>신청 목록</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem onClick={() => setActiveSection("recruitments")}>
            <S.MenuLink>행사 공고</S.MenuLink>
          </S.MenuItem>
        </S.MenuList>
      </S.Sidebar>

      <S.ContentContainer>
        {/* 동아리 정보 섹션 */}
        {activeSection === "clubInfo" && clubInfo && (
          <>
            <S.ClubName>{clubInfo.club_name}</S.ClubName>
            <S.Image src={spiders} alt={clubInfo.club_name} />
            <S.Description>{clubInfo.description}</S.Description>

            <S.ContactSection>
              <S.ContactTable>
                <S.TableRow>
                  <S.TableHeader>Email</S.TableHeader>
                  <S.TableData>{clubInfo.contact_email}</S.TableData>
                </S.TableRow>
                <S.TableRow>
                  <S.TableHeader>Phone</S.TableHeader>
                  <S.TableData>{clubInfo.contact_phone}</S.TableData>
                </S.TableRow>
                <S.TableRow>
                  <S.TableHeader>SNS</S.TableHeader>
                  <S.TableData>
                    <a
                      href={`https://www.instagram.com/${clubInfo.club_sns}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {clubInfo.club_sns}
                    </a>
                  </S.TableData>
                </S.TableRow>
              </S.ContactTable>
            </S.ContactSection>

            {/* 모집 공고 표시 */}
            <S.SectionTitle>모집 공고</S.SectionTitle>
            {recruitments.length > 0 ? (
              recruitments.map((recruitment) => (
                <S.RecruitmentBox key={recruitment.recruitment_id}>
                  <S.RecruitmentItem>
                    <S.RecruitmentItemTitle>제목:</S.RecruitmentItemTitle>
                    <S.RecruitmentItemContent>
                      {recruitment.title}
                    </S.RecruitmentItemContent>
                  </S.RecruitmentItem>
                  <S.RecruitmentItem>
                    <S.RecruitmentItemTitle>설명:</S.RecruitmentItemTitle>
                    <S.RecruitmentItemContent>
                      {recruitment.description}
                    </S.RecruitmentItemContent>
                  </S.RecruitmentItem>
                  <S.RecruitmentItem>
                    <S.RecruitmentItemTitle>게시일:</S.RecruitmentItemTitle>
                    <S.RecruitmentItemContent>
                      {new Date(recruitment.posted_date).toLocaleDateString()}
                    </S.RecruitmentItemContent>
                  </S.RecruitmentItem>
                  <S.RecruitmentItem>
                    <S.RecruitmentItemTitle>마감일:</S.RecruitmentItemTitle>
                    <S.RecruitmentItemContent>
                      {new Date(recruitment.deadline).toLocaleDateString()}
                    </S.RecruitmentItemContent>
                  </S.RecruitmentItem>
                </S.RecruitmentBox>
              ))
            ) : (
              <S.NoData>등록된 모집 공고가 없습니다.</S.NoData>
            )}

            <S.ButtonContainer>
              <S.EditButton>수정</S.EditButton>
            </S.ButtonContainer>
          </>
        )}

        {/* 회원 리스트 섹션 */}
        {activeSection === "members" && (
          <>
            <S.SectionTitle>회원 리스트</S.SectionTitle>
            <S.MemberList>
              {sortedMembers.length > 0 ? (
                sortedMembers.map((member) => (
                  <S.MemberItem key={member.user_id}>
                    <S.MemberName>{member.username}</S.MemberName>
                    <S.MemberRole>{member.role}</S.MemberRole>
                    <S.MemberActivity>{member.activity}</S.MemberActivity>
                    <S.MemberEmail>{member.email}</S.MemberEmail>
                    <S.MemberPhone>{member.phone}</S.MemberPhone>
                  </S.MemberItem>
                ))
              ) : (
                <S.NoData>회원이 없습니다.</S.NoData>
              )}
            </S.MemberList>
          </>
        )}
        {/* 신청 목록 섹션 */}
        {activeSection === "waitingMembers" && (
          <>
            <S.SectionTitle>신청 목록</S.SectionTitle>
            <S.MemberList>
              {waitingMembers.length > 0 ? (
                waitingMembers.map((member) => (
                  <S.MemberItem key={member.user_id}>
                    <S.MemberName>{member.username}</S.MemberName>
                    <S.MemberEmail>{member.email}</S.MemberEmail>
                    <S.MemberPhone>{member.phone}</S.MemberPhone>
                    <S.ButtonGroup>
                      <S.ApproveButton onClick={() => approveMember(member)}>
                        ✅ 승인
                      </S.ApproveButton>
                      <S.RejectButton onClick={() => rejectMember(member)}>
                        ❌ 거절
                      </S.RejectButton>
                    </S.ButtonGroup>
                  </S.MemberItem>
                ))
              ) : (
                <S.NoData>신청자가 없습니다.</S.NoData>
              )}
            </S.MemberList>
          </>
        )}
        {/* 행사 공고 섹션 */}
        {activeSection === "recruitments" && (
          <>
            <S.SectionTitle>모집 공고</S.SectionTitle>
            {recruitments.length > 0 ? (
              recruitments.map((recruitment) => (
                <S.RecruitmentBox key={recruitment.recruitment_id}>
                  <S.RecruitmentItem>
                    <S.RecruitmentItemTitle>제목:</S.RecruitmentItemTitle>
                    <S.RecruitmentItemContent>
                      {recruitment.title}
                    </S.RecruitmentItemContent>
                  </S.RecruitmentItem>
                  <S.RecruitmentItem>
                    <S.RecruitmentItemTitle>설명:</S.RecruitmentItemTitle>
                    <S.RecruitmentItemContent>
                      {recruitment.description}
                    </S.RecruitmentItemContent>
                  </S.RecruitmentItem>
                  <S.RecruitmentItem>
                    <S.RecruitmentItemTitle>게시일:</S.RecruitmentItemTitle>
                    <S.RecruitmentItemContent>
                      {new Date(recruitment.posted_date).toLocaleDateString()}
                    </S.RecruitmentItemContent>
                  </S.RecruitmentItem>
                  <S.RecruitmentItem>
                    <S.RecruitmentItemTitle>마감일:</S.RecruitmentItemTitle>
                    <S.RecruitmentItemContent>
                      {new Date(recruitment.deadline).toLocaleDateString()}
                    </S.RecruitmentItemContent>
                  </S.RecruitmentItem>
                </S.RecruitmentBox>
              ))
            ) : (
              <S.NoData>등록된 모집 공고가 없습니다.</S.NoData>
            )}
          </>
        )}
      </S.ContentContainer>
    </S.PageContainer>
  );
}

export default Manage;
