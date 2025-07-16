import React from "react";
import {
  Container,
  BackButton,
  Title,
  TabSection,
  Tab,
  ProfileWrapper,
  ProfileImage,
  UploadIcon,
  FormGrid,
  InputGroup,
  Label,
  Input,
  SubTitle,
} from "./BasicCustomerDetails.Styles";
import { IoArrowBackSharp, IoCamera } from "react-icons/io5";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const CustomerInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const getActiveTab = () => {
    if (location.pathname.includes("/network")) return "Network";
    if (location.pathname.includes("/isp-information")) return "ISP";
    return "General";
  };

  const activeTab = getActiveTab();

  return (
    <Container>
      <BackButton>
        <IoArrowBackSharp />
        Back
      </BackButton>
      <Title>Customer info</Title>

      <ProfileWrapper>
        <ProfileImage src="https://i.pravatar.cc/100?img=3" alt="Profile" />
        <UploadIcon>
          <IoCamera />
        </UploadIcon>
      </ProfileWrapper>

      <TabSection>
        <Tab active={activeTab === "General"} onClick={() => navigate(`/basic-customer/${id}`)}>
          General
        </Tab>
        <Tab active={activeTab === "Network"} onClick={() => navigate(`/network/${id}`)}>
          Network
        </Tab>
        <Tab active={activeTab === "ISP"} onClick={() => navigate(`/isp-information/${id}`)}>
          ISP
        </Tab>
      </TabSection>

      <SubTitle>ISP Information</SubTitle>

      <FormGrid>
        <InputGroup>
          <Label>MAC ID</Label>
          <Input placeholder="Enter Mac ID" />
        </InputGroup>
        <InputGroup>
          <Label>ISP</Label>
          <Input placeholder="Enter ISP" />
        </InputGroup>
        <InputGroup>
          <Label>Plan</Label>
          <Input placeholder="Enter Plan" />
        </InputGroup>
        <InputGroup>
          <Label>EXP Date</Label>
          <Input placeholder="Enter Expiry Date" />
        </InputGroup>
        <InputGroup>
          <Label>VLAN</Label>
          <Input placeholder="Enter VLAN ID" />
        </InputGroup>
      </FormGrid>
    </Container>
  );
};

export default CustomerInfo;
