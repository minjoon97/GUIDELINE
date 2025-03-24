import styled from "styled-components";

export const Body = styled.div`
  background-color: ${(props) => props.color};
`;

export const Wrapper = styled.div`
  max-width: 1400px;
  width: 90%;
  margin: 0 auto;
  padding-top: 200px;
`;

export const ButtonBox = styled.div`
  padding: 0 160px;
  padding-bottom: 80px;

  & button {
    display: flex;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.5);
    outline: none;
    transition: 0.2s;

    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.8);
      cursor: pointer;
    }
  }
`;

export const Info = styled.div`
  padding: 0 160px;
  display: flex;
  font-size: 14px;
  margin-bottom: 80px;
`;

export const FirstBox = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleBox = styled.div``;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 600;
`;

export const Date = styled.p`
  padding-top: 8px;
  font-weight: 200;
  opacity: 0.8;
`;

export const Distribution = styled.div``;

export const DisTitle = styled.p`
  margin-top: 36px;
  margin-bottom: 10px;
`;

export const DisBox = styled.p`
  font-weight: 200;

  & > span {
    font-weight: 500;
    padding-left: 10px;
  }
`;

export const SecondBox = styled.div`
  flex: 1;

  & > p {
    line-height: 20px;
    font-weight: 300;
    opacity: 0.8;
  }

  & > button {
    margin-top: 40px;
    padding: 8px 12px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 100px;
    transition: 0.2s;

    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.8);
      cursor: pointer;
    }
  }
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MainImg = styled.div`
  border: 1px solid black;
  max-width: 680px;
  width: 90%;
`;

export const SubImg = styled.div`
  border: 1px solid black;
  max-width: 680px;
  width: 90%;
`;
