import React, { useState } from "react";
import * as S from "./AcademicSchedule.styles";

// 학사 일정 데이터
const scheduleData = {
  1: [
    { title: "임기 시작", date: "01.01 (수)" },
    {
      title: "동아리 4분기 사무감사 1차 제출 기간",
      date: "01.09 (목) ~ 01.18 (일)",
    },
  ],
  2: [
    {
      title: "동아리 4분기 사무감사 2차 제출 기간",
      date: "01.27(목) ~ 02.03 (일)",
    },
    { title: "1학기 등록", date: "02.19 (수) ~ 02.25 (화)" },
    { title: "전기 학위수여일", date: "02.21 (금)" },
    { title: "입학식", date: "02.25 (화)" },
  ],
  // 이후 월별 일정 추가 가능
};

function AcademicSchedule() {
  const [currentMonth, setCurrentMonth] = useState(2); // 초기 월 설정

  // 이전 달로 이동
  const handlePrevMonth = () => {
    setCurrentMonth((prev) => (prev === 1 ? 12 : prev - 1));
  };

  // 다음 달로 이동
  const handleNextMonth = () => {
    setCurrentMonth((prev) => (prev === 12 ? 1 : prev + 1));
  };

  return (
    <S.ScheduleContainer>
      {/* 상단 월 이동 버튼 */}
      <S.Header>
        <S.ArrowButton onClick={handlePrevMonth}>◀</S.ArrowButton>
        <S.CurrentMonth>{currentMonth}월</S.CurrentMonth>
        <S.ArrowButton onClick={handleNextMonth}>▶</S.ArrowButton>
      </S.Header>

      {/* 일정 목록 */}
      <S.ScheduleList>
        {scheduleData[currentMonth]?.length > 0 ? (
          scheduleData[currentMonth].map((item, index) => (
            <S.ScheduleItem key={index}>
              <S.Title>{item.title}</S.Title>
              <S.Date>{item.date}</S.Date>
            </S.ScheduleItem>
          ))
        ) : (
          <S.NoSchedule>등록된 일정이 없습니다.</S.NoSchedule>
        )}
      </S.ScheduleList>
    </S.ScheduleContainer>
  );
}

export default AcademicSchedule;
