import styled from "styled-components";
import Crab from "../../src/Common/Crab";

const Main = () => {
  return (
    <MainStyle>
      <MainContentsStyle>
        <Crab width={15} height={15} />
        <MainContextStyle>
          <h1>TEAM DEF:CON</h1>
          <p>유용민 바보</p>
        </MainContextStyle>
      </MainContentsStyle>
    </MainStyle>
  );
};

const MainStyle = styled.div`
  font-family: "Noto Sans KR";
  height: 100vh;
  padding: 18rem 23rem 0rem 23rem;
  text-align: right;
`;

const MainContentsStyle = styled.div`
    display: flex;
    
`;

const MainContextStyle = styled.div`
    margin-left: 30rem;
`


export default Main;