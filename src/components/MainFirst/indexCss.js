import styled from "styled-components";

export const Contents = styled.div`
  font-family: "Inter";
  width: 100%;
  height: 100vh;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CenterVisual = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(0, -50px);

  & > p {
    color: ${(props) => props.color.split(" ")[1]};
    opacity: 0.5;
    font-size: 12px;
    font-weight: 200;
    padding-bottom: 10px;
  }

  & > h3 {
    color: ${(props) => props.color.split(" ")[1]};
    font-size: 16px;
    font-weight: 300;
    padding-bottom: 30px;
  }

  & > h2 {
    color: ${(props) => props.color.split(" ")[0]};
    font-size: 86px;
    font-weight: 300;
    font-family: "Agbalumo";
    display: flex;

    & > span {
      transition: transform 0.2s;
    }

    & > span:nth-of-type(1) {
      transform: translate(0, -16px);
    }

    & > span:nth-of-type(1):hover {
      transform: translate(0, -16px) rotate(8deg);
    }

    & > span:hover {
      cursor: pointer;
      transform: rotate(8deg);
    }
  }
`;

export const GoDown = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: 1px solid ${(props) => props.color};
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;

  &:hover {
    transform: translate(-50%, 0) scale(1.05);
    cursor: pointer;
  }
`;
