import styled from "styled-components";

export const Navbar = styled.nav`
  width: 100%;
  height: 5%;
  background-color: #292940;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.img`
  width: 80px;
  height: auto;
  margin-bottom: -4rem;
  margin-top: -4rem;
`;

export const NavItems = styled.div`
  display: flex;
  gap: 10px;
  margin-right: 50px
`;

export const NavItem = styled.div`
  color: #f5f5f5;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    color: #4caf50;
  }
`;

export const UserWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const UserIcon = styled.div`
  font-size: 1.8rem;
  cursor: pointer;

  &:hover {
    color: #4caf50;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #333;
  border: 1px solid #444;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

export const DropdownItem = styled.div<{ isAction: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
  color: #fff;
  cursor: ${({ isAction }) => (isAction ? "pointer" : "")};
  font-size: 0.9rem;
  border-bottom: 1px solid #D3D3D3;

  svg {
    font-size: 1.2rem; 
    color: #4caf50;
  }

  &:hover {
    background-color: ${({ isAction }) => (isAction ? "#4caf50" : "")};
    color: #fff;
    border-radius: 8px;

    svg {
      color: #fff;
    }
  }
`;

export const DropdownInfoItem = styled.div`

`