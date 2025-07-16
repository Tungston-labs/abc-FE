import React, { useState, useEffect } from 'react';
import {
  PageContainer,
  Header,
  AddButton,
  TableContainer,
  StyledTable,
  TableRow,
  TableCell,
  ActionIcon,
  PaginationContainer,
  PaginationButton,
  ActivePage,
} from './Switches.Styles';
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  FormGrid,
  Input,
  Label,
  ButtonRow,
  CancelButton,
  SaveButton,
} from './Add.Styles';
import { FaCirclePlus } from "react-icons/fa6";
import { HiOutlinePencilSquare } from "react-icons/hi2";

const dummyData = Array.from({ length: 11 }, (_, i) => ({
  id: i + 1,
  name: 'Name',
  uid: '54213645',
  make: 'Cisco',
  model_number: '1254112VFD',
  serial_number: 'ASHGF1254',
  package_date: '2025-12-12',
}));

const Switches = () => {
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedSwitch, setSelectedSwitch] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    uid: '',
    make: '',
    model_number: '',
    serial_number: '',
    package_date: ''
  });

  // Fill form when editing
  useEffect(() => {
    if (isEdit && selectedSwitch) {
      setFormData({ ...selectedSwitch });
    } else {
      setFormData({
        name: '',
        uid: '',
        make: '',
        model_number: '',
        serial_number: '',
        package_date: ''
      });
    }
  }, [isEdit, selectedSwitch]);

  const handleOpenAddModal = () => {
    setIsEdit(false);
    setSelectedSwitch(null);
    setShowModal(true);
  };

  const handleOpenEditModal = (item) => {
    setIsEdit(true);
    setSelectedSwitch(item);
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (isEdit) {
      console.log('Updating switch:', formData);
      // TODO: call update API
    } else {
      console.log('Creating new switch:', formData);
      // TODO: call create API
    }
    setShowModal(false);
  };

  return (
    <PageContainer>
      <Header>
        <h2></h2>
        <AddButton onClick={handleOpenAddModal}>
          <FaCirclePlus /> Add New switch
        </AddButton>
      </Header>

      <h2>Switches</h2>

      <TableContainer>
        <StyledTable>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Name</th>
              <th>UID</th>
              <th>Make</th>
              <th>Model Number</th>
              <th>Serial number</th>
              <th>Package Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((item, index) => (
              <TableRow key={index} isEven={index % 2 === 0}>
                <TableCell>{String(item.id).padStart(3, '0')}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.uid}</TableCell>
                <TableCell>{item.make}</TableCell>
                <TableCell>{item.model_number}</TableCell>
                <TableCell>{item.serial_number}</TableCell>
                <TableCell>{item.package_date}</TableCell>
                <TableCell>
                  <ActionIcon onClick={() => handleOpenEditModal(item)}>
                    <HiOutlinePencilSquare />
                  </ActionIcon>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>

      <PaginationContainer>
        <PaginationButton>←</PaginationButton>
        <PaginationButton>1</PaginationButton>
        <ActivePage>2</ActivePage>
        <PaginationButton>3</PaginationButton>
        <PaginationButton>4</PaginationButton>
        <PaginationButton>5</PaginationButton>
        <PaginationButton>→</PaginationButton>
      </PaginationContainer>

      {showModal && (
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
                <Label>Model number</Label>
                <Input name="model_number" value={formData.model_number} onChange={handleChange} />
              </div>
              <div>
                <Label>Serial number</Label>
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
              <CancelButton onClick={() => setShowModal(false)}>Cancel</CancelButton>
              <SaveButton onClick={handleSubmit}>{isEdit ? 'Save' : 'Save'}</SaveButton>
            </ButtonRow>
          </ModalContainer>
        </ModalOverlay>
      )}
    </PageContainer>
  );
};

export default Switches;
