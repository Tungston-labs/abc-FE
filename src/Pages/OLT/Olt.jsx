import React, { useState } from 'react';
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
} from './Olt.Styles';
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

const initialData = Array.from({ length: 11 }, (_, i) => ({
  id: i + 1,
  name: 'Name',
  uid: '54213645',
  make: 'Cisco',
  model: '1254112VFD',
  serial: 'ASHGF1254',
  packageDate: '2025-12-12',
  switch: 'switch1',
}));

const Olt = () => {
  const [data, setData] = useState(initialData);
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formValues, setFormValues] = useState({
    name: '',
    uid: '',
    make: '',
    model: '',
    serial: '',
    packageDate: '',
    switch: '',
  });

  const openAddModal = () => {
    setEditIndex(null);
    setFormValues({
      name: '',
      uid: '',
      make: '',
      model: '',
      serial: '',
      packageDate: '',
      switch: '',
    });
    setShowModal(true);
  };

  const openEditModal = (index) => {
    setEditIndex(index);
    setFormValues(data[index]);
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (editIndex !== null) {
      const updated = [...data];
      updated[editIndex] = formValues;
      setData(updated);
    } else {
      setData([...data, { ...formValues, id: data.length + 1 }]);
    }
    setShowModal(false);
  };

  return (
    <PageContainer>
      <Header>
        <h2></h2>
        <AddButton onClick={openAddModal}>
          <FaCirclePlus /> Add New OLT
        </AddButton>
      </Header>

      <h2>OLT</h2>

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
              <th>Switch</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <TableRow key={index} isEven={index % 2 === 0}>
                <TableCell>{String(item.id).padStart(3, '0')}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.uid}</TableCell>
                <TableCell>{item.make}</TableCell>
                <TableCell>{item.model}</TableCell>
                <TableCell>{item.serial}</TableCell>
                <TableCell>{item.packageDate}</TableCell>
                <TableCell>{item.switch}</TableCell>
                <TableCell>
                  <ActionIcon onClick={() => openEditModal(index)}>
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
            <ModalHeader>{editIndex !== null ? 'Edit OLT' : 'Add New OLT'}</ModalHeader>
            <FormGrid>
              <div>
                <Label>Name</Label>
                <Input name="name" value={formValues.name} onChange={handleChange} />
              </div>
              <div>
                <Label>UID</Label>
                <Input name="uid" value={formValues.uid} onChange={handleChange} />
              </div>
              <div>
                <Label>Make</Label>
                <Input name="make" value={formValues.make} onChange={handleChange} />
              </div>
              <div>
                <Label>Model number</Label>
                <Input name="model" value={formValues.model} onChange={handleChange} />
              </div>
              <div>
                <Label>Serial number</Label>
                <Input name="serial" value={formValues.serial} onChange={handleChange} />
              </div>
              <div>
                <Label>Package Date</Label>
                <Input type="date" name="packageDate" value={formValues.packageDate} onChange={handleChange} />
              </div>
              <div>
                <Label>Switch</Label>
                <select
                  name="switch"
                  value={formValues.switch}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    backgroundColor: '#f9f9f9'
                  }}
                >
                  <option value="">Select Option</option>
                  <option value="switch1">Switch 1</option>
                  <option value="switch2">Switch 2</option>
                  <option value="switch3">Switch 3</option>
                </select>
              </div>
            </FormGrid>
            <ButtonRow>
              <CancelButton onClick={() => setShowModal(false)}>Cancel</CancelButton>
              <SaveButton onClick={handleSave}>Save</SaveButton>
            </ButtonRow>
          </ModalContainer>
        </ModalOverlay>
      )}
    </PageContainer>
  );
};

export default Olt;
