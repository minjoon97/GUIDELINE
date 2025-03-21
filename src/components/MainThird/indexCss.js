import styled from "styled-components";

export const Contents = styled.div`
  width: 100%;
  height: 100vh;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const ListItem = styled.div`
  max-width: 450px;
  width: 90%;
  padding: 1.5rem;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: white;
  transition: 0.2s;

  & > p {
    font-size: 14px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.8);
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
`;

export const TopLeft = styled.div`
  font-weight: 500;

  & > p:nth-of-type(2) {
    font-size: 13px;
    opacity: 0.7;
    padding-top: 4px;
    font-weight: 200;
  }
`;

export const ButtonBox = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: ${(props) => props.color};
  transform: translate(8px, -8px);
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    transform: rotate(-135deg);
  }
`;
