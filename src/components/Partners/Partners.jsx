import React, { useState } from "react";
import { GridContainer, GridItem, ModalOverlay, ModalContent, CloseButton, Description } from "./Partners.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import partner1 from "../../asset/partner1.jpg";
import partner11 from "../../asset/partner1-1.jpg";
import partner12 from "../../asset/partner1-2.jpg";
import partner13 from "../../asset/partner1-3.jpg";
import partner2 from "../../asset/partner2.jpg";
import partner21 from "../../asset/partner2-1.jpg";

function Partners() {
  // 하드코딩된 포스트 데이터 (각 포스트는 썸네일, 슬라이더용 이미지들, 그리고 글 내용(description)을 가짐)
  const posts = [
    {
      id: 1,
      thumbnail: partner1,
      images: [
        {id:0, url: partner1},
        { id: 1, url: partner11 },
        { id: 2, url: partner12 },
        { id: 3, url: partner13},
      ],
      description: `동아리를 위한 혜택이 모이는 곳, "트리플 스페이스"

안녕하세요! 아주대학교 제41대 동아리연합회 '히얼'입니 다.
동아리를 위해 '히얼'과 함께하는 제휴 업체 및 혜택을 소개 합니다!
•혜택 내용
- 현금 또는 계좌이체 시 이용료의 10% 할인
•이용 방법
- 아주대학교 재학생임을 인증할 수 있는 학생증을 제시해 주세요.
자세한 내용은 카드뉴스를 참고해 주세요.
많은 이용 바랍니다. 감사합니다! `,
    },
    {
      id: 2,
      thumbnail: partner2,
      images: [
        { id: 0, url:partner2 },
        { id: 1, url: partner21 },
      ],
      description: `동아리를 위한 혜택이 모이는 곳, "정원볼링센터"
안녕하세요! 아주대학교 제41대 동아리연합회 '히얼'입니다.
동아리를 위해 '히얼'과 함께하는 제휴 업체 및 혜택을 소개합니다!
•혜택 내용
- 부분대관 (5레일) 또는 전체대관(10레인) 예약 시 대관비 무료 (게임비 별도 결제)
•이용 방법
- 아주대학교 재학생임을 인증할 수 있는 학생증을 제시해 주세요.
자세한 내용은 카드뉴스를 참고해 주세요.
많은 이용 바랍니다. 감사합니다!`,
    },
    // 필요에 따라 추가 포스트 작성
  ];

  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);

  return (
    <div>
      <GridContainer>
        {posts.map((post) => (
          <GridItem
            key={post.id}
            src={post.thumbnail}
            alt={`Post ${post.id}`}
            onClick={() => {
              setSelectedPost(post);
              setSelectedSlideIndex(0);
            }}
          />
        ))}
      </GridContainer>

      {selectedPost && (
        <ModalOverlay onClick={() => setSelectedPost(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedPost(null)}>×</CloseButton>
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              initialSlide={selectedSlideIndex}
              onSlideChange={(swiper) => setSelectedSlideIndex(swiper.activeIndex)}
            >
              {selectedPost.images.map((img) => (
                <SwiperSlide key={img.id}>
                  <img
                    src={img.url}
                    alt={`Post ${selectedPost.id} Image ${img.id}`}
                    style={{ width: "100%", borderRadius: "8px" }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Description>{selectedPost.description}</Description>
          </ModalContent>
        </ModalOverlay>
      )}
    </div>
  );
}

export default Partners;
