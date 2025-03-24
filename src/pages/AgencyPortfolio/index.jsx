import { Link } from "react-router-dom";
import {
  Contents,
  Gdweb,
  Item,
  ItemDate,
  ItemInfo,
  ItemName,
  Thumbnail,
  Title,
  Wrapper,
} from "./indexCss";

export default function AgencyListPage() {
  const list = [
    { name: "29초영화제", date: "2023.07", gdweb: true, logo: "/29sLogo.svg" },
    { name: "JX금속", date: "2023.08", gdweb: false, logo: "/jxLogo.svg" },
    {
      name: "서울뮤직페스티벌2023",
      date: "2023.08",
      gdweb: false,
      logo: "/smfLogo.svg",
    },
    {
      name: "세명테크",
      date: "2023.10",
      gdweb: true,
      logo: "/semyungLogo.svg",
    },
    { name: "삼녹", date: "2023.10", gdweb: true, logo: "/samnokLogo.svg" },
    { name: "메타스카이", date: "2023.12", gdweb: true, logo: "/metaLogo.svg" },
    { name: "PNK디자인", date: "2024.01", gdweb: false, logo: "/pnkLogo.svg" },
    {
      name: "이안컴퍼니",
      date: "2024.04",
      gdweb: false,
      logo: "/iannLogo.svg",
    },
    {
      name: "이외 프로젝트",
      date: "2023 - 2024",
      gdweb: false,
      logo: "/otherLogo.svg",
    },
  ];
  return (
    <Wrapper>
      <Title>AGENCY PORTFOLIO</Title>
      <Contents>
        {list.map((item, index) => (
          <Link to={`/agencyportfolio/${index}`} key={index}>
            <Item>
              <Thumbnail>
                {item.gdweb && (
                  <Gdweb>
                    <img src="/gdweb_logo.png" alt="gdweb"></img>
                  </Gdweb>
                )}
                <img src={item.logo} alt="logo"></img>
              </Thumbnail>
              <ItemInfo>
                <ItemName>{item.name}</ItemName>
                <ItemDate>{item.date}</ItemDate>
              </ItemInfo>
            </Item>
          </Link>
        ))}
      </Contents>
    </Wrapper>
  );
}
