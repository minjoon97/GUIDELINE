import { Link, useParams } from "react-router-dom";
import portfolioData from "../../data/portfolioData";
import {
  Body,
  ButtonBox,
  Date,
  DisBox,
  DisTitle,
  Distribution,
  DisWrapper,
  FirstBox,
  Gdweb,
  ImgBox,
  Info,
  MainImg,
  SecondBox,
  SubImg,
  Title,
  TitleBox,
  Wrapper,
} from "./indexCss";

export default function AgencyDetailPage() {
  const { index } = useParams();
  const data = portfolioData[index];

  return (
    <Body color={data.color}>
      <Wrapper>
        <ButtonBox>
          <Link to="/agencyportfolio">
            <button>
              <img src="/Arrow 7.svg" alt="arrow"></img>
            </button>
          </Link>
        </ButtonBox>
        <Info>
          <FirstBox>
            <TitleBox>
              {data.gdweb && <Gdweb>gdweb수상</Gdweb>}
              <Title>{data.name}</Title>
              <Date>{data.date}</Date>
            </TitleBox>
            <Distribution>
              {(data.mainDistr || data.subDistr) && (
                <DisTitle>디자인 작업 기여</DisTitle>
              )}
              <DisWrapper>
                {data.mainDistr && (
                  <DisBox>
                    Main<span>{data.mainDistr}%</span>
                  </DisBox>
                )}
                {data.subDistr && (
                  <DisBox>
                    Sub<span>{data.subDistr}%</span>
                  </DisBox>
                )}
              </DisWrapper>
            </Distribution>
          </FirstBox>
          <SecondBox>
            <p>{data.description}</p>
            <button>사이트 바로가기</button>
          </SecondBox>
        </Info>
        <ImgBox>
          {data.mainImg && (
            <MainImg>
              <img src={data.mainImg} alt="mainImg"></img>
            </MainImg>
          )}
          {data.subImg && (
            <SubImg>
              <img src={data.subImg} alt="subImg"></img>
            </SubImg>
          )}
        </ImgBox>
      </Wrapper>
    </Body>
  );
}
