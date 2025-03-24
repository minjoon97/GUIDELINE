import { Link, useParams } from "react-router-dom";
import portfolioData from "../../data/portfolioData";
import {
  Body,
  ButtonBox,
  Date,
  DisBox,
  DisTitle,
  Distribution,
  FirstBox,
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
              <Title>{data.name}</Title>
              <Date>2023.08</Date>
            </TitleBox>
            <Distribution>
              <DisTitle>디자인 작업 기여</DisTitle>
              <DisBox>
                Main<span>100%</span>
              </DisBox>
              <DisBox>
                Sub<span>80%</span>
              </DisBox>
            </Distribution>
          </FirstBox>
          <SecondBox>
            <p>
              2023서울뮤직페스티벌 포스터 배경의 블루와 그린을 메인컬러로,
              포스터속 무대 색상이자 그린과 조합이 좋은 옐로우를 포인트 컬러로
              사용하였습니다. 전체적으로 심플하고 세련된 디자인을 유지하는
              선에서 톡톡 튀는 요소들 과 포인트들을 사용하여 축제의 느낌을 살려
              디자인하였습니다. 단단한 레이아웃과 시원한 배치를 사용하여
              균형잡힌 느낌을 주면서도, 타이틀이나 버튼, 일러스트 등의 포인트
              요소 들은 색상, 배치, 미적인 부분에 신경을 써서 임팩트를 줬습니다.
              또한, 드래그 형식의 컨텐츠와 움직이는 벨트 등의 동적인 요소들을
              통해 사용자의 흥미를 유발하도록 하였습니다.
            </p>
            <button>사이트 바로가기</button>
          </SecondBox>
        </Info>
        <ImgBox>
          <MainImg></MainImg>
          <SubImg></SubImg>
        </ImgBox>
      </Wrapper>
    </Body>
  );
}
