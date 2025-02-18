import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
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

// 모달창의 최대 높이를 제한하여 내용이 길어져도 전체 크기가 뷰포트를 넘지 않도록 함
export const ModalContent = styled.div`
  background: #fff;
  width: 90%;
  max-width: 400px;
  max-height: 80vh;
  border-radius: 8px;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* 내부 스크롤 영역을 별도 처리 */

  @media (max-width: 768px) {
    width: 80vw;
    max-height: 80vh;
    padding: 10px;
  }
`;

export const ModalBody = styled.div`
  overflow-y: auto;
  flex: 1;
  padding-top: 40px;

  /* WebKit 기반 브라우저 (Chrome, Safari, Edge) */
  &::-webkit-scrollbar {
    width: 1px; /* 스크롤바의 너비를 6px로 설정 */
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 3px;
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.3) transparent;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    top: 5px;
    right: 5px;
    font-size: 20px;
  }
`;

export const SwiperWrapper = styled.div`
  width: 100%;
  flex: 1;

  @media (max-width: 768px) {
    height: 70%;
  }
`;

export const ModalImage = styled.img`
  width: 100%;
  border-radius: 8px;

  @media (max-width: 768px) {
    height: 100%;
    object-fit: contain;
  }
`;

export const Description = styled.div`
  margin-top: 10px;
  padding: 10px;
  font-size: 16px;
  text-align: left;
  color: #333;
  background: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  line-height: 1.5;
  white-space: pre-wrap; /* 줄바꿈 유지 */

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }
`;
