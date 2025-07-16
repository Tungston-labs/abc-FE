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

  // Dynamically detect active tab from URL
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

      <SubTitle>Network Information</SubTitle>

      <FormGrid>
        <InputGroup>
          <Label>ONT Number</Label>
          <Input placeholder="Enter ONT Number" />
        </InputGroup>
        <InputGroup>
          <Label>MAC ID</Label>
          <Input placeholder="Enter MAC ID" />
        </InputGroup>
        <InputGroup>
          <Label>OLT</Label>
          <Input placeholder="Enter VLAN ID" />
        </InputGroup>
        <InputGroup>
          <Label>Port</Label>
          <Input placeholder="Enter port" />
        </InputGroup>
        <InputGroup>
          <Label>Signal</Label>
          <Input placeholder="Enter Signal" />
        </InputGroup>
        <InputGroup>
          <Label>Distance</Label>
          <Input placeholder="Enter Distance" />
        </InputGroup>
        <InputGroup>
          <Label>KSEB Post</Label>
          <Input placeholder="Enter KSEB Post" />
        </InputGroup>
      </FormGrid>
    </Container>
  );
};

export default CustomerInfo;
