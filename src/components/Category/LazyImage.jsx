import React, { useState } from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* 로딩 전에는 blur 효과 적용, 로드 후에는 효과 제거 */
  filter: ${(props) =>
    props.loaded ? "brightness(0.7)" : "brightness(0.7) blur(15px)"};
  transition: filter 0.5s ease-out;
`;

const LazyImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <StyledImage
      src={src}
      alt={alt}
      loaded={loaded}
      onLoad={() => setLoaded(true)}
    />
  );
};

export default LazyImage;
