import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; // 추가
import App from "./App";

test("renders the app without crashing", () => {
  render(
    <BrowserRouter>
      {" "}
      <App />
    </BrowserRouter>
  );

  // 예: "learn react"라는 텍스트가 화면에 나타나는지 확인
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
