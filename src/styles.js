import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Logo = styled(Link)`
  color: #ff0000;
  width: 91rem;
  padding: 0.25em 1em;
`;

export const NavItem = styled(NavLink)`
  color: #ff0000;
  padding: 0.25em 1em;
`;

export const Center = styled.div`
  display: grid;
  place-items: center;
`;

export const Selector = styled.div`
  width: 100rem;
  padding: 0.25em 1em;
`;

export const Space = styled.div`
  margin-top: 100px;
`;

export const Space2 = styled.div`
  margin-top: 150px;
`;

export const Left = styled.div`
  position: relative;
  left: 0px;
`;

export const Right = styled.div`
  position: absolute;
  right: 0px;
`;

export const Right1 = styled.div`
  position: absolute;
  right: 0px;
`;

export const Image = styled.img`
  width: 450px;
  height: 550px;
`;

export const Align = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;
