import { Link } from "react-router-dom";
import useColorStore from "../../store/useColorStore";
import {
  ButtonBox,
  Contents,
  Descrip,
  ListItem,
  Top,
  TopLeft,
} from "./indexCss";

export default function MainThird() {
  const { backgroundColor, setColorSet, currentSetIndex } = useColorStore();
  return (
    <Contents>
      <ListItem
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1us3iZWNtEnrsdI3jrnxVvjRQxPEKdAYw/view?usp=sharing",
            "_blank"
          )
        }
      >
        <Top>
          <TopLeft>
            <p>
              개인 디자인 포트폴리오<span>외부링크</span>
            </p>
            <p>2020 - 2023</p>
          </TopLeft>
          <ButtonBox color={backgroundColor}>
            <img src={`/Arrow ${currentSetIndex}.svg`} alt="arrow"></img>
          </ButtonBox>
        </Top>
        <Descrip>
          개인작업, 아르바이트, 교육수료 등을 통해 쌓은 디자인 포트폴리오
        </Descrip>
      </ListItem>
      <ListItem
        onClick={() => {
          setColorSet(0);
        }}
      >
        <Link
          to="/agencyportfolio"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <Top>
            <TopLeft>
              <p>에이전시 디자인 프로젝트</p>
              <p>2023 - 2024</p>
            </TopLeft>
            <ButtonBox color={backgroundColor}>
              <img src={`/Arrow ${currentSetIndex}.svg`} alt="arrow"></img>
            </ButtonBox>
          </Top>
          <Descrip>에이전시 ‘잇다소프트’ 업무 프로젝트</Descrip>
        </Link>
      </ListItem>
      <ListItem
        onClick={() =>
          window.open("https://minjoon97.github.io/portfolioSite/", "_blank")
        }
      >
        <Top>
          <TopLeft>
            <p>
              개발 프로젝트<span>외부링크</span>
            </p>
            <p>2024 - 2025</p>
          </TopLeft>
          <ButtonBox color={backgroundColor}>
            <img src={`/Arrow ${currentSetIndex}.svg`} alt="arrow"></img>
          </ButtonBox>
        </Top>
        <Descrip>
          디자인 시안을 직접 사이트로 구현할 수 있는 능력을 갖추고 싶어서 약 1년
          동안 독학, 데브코스 등을 통해 쌓은 프론트엔드 개발 프로젝트
        </Descrip>
      </ListItem>
    </Contents>
  );
}
