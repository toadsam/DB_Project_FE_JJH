import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Category.styles";

import 체육 from "../../asset/체육.png";
import 학술 from "../../asset/학술.png";
import 종교 from "../../asset/종교.png";
import 문화예술 from "../../asset/문화예술.png";
import 창업 from "../../asset/창업.png";
import 사교 from "../../asset/사교.png";
import 봉사 from "../../asset/봉사.jpg";

const categories = [
  { name: "스포츠", image: 체육 },
  { name: "학술", image: 학술 },
  { name: "종교", image: 종교 },
  { name: "문화/예술", image: 문화예술 },
  { name: "창업", image: 창업 },
  { name: "사교", image: 사교 },
  { name: "봉사", image: 봉사 },
];

const CategoryList = () => {
  const scrollRef = useRef(null); // 스크롤 가능한 요소 참조
  const isDragging = useRef(false); // 드래그 상태 확인
  const startX = useRef(0); // 드래그 시작 지점
  const scrollLeft = useRef(0); // 드래그 시작 시 스크롤 위치
  const navigate = useNavigate();

  // 마우스 눌렀을 때
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  // 마우스 움직일 때
  const handleMouseMove = (e) => {
    if (!isDragging.current) return; // 드래그 상태가 아닐 경우 중단
    e.preventDefault(); // 기본 동작 방지
    const x = e.pageX - scrollRef.current.offsetLeft; // 현재 마우스 위치
    const walk = x - startX.current; // 드래그 거리 계산
    scrollRef.current.scrollLeft = scrollLeft.current - walk; // 스크롤 위치 업데이트
  };

  // 마우스 떼었을 때
  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleCategoryClick = (categoryName) => {
    // categoryName은 "문화/예술"이지만, encodeURIComponent()를 사용하면 URL에는 "문화%2F예술"로 인코딩됨.
    navigate(`/category/${encodeURIComponent(categoryName)}`);
  };

  return (
    <S.CategoryContainer>
      <S.ScrollWrapper
        ref={scrollRef} // 스크롤 참조
        onMouseDown={handleMouseDown} // 마우스 눌렀을 때
        onMouseMove={handleMouseMove} // 마우스 움직일 때
        onMouseUp={handleMouseUp} // 마우스 떼었을 때
        onMouseLeave={handleMouseUp} // 마우스가 영역을 떠났을 때도 처리
      >
        {categories.map((category, index) => (
          <S.CategoryBox
            key={index}
            onClick={() => handleCategoryClick(category.name)}
            style={{ cursor: "pointer" }} // 클릭 가능하다는 표시
          >
            <img src={category.image} alt={category.name} />
            <span>{category.name}</span>
          </S.CategoryBox>
        ))}
      </S.ScrollWrapper>
    </S.CategoryContainer>
  );
};

export default CategoryList;
