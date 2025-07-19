import React, { useState } from 'react';
import {
  Container, TopBar, BackButton, AddButton, Content,
  ImageSection, ImageWrapper, ProfileImage, CameraIcon,
  UploadButtons, UploadBtn, DeleteBtn, FormGrid,
  Section, Field, FieldRow
} from './AddCustomer.Styles';
import { FiArrowLeft, FiCamera } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { addNewCustomer } from '../../services/customerServices';

const AddCustomer = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    address: '',
    email: '',
    mac_id: '',
    plan: '',
    v_lan: '',
    lco: '',
    lco_ref: '',
    isp: '',
    expiry_date: '',
    ont_number: '',
    olt: '',
    signal: '',
    kseb_post: '',
    port: '',
    distance: '',
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    try {
      const payload = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'lco' || key === 'isp' || key === 'olt') {
          payload.append(key, parseInt(value));
        } else if (key === 'distance') {
          payload.append(key, parseFloat(value));
        } else {
          payload.append(key, value);
        }
      });

      if (selectedImage) {
        payload.append('profile_pic', selectedImage);
      }

      await addNewCustomer(payload);
      alert("Customer added successfully");
      navigate('/app/customer');
    } catch (err) {
      console.error("Add customer error:", err);
      alert("Failed to add customer");
    }
  };

  return (
    <Container>
      <TopBar>
        <BackButton onClick={() => navigate(-1)}><FiArrowLeft /> Back</BackButton>
        <AddButton onClick={handleSubmit}>➕ Add New Customer</AddButton>
      </TopBar>

      <Content>
        <h2>Add new Customer</h2>
        <p>Basic customer details</p>

        <ImageSection>
          <ImageWrapper>
            <ProfileImage
              src={previewUrl || "https://i.pravatar.cc/150?img=3"}
              alt="profile"
            />
            <label style={{ position: 'absolute', bottom: '10px', right: '10px', cursor: 'pointer' }}>
              <CameraIcon><FiCamera /></CameraIcon>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
            </label>
          </ImageWrapper>


          <UploadButtons>
            <UploadBtn as="label">
              Upload image
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
            </UploadBtn>

            <DeleteBtn
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setSelectedImage(null);
                setPreviewUrl(null);
              }}
            >
              Delete
            </DeleteBtn>
          </UploadButtons>
        </ImageSection>


        <FormGrid>
          <Section>
            <h3>General information</h3>
            <FieldRow>
              <Field>
                <label>Full Name</label>
                <input name="full_name" value={formData.full_name} onChange={handleChange} placeholder="Enter full name" />
              </Field>
              <Field>
                <label>Phone number</label>
                <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone number" />
              </Field>
            </FieldRow>

            <FieldRow>
              <Field>
                <label>Address</label>
                <input name="address" value={formData.address} onChange={handleChange} placeholder="Enter address" />
              </Field>
              <Field>
                <label>LCO (ID)</label>
                <input name="lco" value={formData.lco} onChange={handleChange} placeholder="Enter LCO ID" />
              </Field>
            </FieldRow>

            <FieldRow>
              <Field>
                <label>Email</label>
                <input name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />
              </Field>
              <Field>
                <label>LCO Ref</label>
                <input name="lco_ref" value={formData.lco_ref} onChange={handleChange} placeholder="Enter LCO Ref" />
              </Field>
            </FieldRow>

            <FieldRow>
              <Field>
                <label>Expiry Date</label>
                <input type="date" name="expiry_date" value={formData.expiry_date} onChange={handleChange} />
              </Field>
              <Field />
            </FieldRow>
          </Section>

          <FormGrid>
            <h3>ISP Information</h3>
            <FieldRow>
              <Field>
                <label>MAC ID</label>
                <input name="mac_id" value={formData.mac_id} onChange={handleChange} placeholder="Enter MAC ID" />
              </Field>
              <Field>
                <label>ISP (ID)</label>
                <input name="isp" value={formData.isp} onChange={handleChange} placeholder="Enter ISP ID" />
              </Field>
            </FieldRow>

            <FieldRow>
              <Field>
                <label>Plan</label>
                <input name="plan" value={formData.plan} onChange={handleChange} placeholder="Enter plan" />
              </Field>
              <Field>
                <label>V LAN</label>
                <input name="v_lan" value={formData.v_lan} onChange={handleChange} placeholder="Enter V LAN" />
              </Field>
            </FieldRow>

            <h3>Network Information</h3>
            <FieldRow>
              <Field>
                <label>ONT Number</label>
                <input name="ont_number" value={formData.ont_number} onChange={handleChange} placeholder="Enter ONT Number" />
              </Field>
              <Field>
                <label>OLT (ID)</label>
                <input name="olt" value={formData.olt} onChange={handleChange} placeholder="Enter OLT ID" />
              </Field>
            </FieldRow>

            <FieldRow>
              <Field>
                <label>Port</label>
                <input name="port" value={formData.port} onChange={handleChange} placeholder="Enter Port" />
              </Field>
              <Field>
                <label>Signal</label>
                <input name="signal" value={formData.signal} onChange={handleChange} placeholder="Enter Signal" />
              </Field>
            </FieldRow>

            <FieldRow>
              <Field>
                <label>Distance</label>
                <input name="distance" value={formData.distance} onChange={handleChange} placeholder="Enter Distance (e.g. 200.5)" />
              </Field>
              <Field>
                <label>KSEB Post</label>
                <input name="kseb_post" value={formData.kseb_post} onChange={handleChange} placeholder="Enter KSEB Post" />
              </Field>
            </FieldRow>
          </FormGrid>
        </FormGrid>
      </Content>
    </Container>
  );
};

export default AddCustomer;
