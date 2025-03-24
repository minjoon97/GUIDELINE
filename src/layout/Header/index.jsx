import { Link } from "react-router-dom";
import useColorStore from "../../store/useColorStore";
import { HeaderMenu, LastDiv, Logo, Wrapper } from "./indexCss";

export default function Header() {
  const { blackOrWhite, setColorSet, currentSetIndex } = useColorStore();

  return (
    <Wrapper>
      <Link to="/">
        <Logo>
          <img src={`/mainObject${currentSetIndex}.svg`} alt="mainObject"></img>
        </Logo>
      </Link>
      <HeaderMenu color={blackOrWhite}>
        <li
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1us3iZWNtEnrsdI3jrnxVvjRQxPEKdAYw/view?usp=sharing",
              "_blank"
            )
          }
        >
          개인 포트폴리오
        </li>

        <li
          onClick={() => {
            setColorSet(0);
          }}
        >
          <Link
            to="/agencyportfolio"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            에이전시 포트폴리오
          </Link>
        </li>

        <li
          onClick={() =>
            window.open("https://minjoon97.github.io/portfolioSite/", "_blank")
          }
        >
          개발 프로젝트
        </li>
      </HeaderMenu>
      <LastDiv></LastDiv>
    </Wrapper>
  );
}
