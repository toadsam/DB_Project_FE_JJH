import React from "react";
import { useParams } from "react-router-dom";
import * as S from "./EventInfo.styles"; // 스타일 파일 임포트

function EventInfo() {
  const { id } = useParams(); // URL에서 id 파라미터를 받아옴

  // 임시 데이터로 동아리 이벤트 정보를 표시
  const events = [
    { name: "정기공연", date: "2024-12-15", location: "아주대학교" },
    { name: "봄축제", date: "2025-04-01", location: "동아리방" },
  ];

  return (
    <S.InfoContainer>
      <S.Title>{id} 동아리의 이벤트 정보</S.Title>
      <S.EventList>
        {events.map((event, index) => (
          <S.EventItem key={index}>
            <S.EventName>{event.name}</S.EventName>
            <S.EventDate>{event.date}</S.EventDate>
            <S.EventLocation>{event.location}</S.EventLocation>
          </S.EventItem>
        ))}
      </S.EventList>
    </S.InfoContainer>
  );
}

export default EventInfo;
