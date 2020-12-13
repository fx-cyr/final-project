import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colorSet } from "../styles/Colors.js";
import logo from "../assets/savester_logo.png";
import { useAuth } from "../contexts/authContext";

export const Header = ({ month }) => {
  const { logout } = useAuth();
  const [errorMsg, setErrorMsg] = useState("");
  const handleLogout = async () => {
    setErrorMsg("");
    try {
      await logout();
    } catch (err) {
      console.log(err.stack);
      setErrorMsg("logout_failed");
    }
  };
  return (
    <HeaderWrapper>
      {errorMsg && window.alert(errorMsg)}
      <LeftHeaderContainer>
        <div>
          <CompanyName>Savester</CompanyName>
        </div>
        <Logo src={logo} />
      </LeftHeaderContainer>
      <RightNavBar>
        <StyledUL>
          <StyledLI>
            <StyledNavLink to={"/budget"} aria-label="Link to budget">
              Budget
            </StyledNavLink>
          </StyledLI>
          <StyledLI>
            <StyledNavLink
              to={"/transactions"}
              aria-label="Link to transactions"
            >
              Transactions
            </StyledNavLink>
          </StyledLI>
          <StyledLI>
            <StyledNavLink
              to={`/dashboard/${month}`}
              aria-label="Link to dashboard"
            >
              Dashboard
            </StyledNavLink>
          </StyledLI>
          <StyledLI>
            <SubmitBtn onClick={handleLogout}>Sign out</SubmitBtn>
          </StyledLI>
        </StyledUL>
      </RightNavBar>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${colorSet.primaryNavy};
  color: white;
  position: relative;
  display: flex;
`;

const LeftHeaderContainer = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
  top: 10px;
  margin-left: 2%;
  color: ${colorSet.primaryYellow};
`;

const CompanyName = styled.p``;

const RightNavBar = styled.nav`
  position: absolute;
  right: 1%;
  top: 45px;
  font-size: 1.2rem;
  display: flex;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin-right: 40px;

  &:hover {
  }
  &.active {
    border-bottom: 2px solid ${colorSet.primaryWhite};
  }
`;

const StyledUL = styled.ul`
  list-style: none;
  display: flex;
  align-items: baseline;
`;
const StyledLI = styled.li`
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
    font-weight: bolder;
    color: black;
  }
`;

const Logo = styled.img`
  width: 50px;
  margin-left: 20px;
`;

const SubmitBtn = styled.button`
  margin-bottom: 5px;
  color: white;
  font-size: 18px;
  border: 2px solid ${colorSet.primaryYellow};
  background: transparent;

  &:hover {
    background-color: ${colorSet.primaryYellow};
    cursor: pointer;
  }
`;

export default Header;
