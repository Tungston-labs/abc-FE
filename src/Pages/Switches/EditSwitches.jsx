import React, { useState, useEffect } from 'react';
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  FormGrid,
  Input,
  Label,
  ButtonRow,
  CancelButton,
  SaveButton
} from './Add.Styles';

const SwitchModal = ({ onClose, onSave, switchData = null }) => {
  const isEdit = !!switchData;

  const [formData, setFormData] = useState({
    name: '',
    uid: '',
    make: '',
    model_number: '',
    serial_number: '',
    package_date: ''
  });

  useEffect(() => {
    if (isEdit) {
      setFormData({
        name: switchData.name || '',
        uid: switchData.uid || '',
        make: switchData.make || '',
        model_number: switchData.model_number || '',
        serial_number: switchData.serial_number || '',
        package_date: switchData.package_date || ''
      });
    }
  }, [switchData, isEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose(); // Optional: close after save
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>{isEdit ? 'Edit Switch' : 'Add New Switch'}</ModalHeader>
        <FormGrid>
          <div>
            <Label>Name</Label>
            <Input name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <Label>UID</Label>
            <Input name="uid" value={formData.uid} onChange={handleChange} />
          </div>
          <div>
            <Label>Make</Label>
            <Input name="make" value={formData.make} onChange={handleChange} />
          </div>
          <div>
            <Label>Model Number</Label>
            <Input name="model_number" value={formData.model_number} onChange={handleChange} />
          </div>
          <div>
            <Label>Serial Number</Label>
            <Input name="serial_number" value={formData.serial_number} onChange={handleChange} />
          </div>
          <div>
            <Label>Package Date</Label>
            <Input
              type="date"
              name="package_date"
              value={formData.package_date}
              onChange={handleChange}
            />
          </div>
        </FormGrid>
        <ButtonRow>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <SaveButton onClick={handleSubmit}>{isEdit ? 'Update' : 'Save'}</SaveButton>
        </ButtonRow>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default SwitchModal;
