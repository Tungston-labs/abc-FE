// src/components/InformationForm.jsx
import React, { useState } from 'react';
import {
  Container,
  SectionTitle,
  FormRow,
  FormGroup,
  Label,
  Checkbox,
  LockIcon,
  SubmitButton,Button,
} from './Information.Styles';
import { CiLock } from 'react-icons/ci';

// Optional basic styling inside this file for overlay
const overlayStyle = {
  position: 'fixed',
  top: 0, left: 0,
  width: '100vw', height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999,
};

export default function InformationForm({ isOpen = true, onClose = () => {} }) {
  const [formFields, setFormFields] = useState({
    fullName: false,
    phoneNumber: false,
    address: false,
    lco: false,
    emailId: false,
    lcoRef: false,
    lastUpdate: false,
    ontNumber: false,
    macIdNetwork: false,
    olt: false,
    port: false,
    signal: false,
    distance: false,
    ksebPost: false,
    macIdIsp: false,
    isp: false,
    plan: false,
    expDate: false,
    emailIdIsp: false,
    vlan: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormFields((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Fields:', formFields);
    alert('Information Form Submitted!');
    onClose();
  };

  if (!isOpen) return null;

  const renderCheckboxItem = (label, name) => (
    <FormGroup key={name}>
      <Checkbox
        type="checkbox"
        id={name}
        name={name}
        checked={formFields[name]}
        onChange={handleCheckboxChange}
      />
      <Label htmlFor={name}>{label}</Label>
      {formFields[name] && (
        <LockIcon>
          <CiLock />
        </LockIcon>
      )}
    </FormGroup>
  );

  return (
    <div style={overlayStyle}>
      <Container>
        <h2>Information Details</h2>

        <form onSubmit={handleSubmit}>
          <SectionTitle>Basic Details</SectionTitle>
          <FormRow>
            {renderCheckboxItem('Full Name', 'fullName')}
            {renderCheckboxItem('Phone number', 'phoneNumber')}
            {renderCheckboxItem('Address', 'address')}
            {renderCheckboxItem('LCO', 'lco')}
            {renderCheckboxItem('E-mail ID', 'emailId')}
            {renderCheckboxItem('LCO Ref', 'lcoRef')}
            {renderCheckboxItem('Last update', 'lastUpdate')}
          </FormRow>

          <SectionTitle>Network Information</SectionTitle>
          <FormRow>
            {renderCheckboxItem('ONT Number', 'ontNumber')}
            {renderCheckboxItem('MAC ID', 'macIdNetwork')}
            {renderCheckboxItem('OLT', 'olt')}
            {renderCheckboxItem('Port', 'port')}
            {renderCheckboxItem('Signal', 'signal')}
            {renderCheckboxItem('Distance', 'distance')}
            {renderCheckboxItem('KSEB Post', 'ksebPost')}
          </FormRow>

          <SectionTitle>ISP Information</SectionTitle>
          <FormRow>
            {renderCheckboxItem('MAC ID', 'macIdIsp')}
            {renderCheckboxItem('ISP', 'isp')}
            {renderCheckboxItem('Plan', 'plan')}
            {renderCheckboxItem('EXP date', 'expDate')}
            {renderCheckboxItem('E-mail ID', 'emailIdIsp')}
            {renderCheckboxItem('V LAN', 'vlan')}
          </FormRow>

          <div style={{ textAlign: 'right', marginTop: '2rem' }}>
            <SubmitButton type="submit">Apply</SubmitButton>
            <Button onClick={onClose} style={{ marginLeft: "10px" }}>
              Close
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
}
