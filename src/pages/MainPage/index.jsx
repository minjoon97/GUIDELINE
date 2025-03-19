import MainFirst from "../../components/MainFirst";
import { Background, Wrapper, ColorPicker, ColorItem } from "./indexCss";
import useColorStore from "../../store/useColorStore";

export default function MainPage() {
  const { backgroundColor, blackOrWhite, setColorSet } = useColorStore();

  // 배경색들만 배열로 가져오기 (UI에 표시할 색상)
  const backgroundColors = [
    "#ffffff",
    "#86D7FF",
    "#1E6DFF",
    "#0143BE",
    "#142B6F",
    "#101E2B",
  ];

  const handleColorClick = (index) => {
    setColorSet(index);
  };

  return (
    <Wrapper>
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
      <MainFirst />
      <Background background={backgroundColor} bow={blackOrWhite} />
      <Background background={backgroundColor} bow={blackOrWhite} />
      <Background background={backgroundColor} bow={blackOrWhite} />
      <Background background={backgroundColor} bow={blackOrWhite} />
    </Wrapper>
  );
}
