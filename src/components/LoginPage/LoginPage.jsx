import React from "react";
import { Link } from "react-router-dom"; // Link 사용

function LoginPage() {
  return (
    <div>
      <h2>로그인 페이지</h2>
      <p>여기에 로그인 폼을 추가하세요.</p>
      <div style={{ marginTop: "20px" }}>
        <Link to="/edit-profile" style={{ marginRight: "10px" }}>
          내 정보 수정
        </Link>
        <Link to="/change-password">비밀번호 변경</Link>
      </div>
    </div>
  );
}

export default LoginPage;
