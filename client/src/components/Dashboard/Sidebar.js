import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colorSet } from "../../styles/Colors";

const Sidebar = ({ setMonth }) => {
  return (
    <Wrapper>
      <List>
        <ListItem>
          <NavigationLink
            onClick={() => {
              setMonth("2020-12");
            }}
            to="/dashboard/2020-12"
          >
            December 2020
          </NavigationLink>
        </ListItem>
      </List>

      <List>
        <ListItem>
          <NavigationLink
            onClick={() => {
              setMonth("2021-01");
            }}
            to="/dashboard/2021-01"
          >
            January 2021
          </NavigationLink>
        </ListItem>
      </List>

      <List>
        <ListItem>
          <NavigationLink
            onClick={() => {
              setMonth("2021-02");
            }}
            to="/dashboard/2021-02"
          >
            February 2021
          </NavigationLink>
        </ListItem>
      </List>

      <List>
        <ListItem>
          <NavigationLink
            onClick={() => {
              setMonth("2021-03");
            }}
            to="/dashboard/2021-03"
          >
            March 2021
          </NavigationLink>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <NavigationLink
            onClick={() => {
              setMonth("2021-04");
            }}
            to="/dashboard/2021-04"
          >
            April 2021
          </NavigationLink>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <NavigationLink
            onClick={() => {
              setMonth("2021-05");
            }}
            to="/dashboard/2021-05"
          >
            May 2021
          </NavigationLink>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <NavigationLink
            onClick={() => {
              setMonth("2021-06");
            }}
            to="/dashboard/2021-06"
          >
            June 2021
          </NavigationLink>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <NavigationLink
            onClick={() => {
              setMonth("2021-07");
            }}
            to="/dashboard/2021-07"
          >
            July 2021
          </NavigationLink>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <NavigationLink
            onClick={() => {
              setMonth("2021-08");
            }}
            to="/dashboard/2021-08"
          >
            August 2021
          </NavigationLink>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <NavigationLink
            onClick={() => {
              setMonth("2021-09");
            }}
            to="/dashboard/2021-09"
          >
            September 2021
          </NavigationLink>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <NavigationLink
            onClick={() => {
              setMonth("2021-10");
            }}
            to="/dashboard/2021-10"
          >
            October 2021
          </NavigationLink>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <NavigationLink
            onClick={() => {
              setMonth("2021-11");
            }}
            to="/dashboard/2021-11"
          >
            November 2021
          </NavigationLink>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <NavigationLink
            onClick={() => {
              setMonth("2021-12");
            }}
            to="/dashboard/2021-12"
          >
            December 2021
          </NavigationLink>
        </ListItem>
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  color: white;
  margin-right: 0;
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-top: 10px;
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  padding: 10px;
  font-size: 18px;
`;

const NavigationLink = styled(NavLink)`
  font-size: 14px;
  color: white;
  margin: 5px 0;
  text-decoration: none;
  border-radius: 15px;
  &::after {
    content: "";
    display: block;
    width: 0;
    border-top: 2px solid black;
    background: #000;
    transition: width 0.2s;
  }
  &:hover::after {
    width: 20%;
  }
  &.active {
    color: ${colorSet.primaryYellow};
  }
`;

export default Sidebar;
