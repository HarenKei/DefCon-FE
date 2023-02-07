import styled from "styled-components";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import WorksCard from "../../src/Common/WorksCard";
import BackgroundCard from "../../src/Common/BackgroundCard";
import { useMediaQuery } from "react-responsive";

interface Props{
  isDesktop: boolean;
};

const dummyArray = [
  {
    id: "w1",
    text: "Android",
		image: "testImage.png"
  },
  {
    id: "w2",
    text: "iOS",
		image: "testImage.png"
  },
  {
    id: "w3",
    text: "Self-Repair",
		image: "testImage.png"
  },
  {
    id: "w4",
    text: "Web",
		image: "testImage.png"
  },
  {
    id: "w5",
    text: "Chat Bot",
		image: "testImage.png"
  },
];


const MainWorks = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width:768px)",
  });

  return (
    <MainWorksWrapper>
      <MainWorksContents isDesktop={isDesktop}>
      <WorksTitle isDesktop={isDesktop}>
        <h1>우리가 즐겨온 일들</h1>
        <p>
          우리 DEF:CON이 관심을 갖고 즐겨온 일들의 카테고리입니다.<br/>
          소프트웨어가 사용될 수 있다면 우리는 뭐든 재미있게 갖고 놀 수<br/>
          있습니다.
        </p>
      </WorksTitle>
      <BackgroundCard
        color={"#C7E7FF"}
        height={"35vh"}
        translateX={"-60vw"}
        translateY={"8vh"}
        type={"bordered"}
      />
      <BackgroundCard
        color={"#35B6F7"}
        height={"35vh"}
        translateX={"50vw"}
        translateY={"35vh"}
        type={"bordered"}
      />
			<ScrollMenuWrapper isDesktop={isDesktop}>
        <ScrollMenu>
          {dummyArray.map((items) => (
            <WorksCard key={items.id} text={items.text} image={items.image} />
          ))}
        </ScrollMenu>
			</ScrollMenuWrapper>
      </MainWorksContents>
    </MainWorksWrapper>
  );
};

const MainWorksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-bottom: 200px;
`;

const MainWorksContents = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: ${props=>props.isDesktop ? "" : "center"};
  margin-left: ${props=>props.isDesktop ? "400px" : "0px"};
`;

const WorksTitle = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items:${props=>props.isDesktop ? "" : "center"};
  

	h1 {
    text-align: ${props=>props.isDesktop ? "left" : "center"};
    font-size: ${props=>props.isDesktop ? "55pt" : "40pt"};
    letter-spacing: ${props=>props.isDesktop ? "-7px" : "-5px"};
  }

  p {
    margin-top: 10px;
    font-size: ${props=>props.isDesktop ? "18pt" : "15pt"};
    text-align: ${props=>props.isDesktop ? "18pt" : "center"};
    font-weight: 300;
  }
`;

const ScrollMenuWrapper = styled.div<Props>`
  width: ${props => props.isDesktop ? "70%" : "100%"};
  margin-top: 5vh;
`;


export default MainWorks;
