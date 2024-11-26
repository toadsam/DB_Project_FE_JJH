import React, { useState } from "react";
import * as S from "./Sidebar.styles";
import { Link, useParams } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // 사이드바 상태
  const { id } = useParams(); // URL에서 id 가져오기

  return (
    <>
      {/* ToggleButton의 위치를 동적으로 설정 */}
      <S.ToggleButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "<<" : ">>"} {/* 버튼 텍스트 */}
      </S.ToggleButton>
      {isOpen && (
        <S.Container>
          <S.MenuItem>
            {/* 회원 정보 링크에 id 파라미터 추가 */}
            <Link
              to={`/member-info/${id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              회원 정보
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            {/* 이벤트 정보 링크에 id 파라미터 추가 */}
            <Link
              to={`/event-info/${id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              이벤트 정보
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            {/* 지원하기 링크에 id 파라미터 추가 */}
            <Link
              to={`/club-apply/${id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              지원하기
            </Link>
          </S.MenuItem>
        </S.Container>
      )}
    </>
  );
}

export default Sidebar;
