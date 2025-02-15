import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column; /* 제목과 카테고리를 세로로 배치 */
  gap: 10px;
  justify-content: center;
  margin-top: 30px;
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  color: #1d1d1f;
  text-align: left;
  margin-bottom: 20px;
  margin-left: 10px;
`;

export const ScrollWrapper = styled.div`
  display: flex;
  gap: 10px; /* 아이템 간 간격 */
  width: 100%; /* 전체 너비 */
  padding: 10px 0;
  justify-content: space-between; /* 아이템을 균등 분포 */
  overflow-x: auto; /* 수평 스크롤 활성화 */
  scroll-behavior: smooth;

  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
`;

export const CategoryBox = styled.div`
  flex: 0 0 auto; /* 고정된 크기로 설정하여 스크롤 가능 */
  width: 150px;
  height: 150px;
  border-radius: 16px;
  background-color: #ffffff;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.7); /* 이미지 어둡게 처리 */
  }

  span {
    position: absolute;
    font-size: 14px;
    font-weight: 700;
    color: white;
    z-index: 2;
    text-align: center;
  }
`;
