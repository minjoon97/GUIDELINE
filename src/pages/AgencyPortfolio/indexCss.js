import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  padding-top: 200px;
`;

export const Title = styled.p`
  font-family: "Agbalumo";
  font-size: 24px;
  text-align: center;
  padding-bottom: 80px;
`;

export const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding-bottom: 200px;
`;

export const Thumbnail = styled.div`
  width: 100%;
  height: 140px;
  border-radius: 32px;
  border: 1px solid #efefef;
  margin-bottom: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 15px;
  color: black;
  transition: 0.2s;

  &:hover ${Thumbnail} {
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

export const Gdweb = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgb(241, 241, 241);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 40px;
  box-shadow: 1px 2px 8px rgb(230, 230, 230);
  position: absolute;
  top: -10px;
  right: 6px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 10px;
  }
`;

export const ItemInfo = styled.div`
  text-align: center;
`;

export const ItemName = styled.p`
  font-size: 14px;
  font-weight: 300;
  margin: 8px 0;
`;

export const ItemDate = styled.p`
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
`;
