import { useEffect, useState } from "react";
import {
  CareerBox,
  CarrerItem,
  ContentBox,
  Contents,
  InfoBox,
  IntroBox,
  Introduction,
  Label,
  Menu,
  SkillBox,
  Skills,
  SubTitle,
  Title,
} from "./indexCss";
import useColorStore from "../../store/useColorStore";
import TechStack from "./TechStack";

export default function MainSecond({ currentSection }) {
  const [menuState, setMenuState] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const { pointColor } = useColorStore();

  useEffect(() => {
    // currentSection이 1이면 MainSecond가 보이는 중
    setIsVisible(currentSection === 1);
  }, [currentSection]);

  return (
    <Contents>
      <ContentBox>
        <Menu menuState={menuState} style={{ color: pointColor }}>
          <li
            onClick={() => {
              setMenuState(0);
            }}
          >
            710minjoon
          </li>
          <li
            onClick={() => {
              setMenuState(1);
            }}
          >
            업무경험 및 교육
          </li>
        </Menu>
        <InfoBox>
          {menuState === 0 && (
            <IntroBox>
              <Title>
                <p>710minjoon</p>
                {/* <div>?</div> */}
              </Title>
              <SubTitle>WEB/APP UIUX Designer</SubTitle>
              <Introduction>
                안녕하세요! 의미있는 인생을 꿈꾸는 저는 공대생 출신 디자이너
                김민준입니다. 디자인이 너무 좋아서 졸업 후 디자이너로의 전향을
                결심했고, 현재 끊임없이 배우며 성장하고 있습니다!
              </Introduction>
              <SkillBox>
                <Label>기술스택</Label>
                <Skills>
                  <TechStack isVisible={isVisible} />
                </Skills>
              </SkillBox>
            </IntroBox>
          )}
          {menuState === 1 && (
            <CareerBox>
              <CarrerItem>
                <div>
                  <p>인천대학교 전자공학과</p>
                  <p>2016.03 - 2023.02</p>
                </div>
                <p>학사 졸업</p>
              </CarrerItem>
              <CarrerItem>
                <div>
                  <p>아이씨뱅큐</p>
                  <p>2022.07 - 2022.12</p>
                </div>
                <p>개발팀 인턴</p>
              </CarrerItem>
              <CarrerItem>
                <div>
                  <p>디자인나스</p>
                  <p>2023.02 - 2023.06</p>
                </div>
                <p>uiux nd 클래스</p>
              </CarrerItem>
              <CarrerItem>
                <div>
                  <p>잇다소프트</p>
                  <p>2023.06 - 2024.01</p>
                </div>
                <p>디자인팀 디자이너</p>
              </CarrerItem>
              <CarrerItem>
                <div>
                  <p>프로그래머스 데브코스 과정</p>
                  <p>2024.07 - 2024.12</p>
                </div>
                <p>프론트엔드 1기</p>
              </CarrerItem>
            </CareerBox>
          )}
        </InfoBox>
      </ContentBox>
    </Contents>
  );
}
