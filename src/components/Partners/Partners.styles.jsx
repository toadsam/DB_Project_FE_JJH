import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  /* 최소 사이즈를 2.5배로 키워서 이미지가 더 크게 보이도록 함 */
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  padding: 20px;
`;

export const GridItem = styled.img`
  width: 100%;
  height: 340px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;


export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #fff;
  width: 90%;
  /* 최대 너비를 600px에서 400px로 줄임 */
  max-width: 400px;
  border-radius: 8px;
  padding: 20px;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const Description = styled.div`
  margin-top: 10px;
  font-size: 16px;
  text-align: center;
  color: #333;
`;
