import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
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
`;

export const LastDiv = styled.div`
  width: 30px;
`;
