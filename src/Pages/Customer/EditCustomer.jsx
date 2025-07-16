import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
  Field,
  FieldRow,
  Spacer
} from './AddCustomer.Styles';
import { FiArrowLeft, FiCamera } from 'react-icons/fi';

const EditCustomer = () => {
  const { id } = useParams();
  const [customerData, setCustomerData] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    email: '',
    note: '',
    lastUpdated: '',
    macId: '',
    isp: '',
    plan: '',
    expDate: '',
    dnsServer: '',
    ontNumber: '',
    macId2: '',
    vlanId: '',
    port: '',
    signal: '',
    distance: '',
    ksebPost: '',
  });

  useEffect(() => {
    // Simulate API call
    const fetchCustomer = async () => {
      const mockData = {
        fullName: 'John Doe',
        phone: '9876543210',
        address: '123 Street',
        city: 'Kochi',
        email: 'john@example.com',
        note: 'Reference',
        lastUpdated: '2025-12-12',
        macId: 'MAC123',
        isp: 'ABC ISP',
        plan: '100Mbps',
        expDate: '2026-01-01',
        dnsServer: '8.8.8.8',
        ontNumber: 'ONT789',
        macId2: 'MAC456',
        vlanId: 'VLAN10',
        port: 'Port1',
        signal: '-15db',
        distance: '120m',
        ksebPost: 'Pole 45'
      };
      setCustomerData(mockData);
    };

    fetchCustomer();
  }, [id]);

  const handleChange = (field, value) => {
    setCustomerData({ ...customerData, [field]: value });
  };

  return (
    <Container>
      <TopBar>
        <BackButton><FiArrowLeft /> Back</BackButton>
        <AddButton>💾 Save Changes</AddButton>
      </TopBar>

      <Content>
        <h2>Edit Customer</h2>
        <p>Update existing customer details</p>

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
                <input
                  value={customerData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                />
              </Field>
              <Field>
                <label>Phone number</label>
                <input
                  value={customerData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                />
              </Field>
            </FieldRow>

            <FieldRow>
              <Field>
                <label>Address</label>
                <input
                  value={customerData.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                />
              </Field>
              <Field>
                <label>LCO</label>
                <input
                  value={customerData.city}
                  onChange={(e) => handleChange('city', e.target.value)}
                />
              </Field>
            </FieldRow>

            <FieldRow>
              <Field>
                <label>E-mail ID</label>
                <input
                  value={customerData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                />
              </Field>
              <Field>
                <label>LCO Ref</label>
                <input
                  value={customerData.note}
                  onChange={(e) => handleChange('note', e.target.value)}
                />
              </Field>
            </FieldRow>

            <FieldRow>
              <Field>
                <label>Last Updated</label>
                <input value={customerData.lastUpdated} readOnly />
              </Field>
              <Field />
            </FieldRow>
          </Section>

          <FormGrid>
            <h3>ISP Information</h3>
            <FieldRow>
              <Field>
                <label>MAC ID</label>
                <input
                  value={customerData.macId}
                  onChange={(e) => handleChange('macId', e.target.value)}
                />
              </Field>
              <Field>
                <label>ISP</label>
                <input
                  value={customerData.isp}
                  onChange={(e) => handleChange('isp', e.target.value)}
                />
              </Field>
            </FieldRow>

            <FieldRow>
              <Field>
                <label>Plan</label>
                <input
                  value={customerData.plan}
                  onChange={(e) => handleChange('plan', e.target.value)}
                />
              </Field>
              <Field>
                <label>EXP date</label>
                <input
                  value={customerData.expDate}
                  onChange={(e) => handleChange('expDate', e.target.value)}
                />
              </Field>
            </FieldRow>

            <FieldRow>
              <Field>
                <label>V LAN</label>
                <input
                  value={customerData.dnsServer}
                  onChange={(e) => handleChange('dnsServer', e.target.value)}
                />
              </Field>
              <Field />
            </FieldRow>

            <h3>Network Information</h3>
            <FieldRow>
              <Field>
                <label>ONT Number</label>
                <input
                  value={customerData.ontNumber}
                  onChange={(e) => handleChange('ontNumber', e.target.value)}
                />
              </Field>
              <Field>
                <label>MAC ID</label>
                <input
                  value={customerData.macId2}
                  onChange={(e) => handleChange('macId2', e.target.value)}
                />
              </Field>
            </FieldRow>

            <FieldRow>
              <Field>
                <label>OLT</label>
                <input
                  value={customerData.vlanId}
                  onChange={(e) => handleChange('vlanId', e.target.value)}
                />
              </Field>
              <Field>
                <label>Port</label>
                <input
                  value={customerData.port}
                  onChange={(e) => handleChange('port', e.target.value)}
                />
              </Field>
            </FieldRow>

            <FieldRow>
              <Field>
                <label>Signal</label>
                <input
                  value={customerData.signal}
                  onChange={(e) => handleChange('signal', e.target.value)}
                />
              </Field>
              <Field>
                <label>Distance</label>
                <input
                  value={customerData.distance}
                  onChange={(e) => handleChange('distance', e.target.value)}
                />
              </Field>
            </FieldRow>

            <FieldRow>
              <Field>
                <label>KSEB Post</label>
                <input
                  value={customerData.ksebPost}
                  onChange={(e) => handleChange('ksebPost', e.target.value)}
                />
              </Field>
              <Field />
            </FieldRow>
          </FormGrid>
        </FormGrid>
      </Content>
    </Container>
  );
};

export default EditCustomer;
