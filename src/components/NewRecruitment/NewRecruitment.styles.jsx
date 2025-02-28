import styled from "styled-components";

/* ✅ 모집공고 목록 페이지로 이동하는 제목 */
export const TitleLink = styled.h1`
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  color: #1d1d1f;
  text-align: center;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-top: 20px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #0056b3;
  }
`;
export const EventBox = styled.div`
  width: 180px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  margin-bottom: 30px;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }
`;

/* ✅ "더보기" 버튼 스타일 (기존 카드 스타일과 동일) */
export const MoreBox = styled(EventBox)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 40px; /* 기존 Container의 좌우 여백과 맞춤 */
  box-sizing: border-box;
  background-color: #f6f4f4;
`;

export const TitleText = styled.h1`
  font-size: 14px;
  font-weight: 700;
  color: #1d1d1f;
  margin: 0;
`;

export const MoreButton = styled.button`
  font-size: 14px;
  color: #black;
  background-color: #f6f4f4;
  border: 1px solid rgb(164, 164, 164);
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgb(132, 142, 160);
  }
`;

/* 기존 스타일들 그대로 유지 */
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0 40px;
  justify-content: flex-start;
  background-color: #f6f4f4;
`;

export const MoreText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #007aff;
  text-align: center;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::before {
    content: attr(data-label);
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: #ff4d4f;
    color: white;
    font-size: 12px;
    font-weight: bold;
    padding: 4px 8px;
    border-radius: 4px;
  }
`;

export const Title = styled.h2`
  font-size: 15px;
  font-weight: 700;
  color: #1d1d1f;
  text-align: left;
  margin: 10px 10px 5px 10px;
  line-height: 1.4;
`;

export const Description = styled.p`
  font-size: 13px;
  color: #6e6e73;
  text-align: left;
  margin: 0 10px 10px 10px;
  line-height: 1.6;
`;

export const Location = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #007aff;
  text-align: left;
  margin: 0 10px;
`;

export const Date = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #8e8e93;
  text-align: left;
  margin: 5px 10px 10px 10px;
`;
