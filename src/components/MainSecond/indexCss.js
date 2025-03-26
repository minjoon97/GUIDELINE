import styled, { keyframes } from "styled-components";

export const Contents = styled.div`
  width: 100%;
  height: 100vh;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-right: 50px;
  font-size: 14px;
  transform: translate(0, 20px);

  @media (max-width: 700px) {
    margin: 0 auto;
    flex-direction: row;
    transform: translate(0, 0);
    padding-right: 0;
  }

  & > li:nth-of-type(1) {
    font-weight: ${(props) => (props.$menuState === 0 ? 500 : 200)};
    opacity: ${(props) => (props.$menuState === 0 ? 1 : 0.5)};
  }

  & > li:nth-of-type(2) {
    font-weight: ${(props) => (props.$menuState === 1 ? 500 : 200)};
    opacity: ${(props) => (props.$menuState === 1 ? 1 : 0.5)};
  }

  & > li:hover {
    cursor: pointer;
  }
`;

export const InfoBox = styled.div`
  width: 90%;
  max-width: 480px;
  height: 400px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  overflow: hidden;

  @media (max-width: 700px) {
    margin: 0 auto;
    height: 500px;
  }
`;

export const IntroBox = styled.div`
  padding: 2rem;
`;

export const Title = styled.div`
  display: flex;
  gap: 5px;

  & > p {
    font-size: 22px;
    font-weight: 600;
  }

  & > div {
    width: 20px;
    height: 20px;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SubTitle = styled.p`
  font-size: 14px;
  opacity: 0.5;
  padding-top: 6px;
`;

export const Introduction = styled.p`
  padding-top: 20px;
  font-size: 15px;
  line-height: 18px;
`;

export const SkillBox = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Label = styled.div`
  font-size: 12px;
  width: 56px;
  height: 20px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(0, 10px);
`;

export const Skills = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin-bottom: 10px;

  @media (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const TechItem = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TechLogo = styled.div`
  width: 60%;
  height: 60%;
  z-index: 2;
  position: relative;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CircleBg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const fillCircleAnimation = keyframes`
  to {
    stroke-dashoffset: var(--target-offset);
  }
`;

export const Circle = styled.circle`
  stroke-dasharray: 283;
  stroke-dashoffset: 283;
  transform-origin: center;
  transform: rotate(-90deg);
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  /* 기본적으로 애니메이션 이름을 설정하지 않음 */
  animation-name: none;
`;

export const CareerBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const CarrerItem = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  height: 20%;
  padding: 1.4rem;

  & > div {
    display: flex;
    justify-content: space-between;

    & > p:nth-of-type(1) {
      font-size: 14px;
    }

    & > p:nth-of-type(2) {
      font-size: 13px;
      opacity: 0.8;
    }
  }

  & > p {
    font-size: 13px;
    font-weight: 300;
    padding-top: 5px;
    color: rgb(109, 109, 109);
  }
`;
