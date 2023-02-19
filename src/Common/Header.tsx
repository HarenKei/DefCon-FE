import Link from "next/link";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderDiv>
      <Link href="/">
        <HeaderLogo src="/Images/mainLogo.svg" />
      </Link>
      <HeaderNavUl>
        <HeaderNavLi>
          <Link href="/Designs">Designs </Link>
        </HeaderNavLi>
        <HeaderNavLi>
          <Link href="/Projects">Projects</Link>
        </HeaderNavLi>
        <HeaderNavLi>
          <Link href="/Members">Members</Link>
        </HeaderNavLi>
      </HeaderNavUl>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 8vh;
  position: fixed;
  top: 0;
  z-index: 3;
  font-family: "Noto Sans KR";
`;

const HeaderLogo = styled.img`
  @media screen and (min-width: 1280px) {
    margin-top: 1.5rem;
    margin-left: 1.5rem;
    width: 150px;
    height: 30px;
  }

  @media screen and (min-width: 768px) {
    margin-left: 1rem;
    width: 150px;
    height: 30px;
  }

  width: 100px;
  height: 20px;
  margin-left: 0.5rem;
`;

const HeaderNavUl = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  @media screen and (min-width: 1280px) {
    margin-left: 2rem;
    margin-top: 2.5rem;
    margin-right: 1rem;
    font-size: 15pt;
  }

  @media screen and (min-width: 768px) {
    margin-left: 2rem;
    margin-top: 2rem;
    margin-right: 1.5rem;
    font-size: 15pt;
  }

  margin-top: 0.3rem;
  margin-right: 1rem;
  font-size: 10pt;
  font-weight: bold;
`;

const HeaderNavLi = styled.li`
  list-style: none;

  @media screen and (min-width: 1280px) {
    margin-left: 2rem;
    padding-bottom: 15px;
    
  }

  @media screen and (min-width: 768px) {
    margin-left: 1rem;
    padding-bottom: 15px;
  }

  margin-left: 1rem;

  a {
    text-decoration: none;
  }

  a:visited {
    color: #0e0e0e;
  }
`;

export default Header;
