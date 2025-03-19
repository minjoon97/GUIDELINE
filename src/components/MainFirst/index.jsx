import { CenterVisual, Contents, GoDown } from "./indexCss";
import useColorStore from "../../store/useColorStore";
import { useEffect, useState } from "react";

export default function MainFirst() {
  const { pointColor, blackOrWhite, currentSetIndex } = useColorStore();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // 알파벳 상태 관리
  const initialLetters = ["G", "U", "I", "D", "E", "L", "I", "N", "E"];
  const [letters, setLetters] = useState(initialLetters);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;

      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // 각 요소별 움직임 강도 계산
  const moveH2X = mousePosition.x * -4;
  const moveH2Y = mousePosition.y * -4;

  const moveH3X = mousePosition.x * -2; // h2보다 약간 덜 움직임
  const moveH3Y = mousePosition.y * -2;

  const movePX = mousePosition.x * -2; // 가장 적게 움직임
  const movePY = mousePosition.y * -2;

  // 알파벳 변경 함수 (좌클릭은 -1, 우클릭은 +1)
  const handleLetterClick = (index, direction) => {
    const newLetters = [...letters];
    const currentChar = newLetters[index];
    const currentCode = currentChar.charCodeAt(0);

    let nextCode;
    if (direction === "next") {
      // 다음 알파벳 (우클릭)
      if (currentCode === 90) {
        // Z
        nextCode = 65; // A
      } else if (currentCode === 122) {
        // z
        nextCode = 97; // a
      } else {
        nextCode = currentCode + 1;
      }
    } else {
      // 이전 알파벳 (좌클릭)
      if (currentCode === 65) {
        // A
        nextCode = 90; // Z
      } else if (currentCode === 97) {
        // a
        nextCode = 122; // z
      } else {
        nextCode = currentCode - 1;
      }
    }

    newLetters[index] = String.fromCharCode(nextCode);
    setLetters(newLetters);
  };

  // 우클릭 처리 함수
  const handleRightClick = (index, e) => {
    e.preventDefault(); // 기본 컨텍스트 메뉴 방지
    handleLetterClick(index, "next");
  };

  return (
    <Contents>
      <CenterVisual color={`${pointColor} ${blackOrWhite}`}>
        <p
          style={{
            transform: `translate(${movePX}px, ${movePY}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          2025
        </p>
        <h3
          style={{
            transform: `translate(${moveH3X}px, ${moveH3Y}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          Designer 710minjoon
        </h3>
        <h2
          style={{
            transform: `translate(${moveH2X}px, ${moveH2Y}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <span
            onClick={() => {
              setLetters([...initialLetters]);
            }}
          >
            <img
              src={`/mainObject${currentSetIndex}.svg`}
              alt="mainObject"
            ></img>
          </span>
          {letters.map((letter, index) => (
            <span
              key={index}
              onClick={() => handleLetterClick(index, "prev")}
              onContextMenu={(e) => handleRightClick(index, e)}
            >
              {letter}
            </span>
          ))}
        </h2>
      </CenterVisual>
      <GoDown>
        <span></span>
      </GoDown>
    </Contents>
  );
}
