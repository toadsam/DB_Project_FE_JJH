// SearchPage.styles.js

import styled from 'styled-components';

export const PageContainer = styled.div`
  background-color: #fff;
  min-height: 100vh;
  padding: 16px;
  box-sizing: border-box;
`;

export const FilterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto; /* 중앙 정렬 */
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// 나머지 스타일들은 그대로 유지...
export const FilterSummary = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const OptionGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const OptionButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 20px;
  background-color: ${(props) => (props.isSelected ? '#007bff' : '#f0f0f0')};
  color: ${(props) => (props.isSelected ? '#fff' : '#333')};
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.isSelected ? '#0062cc' : '#e0e0e0')};
  }

  &:focus {
    outline: none;
  }
`;

export const SearchInputContainer = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 40px 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
`;

export const SearchButton = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0062cc;
  }

  &:focus {
    outline: none;
  }
`;
