// axiosInterceptor.js
import axios from "axios";
import { refreshAccessToken } from "./authUtils"; // ✅ Refresh Token 요청 함수

let isInterceptorSet = false;

export const setupAxiosInterceptors = () => {
  if (isInterceptorSet) return; // ✅ 이미 설정되어 있으면 중복 실행 방지
  isInterceptorSet = true;

  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response && error.response.status === 401) {
        console.warn("🔄 AccessToken 만료, 리프레시 토큰으로 갱신 중...");
        const newAccessToken = await refreshAccessToken();

        if (newAccessToken) {
          error.config.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios(error.config);
        }
      }
      return Promise.reject(error);
    }
  );
};
