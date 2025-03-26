import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useColorStore from "../../store/useColorStore";
import {
  HeaderMenu,
  LastDiv,
  Logo,
  Wrapper,
  HamburgerButton,
  MobileMenuOverlay,
  MobileMenu,
} from "./indexCss";

export default function Header() {
  const { blackOrWhite, setColorSet, currentSetIndex } = useColorStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 모바일 메뉴가 열린 상태에서 스크롤 방지
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openPortfolio = () => {
    window.open(
      "https://drive.google.com/file/d/1us3iZWNtEnrsdI3jrnxVvjRQxPEKdAYw/view?usp=sharing",
      "_blank"
    );
    closeMenu();
  };

  const openDevProject = () => {
    window.open("https://minjoon97.github.io/portfolioSite/", "_blank");
    closeMenu();
  };

  const goToAgencyPortfolio = () => {
    setColorSet(0);
    closeMenu();
  };

  return (
    <Wrapper>
      <Link to="/">
        <Logo>
          <img src={`/mainObject${currentSetIndex}.svg`} alt="mainObject"></img>
        </Logo>
      </Link>

      {/* 데스크톱 메뉴 */}
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

      {/* 햄버거 메뉴 버튼 */}
      <HamburgerButton
        onClick={toggleMenu}
        color={blackOrWhite}
        $isOpen={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </HamburgerButton>

      {/* 모바일 메뉴 오버레이 */}
      <MobileMenuOverlay $isOpen={isMenuOpen}>
        <MobileMenu>
          <li onClick={openPortfolio}>개인 포트폴리오</li>
          <li onClick={goToAgencyPortfolio}>
            <Link
              to="/agencyportfolio"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              에이전시 포트폴리오
            </Link>
          </li>
          <li onClick={openDevProject}>개발 프로젝트</li>
        </MobileMenu>
      </MobileMenuOverlay>
    </Wrapper>
  );
}
