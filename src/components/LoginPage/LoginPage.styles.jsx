import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 100%; /* 화면 전체 높이 확보 */
  background-color: #f0f2f5;
`;

/* 흰 박스 전체 */
export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column; /* 세로 배치로 변경 */
  width: 700px;
  height: 400px;
  background: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  margin: 20px;
`;

/* 이미지와 로그인 폼을 가로로 배치하는 영역 */
export const ContentRow = styled.div`
  flex: 1; /* 남은 공간 모두 사용 */
  display: flex; /* 가로 배치 */
`;

/* 흰 박스 내부 하단 푸터 */
export const BoxFooter = styled.footer`
  width: 90%;
  margin: 0 auto; /* Footer 자체를 화면 가운데로 */
  border-top: 1px solid #ddd;
  padding: 10px 10px;
  display: flex; /* Flexbox 사용 */
  justify-content: space-between; /* 내부 텍스트를 양쪽 끝에 배치 */
  align-items: center; /* 수직 중앙 정렬 */
  color: #666;
  font-size: 12px;
`;

export const ImageSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none; /* 모바일에서는 이미지 영역 숨김 */
  }
`;

export const MascotImage = styled.img`
  width: 90%;
  height: 90%;
  object-fit: cover;
`;

export const LoginFormSection = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AuthBox = styled.div`
  position: relative;
  padding: 50px;
  margin: 0px;
  border-left: 1px solid black;

  @media (max-width: 768px) {
    border-left: none; /* 모바일에서는 border-left 제거 */
    padding: 30px; /* 필요에 따라 패딩 조정 */
  }
`;

export const Logo = styled.img`
  width: 180px;
  margin-left: 10px;
`;

export const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: rgb(12, 84, 148);
  margin-bottom: 25px;
  text-align: center;
`;

export const SubText = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

export const GoogleLoginWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #003f7f;
  }

  &.logout {
    background-color: #ff3366;
    &:hover {
      background-color: #cc0022;
    }
  }
`;

export const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const UserInfo = styled.p`
  font-size: 1rem;
  color: #333;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #0056b3;
  font-size: 14px;
  font-weight: bold;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #003f7f;
  }
`;
