import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const StyledSwiperSlide = styled(SwiperSlide)`
  width: 180px !important;

  @media (max-width: 768px) {
    width: 180px !important;
  }
`;
export const TitleRow = styled.div`
  display: flex;
  justify-content: flex-end; /* 기본적으로 오른쪽 정렬 */
  align-items: center;
  position: relative;
  width: 100%;
  padding: 20px 40px;
  box-sizing: border-box;
  background-color: #f6f4f4;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

export const TitleText = styled.h1`
  font-size: 14px;
  font-weight: 700;
  color: #1d1d1f;
  margin: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const MoreButton = styled.button`
  font-size: 14px;
  color: black;
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

// Swiper 또는 슬라이드 컨테이너로 사용할 영역
export const Container = styled.div`
  padding: 0 40px;
  background-color: #f6f4f4;

  @media (max-width: 768px) {
    padding: 0 20px;
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

  @media (max-width: 768px) {
    width: 180px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
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
