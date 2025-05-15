import { useState } from "react";
import { NavbarProps } from "./types";
import * as S from './styles';
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import logo from "../../assets/images/logo.jpg";

const Navbar: React.FC<NavbarProps> = ({ onLogout, userName }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <S.Navbar>
      <S.Logo src={logo} alt="Logo do Sistema" />

      <S.NavItems>
        <S.NavItem>Dashboard</S.NavItem>
      </S.NavItems>
      <S.UserWrapper>
        <S.UserIcon onClick={toggleDropdown}>
          <FaUserCircle />
        </S.UserIcon>
        {isDropdownOpen && (
          <S.Dropdown>
            <S.DropdownItem isAction={false}>Olá, {userName}</S.DropdownItem>
            <S.DropdownItem onClick={onLogout} isAction={true}><FaSignOutAlt /> Logout</S.DropdownItem>
          </S.Dropdown>
        )}
      </S.UserWrapper>
    </S.Navbar>
  );
}

export default Navbar;