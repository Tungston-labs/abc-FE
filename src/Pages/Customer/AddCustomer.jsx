// 

import React from 'react';
import {
    Container,
    TopBar,
    BackButton,
    AddButton,
    Content,
    ImageSection,
    ImageWrapper,
    ProfileImage,
    CameraIcon,
    UploadButtons,
    UploadBtn,
    DeleteBtn,
    FormGrid,
    Section,
    Field,FieldRow,
    Spacer
  } from './AddCustomer.Styles';
  import { FiArrowLeft, FiCamera } from 'react-icons/fi';

const AddCustomer = () => {
  return (
    <Container>
      <TopBar>
        <BackButton><FiArrowLeft /> Back</BackButton>
        <AddButton>➕ Add New Customer</AddButton>
      </TopBar>

      <Content>
        <h2>Add new Customer</h2>
        <p>Basic customer details</p>

        <ImageSection>
          <ImageWrapper>
            <ProfileImage src="https://i.pravatar.cc/150?img=3" alt="profile" />
            <CameraIcon><FiCamera /></CameraIcon>
          </ImageWrapper>
          <UploadButtons>
            <UploadBtn>Upload image</UploadBtn>
            <DeleteBtn>Delete</DeleteBtn>
          </UploadButtons>
        </ImageSection>

        <FormGrid>
        <Section>
  <h3>General information</h3>
  <FieldRow>
    <Field>
      <label>Full Name</label>
      <input placeholder="Enter full name" />
    </Field>
    <Field>
      <label>Phone number</label>
      <input placeholder="Enter Ph Number" />
    </Field>
  </FieldRow>

  <FieldRow>
    <Field>
      <label>Address</label>
      <input placeholder="Enter address" />
    </Field>
    <Field>
      <label>LCO</label>
      <input placeholder="Enter City" />
    </Field>
  </FieldRow>

  <FieldRow>
    <Field>
      <label>E-mail ID</label>
      <input placeholder="Enter email" />
    </Field>
    <Field>
      <label>LCO Ref</label>
      <input placeholder="Enter Note" />
    </Field>
  </FieldRow>

  <FieldRow>
    <Field>
      <label>Last Updated</label>
      <input defaultValue="12-12-2025" readOnly />
    </Field>
    <Field>
      {/* <label>ISP</label>
      <input placeholder="Enter ISP" /> */}
    </Field>
  </FieldRow>

  {/* <FieldRow>
    <Field>
      <label>MAC ID</label>
      <input placeholder="Enter Mac ID" />
    </Field>
    <Field>
      <label>Plan</label>
      <input placeholder="Enter Plan" />
    </Field>
  </FieldRow>

  <FieldRow>
    <Field>
      <label>EXP Date</label>
      <input placeholder="Select EXP Date" />
    </Field>
  </FieldRow> */}
</Section>
<FormGrid>
  <h3>ISP Information</h3>
  <FieldRow>
    <Field>
      <label>MAC ID</label>
      <input placeholder="Enter Mac ID" />
    </Field>
    <Field>
      <label>ISP</label>
      <input placeholder="Enter ISP" />
    </Field>
  </FieldRow>

  <FieldRow>
    <Field>
      <label>Plan</label>
      <input placeholder="Enter plan" />
    </Field>
    <Field>
      <label>EXP date</label>
      <input placeholder="Select EXP Date" />
    </Field>
  </FieldRow>

  <FieldRow>
    <Field>
      <label>V LAN</label>
      <input placeholder="Enter DNS Server" />
    </Field>

    <Field>
      {/* <label>V LAN</label>
      <input placeholder="Enter DNS Server" /> */}
    </Field>
  </FieldRow>

  <h3>Network Information</h3>
  <FieldRow>
    <Field>
      <label>ONT Number</label>
      <input placeholder="Enter ONT Number" />
    </Field>
    <Field>
      <label>MAC ID</label>
      <input placeholder="Enter MAC ID" />
    </Field>
  </FieldRow>

  <FieldRow>
    <Field>
      <label>OLT</label>
      <input placeholder="Enter VLAN ID" />
    </Field>
    <Field>
      <label>Port</label>
      <input placeholder="Enter Port" />
    </Field>
  </FieldRow>

  <FieldRow>
    <Field>
      <label>Signal</label>
      <input placeholder="Enter Signal" />
    </Field>
    <Field>
      <label>Distance</label>
      <input placeholder="Enter Distance" />
    </Field>
  </FieldRow>

  <FieldRow>
    <Field>
      <label>KSEB Post</label>
      <input placeholder="Enter KSEB Post" />
    </Field>
  
    <Field>
      {/* <label>KSEB Post</label>
      <input placeholder="Enter KSEB Post" /> */}
    </Field>
  </FieldRow>

</FormGrid>


          
        </FormGrid>
      </Content>
    </Container>
  );
};

export default AddCustomer;
