import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const Background = styled.div`
  width: 25%;
  background-color: ${(props) => props.background || "#101e2b"};
  transition: background-color 0.2s ease;
  position: relative;
  z-index: 1;

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
