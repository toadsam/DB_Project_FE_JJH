import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 가져오기
import * as S from "./ClubCategory.styles";

const categories = [
  {
    title: "중앙동아리",
    color: "#007aff", // 파란색
    items: [
      "과학기술분과",
      "레저스포츠분과",
      "사회활동분과",
      "연행예술분과",
      "준동아리",
      "종교분과",
      "창작전시분과",
      "체육분과",
      "학술언론분과",
    ],
  },
  {
    title: "소학회",
    color: "#b58523", // 갈색
    items: [
      "소프트웨어융합대학",
      "공과대학",
      "사회과학대학",
      "경영대학",
      "인문대학",
      "자연과학대학",
      "첨단ICT융합대학",
      "약학대학",
      "간호대학",
    ],
  },
  {
    title: "행사",
    color: "#f79c43", // 주황색
    items: ["음악", "댄스", "전시", "봉사", "기타"],
  },
];

const CategoryList = () => {
  const navigate = useNavigate(); // useNavigate 훅 생성

  const handleNavigate = (path) => {
    navigate(path); // 전달된 경로로 이동
  };

  return (
    <S.Container>
      {categories.map((category, index) => (
        <S.CategoryGroup key={index}>
          {/* 중앙동아리 클릭 시 ClubList로 이동 */}
          <S.Title
            color={category.color}
            onClick={() => {
              if (category.title === "중앙동아리") handleNavigate("/clublist");
            }}
          >
            {category.title} &gt;
          </S.Title>
          <S.ItemList>
            {category.items.map((item, idx) => (
              <S.Item key={idx}>{item} &gt;</S.Item>
            ))}
          </S.ItemList>
        </S.CategoryGroup>
      ))}
    </S.Container>
  );
};

export default CategoryList;
