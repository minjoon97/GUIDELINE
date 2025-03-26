import { useEffect, useRef, useState } from "react";

import {
  Background,
  Wrapper,
  ColorPicker,
  ColorItem,
  BackgroundContainer,
  MainContainer,
  Section,
  GlobalStyles,
} from "./indexCss";
import useColorStore from "../../store/useColorStore";
import MainFirst from "../../components/MainFirst";
import MainSecond from "../../components/MainSecond";
import MainThird from "../../components/MainThird";

export default function MainPage() {
  const { backgroundColor, blackOrWhite, setColorSet } = useColorStore();
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);

  const [bgColors, setBgColors] = useState([
    backgroundColor,
    backgroundColor,
    backgroundColor,
    backgroundColor,
  ]);

  // 색상 세트가 변경될 때 배경색을 순차적으로 업데이트
  useEffect(() => {
    // 첫 번째 배경 변경 (가장 오른쪽)
    setBgColors((prev) => [backgroundColor, prev[1], prev[2], prev[3]]);

    // 두 번째 배경 변경
    setTimeout(() => {
      setBgColors((prev) => [prev[0], backgroundColor, prev[2], prev[3]]);
    }, 10);

    // 세 번째 배경 변경
    setTimeout(() => {
      setBgColors((prev) => [prev[0], prev[1], backgroundColor, prev[3]]);
    }, 30);

    // 네 번째 배경 변경 (가장 왼쪽)
    setTimeout(() => {
      setBgColors((prev) => [prev[0], prev[1], prev[2], backgroundColor]);
    }, 70);
  }, [backgroundColor]);

  useEffect(() => {
    setColorSet(4);
  }, []);

  // 배경색들만 배열로 가져오기 (UI에 표시할 색상)
  const backgroundColors = [
    "#F1F1F1",
    "#86D7FF",
    "#1E6DFF",
    "#0143BE",
    "#142B6F",
    "#101E2B",
  ];

  const handleColorClick = (index) => {
    setColorSet(index);
  };

  const totalSections = 3;

  // 특정 섹션으로 스크롤 이동
  const scrollToSection = (index) => {
    if (containerRef.current) {
      setCurrentSection(index);
      containerRef.current.style.transform = `translateY(-${index * 100}vh)`;
    }
  };

  // 다음 섹션으로 이동
  const scrollDown = () => {
    if (currentSection < totalSections - 1 && !isScrolling) {
      setIsScrolling(true);
      scrollToSection(currentSection + 1);
      setTimeout(() => setIsScrolling(false), 800); // 애니메이션 시간 후 잠금 해제
    }
  };

  // 이전 섹션으로 이동
  const scrollUp = () => {
    if (currentSection > 0 && !isScrolling) {
      setIsScrolling(true);
      scrollToSection(currentSection - 1);
      setTimeout(() => setIsScrolling(false), 800); // 애니메이션 시간 후 잠금 해제
    }
  };

  // 휠 이벤트 처리
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();

      if (isScrolling) return;

      if (e.deltaY > 0) {
        scrollDown();
      } else {
        scrollUp();
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [currentSection, isScrolling]);

  // 키보드 이벤트 처리
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        scrollDown();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        scrollUp();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSection, isScrolling]);

  // 터치 이벤트 처리 (모바일)
  useEffect(() => {
    const handleTouchStart = (e) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
      e.preventDefault();

      if (isScrolling) return;

      const touchEndY = e.touches[0].clientY;
      const diff = touchStartY - touchEndY;

      // 터치 방향 확인 (50px 이상 드래그 했을 때만 반응)
      if (diff > 50) {
        scrollDown();
      } else if (diff < -50) {
        scrollUp();
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("touchstart", handleTouchStart);
      container.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
    }

    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, [touchStartY, currentSection, isScrolling]);

  return (
    <Wrapper>
      <GlobalStyles />
      <ColorPicker>
        {backgroundColors.map((color, index) => (
          <ColorItem
            key={index}
            color={color}
            selected={color === backgroundColor}
            bow={blackOrWhite}
            onClick={() => handleColorClick(index)}
          />
        ))}
      </ColorPicker>
      <MainContainer ref={containerRef}>
        <Section>
          <MainFirst />
        </Section>
        <Section>
          <MainSecond currentSection={currentSection} />
        </Section>
        <Section>
          <MainThird></MainThird>
        </Section>
      </MainContainer>
      <BackgroundContainer>
        <Background background={bgColors[0]} bow={blackOrWhite} />
        <Background background={bgColors[1]} bow={blackOrWhite} />
        <Background background={bgColors[2]} bow={blackOrWhite} />
        <Background background={bgColors[3]} bow={blackOrWhite} />
      </BackgroundContainer>
    </Wrapper>
  );
}
