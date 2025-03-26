// indexCss.js - 스타일 컴포넌트 수정

import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;

  @media (max-width: 700px) {
    padding: 0 20px;
  }
`;

export const Logo = styled.h1`
  & > img {
    width: 30px;
  }
`;

export const HeaderMenu = styled.ul`
  display: flex;
  gap: 1rem;
  color: ${(props) => props.color};
  font-size: 14px;
  font-weight: 300;

  & > li {
    opacity: 0.5;
  }

  & > li:hover {
    cursor: pointer;
    opacity: 1;
  }

  @media (max-width: 700px) {
    display: none; /* 모바일에서는 기본 메뉴 숨김 */
  }
`;

export const LastDiv = styled.div`
  width: 30px;

  @media (max-width: 700px) {
    display: none; /* 모바일에서는 LastDiv 숨김 */
  }
`;

// 수정된 햄버거 버튼 스타일
export const HamburgerButton = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 26px;
  height: 18px;
  cursor: pointer;
  z-index: 1001;
  position: relative;

  @media (max-width: 700px) {
    display: flex; /* 모바일에서만 햄버거 버튼 표시 */
  }

  & > span {
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.color};
    transition: all 0.3s ease;
    border-radius: 1px;
  }

  /* 각 선의 위치 설정 */
  & > span:nth-child(1) {
    top: 0;
    transform: ${(props) =>
      props.isOpen ? "translateY(9px) rotate(45deg)" : "none"};
  }

  & > span:nth-child(2) {
    top: 8px; /* 중앙에 위치 */
    opacity: ${(props) => (props.$isOpen ? "0" : "1")};
  }

  & > span:nth-child(3) {
    bottom: 0;
    transform: ${(props) =>
      props.isOpen ? "translateY(-8px) rotate(-45deg)" : "none"};
  }
`;

// 모바일 메뉴 오버레이 스타일
export const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: ${(props) =>
    props.$isOpen ? "translateX(0)" : "translateX(+100%)"};
  transition: transform 0.4s ease;
`;

// 모바일 메뉴 스타일
export const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  list-style: none;
  padding: 0;

  & > li {
    opacity: 0.7;
    font-size: 18px;
    font-weight: 300;
    color: white;
    transition: opacity 0.3s ease;
  }

  & > li:hover {
    opacity: 1;
    cursor: pointer;
  }
`;
