import styled, { createGlobalStyle } from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
`;

export const GlobalStyles = createGlobalStyle`
  /* 모든 요소의 스크롤바 숨기기 */
  * {
    -ms-overflow-style: none;  /* IE, Edge */
    scrollbar-width: none;     /* Firefox */
  }
  
  /* Chrome, Safari, Opera에서 스크롤바 숨기기 */
  *::-webkit-scrollbar {
    display: none;
  }
`;

export const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: -1; // 다른 콘텐츠 뒤에 배치
`;

export const Background = styled.div`
  width: 25%;
  background-color: ${(props) => props.background || "#101e2b"};
  transition: background-color 0.2s ease;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: ${(props) => props.bow};
    opacity: 0.05;
  }
`;

export const ColorPicker = styled.div`
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50px;
  transform: translate(0, -50%);
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ColorItem = styled.div`
  width: ${(props) => (props.selected ? "35px" : "25px")};
  border: ${(props) => (props.selected ? `1px solid ${props.bow}` : "none")};
  height: 12px;
  background-color: ${(props) => props.color};
  transition: width 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const MainContainer = styled.div`
  height: 100vh;
  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
`;

export const Section = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
