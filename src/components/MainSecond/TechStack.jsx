import { useEffect, useRef } from "react";
import { TechItem, TechLogo, CircleBg, Circle } from "./indexCss";

const TechStack = ({ isVisible }) => {
  // 기술 스택 데이터
  const techData = [
    { name: "PS", color: "#31A8FF", level: 65 },
    { name: "AI", color: "#FF9A00", level: 50 },
    { name: "XD", color: "#FF61F6", level: 40 },
    { name: "Figma", color: "#000000", level: 60 },
    { name: "HTML", color: "#E44D26", level: 55 },
    { name: "CSS", color: "#1572B6", level: 55 },
    { name: "JS", color: "#F7DF1E", level: 65 },
    { name: "React", color: "#61DAFB", level: 55 },
  ];

  const circleRefs = useRef([]);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true;

      circleRefs.current.forEach((circle, index) => {
        if (circle) {
          const skillPercent = techData[index].level;
          const circumference = 2 * Math.PI * 35;
          const targetOffset = circumference * (1 - skillPercent / 100);

          // transition 기반 애니메이션 사용
          circle.style.transition = "none"; // 트랜지션 끄기
          circle.style.strokeDashoffset = "283px"; // 초기 상태

          // 강제 리플로우
          void circle.offsetWidth;

          // 트랜지션 켜고 값 변경
          circle.style.transition = "stroke-dashoffset 1.5s ease-in-out";
          setTimeout(() => {
            circle.style.strokeDashoffset = targetOffset + "px";
          }, 50);
        }
      });
    }
  }, [isVisible]);

  return (
    <>
      {techData.map((tech, index) => (
        <TechItem key={index}>
          <CircleBg viewBox="0 0 100 100">
            <Circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke={tech.color}
              strokeWidth="6"
              ref={(el) => (circleRefs.current[index] = el)}
            />
          </CircleBg>
          <TechLogo>
            <img src={`/${tech.name}.svg`} alt="tech"></img>
          </TechLogo>
        </TechItem>
      ))}
    </>
  );
};

export default TechStack;
