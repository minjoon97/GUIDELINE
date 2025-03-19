import useColorStore from "../../store/useColorStore";
import { HeaderMenu, LastDiv, Logo, Wrapper } from "./indexCss";

export default function Header() {
  const { blackOrWhite, currentSetIndex } = useColorStore();

  return (
    <Wrapper>
      <Logo>
        <img src={`/mainObject${currentSetIndex}.svg`} alt="mainObject"></img>
      </Logo>
      <HeaderMenu color={blackOrWhite}>
        <li>개인 포트폴리오</li>
        <li>에이전시 포트폴리오</li>
        <li>개발 프로젝트</li>
      </HeaderMenu>
      <LastDiv></LastDiv>
    </Wrapper>
  );
}
