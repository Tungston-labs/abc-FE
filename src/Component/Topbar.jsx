// src/components/Topbar.jsx
import React from 'react';
import {
  TopbarContainer,
  ProfileWrapper,
  ProfileImage,
  RoleLabel
} from './Topbar.Styles';

const Topbar = () => {
  return (
    <TopbarContainer>
      <div></div> {/* for left space */}
      <ProfileWrapper>
        <ProfileImage
          src="https://i.pravatar.cc/40?img=3" // replace with actual image URL
          alt="Profile"
        />
        <RoleLabel>Super Admin</RoleLabel>
      </ProfileWrapper>
    </TopbarContainer>
  );
};

export default Topbar;
