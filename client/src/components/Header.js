import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colorSet } from "../styles/Colors.js";
import logo from "../assets/savester_logo.png";

export const Header = () => {
  return (
    <HeaderWrapper>
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
            <StyledNavLink exact to="/dashboard" aria-label="Link to dashboard">
              Dashboard
            </StyledNavLink>
          </StyledLI>
          <StyledLI>
            <StyledNavLink exact to="/profile" aria-label="Link to profile">
              Profile
            </StyledNavLink>
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

export default Header;
