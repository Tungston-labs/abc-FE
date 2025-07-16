import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // ⬅️ add useNavigate
import {
  SidebarContainer,
  Logo,
  MenuItem,
  MenuList,
  Icon,
  Label,
  LogoutButton,
} from './Sidebar.Style';
import { RiHome5Line } from "react-icons/ri";
import { IoIosSwitch } from "react-icons/io";
import { TbUsersGroup, TbCloudNetwork, TbReportSearch } from "react-icons/tb";
import { FaUserPlus } from "react-icons/fa";
import { FiLogOut } from 'react-icons/fi';

const Sidebar = () => {
  const navigate = useNavigate(); // ⬅️ initialize navigate

  const handleLogout = () => {
    // Optional: clear tokens or localStorage here
    // localStorage.clear();
    navigate('/login'); // ⬅️ navigate to login page
  };

  const menuItems = [
    { path: '/', label: 'Dashboard', icon: <RiHome5Line /> },
    { path: '/switches', label: 'Switches', icon: <IoIosSwitch /> },
    { path: '/olt', label: 'OLT', icon: <TbUsersGroup /> },
    { path: '/lco', label: 'LCO', icon: <TbUsersGroup /> },
    { path: '/isp', label: 'ISP', icon: <TbCloudNetwork /> },
    { path: '/customer', label: 'Customer', icon: <FaUserPlus /> },
    { path: '/report', label: 'Report', icon: <TbReportSearch /> },
  ];

  return (
    <SidebarContainer>
      <Logo>Logo</Logo>

      <MenuList>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            style={{ textDecoration: 'none' }}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {({ isActive }) => (
              <MenuItem active={isActive}>
                <Icon>{item.icon}</Icon>
                <Label>{item.label}</Label>
              </MenuItem>
            )}
          </NavLink>
        ))}
      </MenuList>

      <LogoutButton onClick={handleLogout}>
        <FiLogOut />
        Log out
      </LogoutButton>
    </SidebarContainer>
  );
};

export default Sidebar;
