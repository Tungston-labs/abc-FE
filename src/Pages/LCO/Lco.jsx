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
} from './Lco.Styles';
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
import { CiTrash } from "react-icons/ci";
import DeleteBox from '../../Component/DeleteBox';
const initialData = Array.from({ length: 11 }, (_, i) => ({
  id: i + 1,
  name: 'Name',
  address: 'dummy address',
  adharnumber: '4678765',
  phnumber: '9999999999',
  email: 'dummy@gmail.com',
  olt: 'olt1',
}));

const Lco = () => {
  const [data, setData] = useState(initialData);
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const [formValues, setFormValues] = useState({
    name: '',
    address: '',
    adharnumber: '',
    phnumber: '',
    email: '',
    olt: '',
  });

  const handleOpenAddModal = () => {
    setEditIndex(null);
    setFormValues({
      name: '',
      address: '',
      adharnumber: '',
      phnumber: '',
      email: '',
      olt: '',
    });
    setShowModal(true);
  };

  const handleEditClick = (index) => {
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
  const handleConfirmDelete = () => {
    const updated = [...data];
    updated.splice(deleteIndex, 1);
    setData(updated);
    setDeleteIndex(null);
  };
  
  return (
    <PageContainer>
      <Header>
        <h2></h2>
        <AddButton onClick={handleOpenAddModal}>
          <FaCirclePlus /> Add New LCO
        </AddButton>
      </Header>

      <h2>LCO</h2>

      <TableContainer>
        <StyledTable>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Name</th>
              <th>Address</th>
              <th>Adhar number</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>OLT</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <TableRow key={index} isEven={index % 2 === 0}>
                <TableCell>{String(item.id).padStart(3, '0')}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.address}</TableCell>
                <TableCell>{item.adharnumber}</TableCell>
                <TableCell>{item.phnumber}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.olt}</TableCell>
                <TableCell>
                <ActionIcon onClick={() => setDeleteIndex(index)}>
  <CiTrash style={{ color: 'red' }} />
</ActionIcon>

                </TableCell>
                <TableCell>
                  <ActionIcon onClick={() => handleEditClick(index)}>
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
      {deleteIndex !== null && (
  <ModalOverlay>
    <ModalContainer>
      <DeleteBox
        onCancel={() => setDeleteIndex(null)}
        onDelete={handleConfirmDelete}
      />
    </ModalContainer>
  </ModalOverlay>
)}

      {showModal && (
        <ModalOverlay>
          <ModalContainer>
            <ModalHeader>{editIndex !== null ? 'Edit LCO' : 'Add new LCO'}</ModalHeader>
            <FormGrid>
              <div>
                <Label>Name</Label>
                <Input name="name" value={formValues.name} onChange={handleChange} />
              </div>
              <div>
                <Label>Address</Label>
                <Input name="address" value={formValues.address} onChange={handleChange} />
              </div>
              <div>
                <Label>Adhar Number</Label>
                <Input name="adharnumber" value={formValues.adharnumber} onChange={handleChange} />
              </div>
              <div>
                <Label>Phone Number</Label>
                <Input name="phnumber" value={formValues.phnumber} onChange={handleChange} />
              </div>
              <div>
                <Label>Email</Label>
                <Input name="email" value={formValues.email} onChange={handleChange} />
              </div>
              <div>
                <Label>OLT</Label>
                <select
                  name="olt"
                  value={formValues.olt}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    backgroundColor: '#f9f9f9',
                  }}
                >
                  <option value="">Select OLT</option>
                  <option value="olt1">OLT 1</option>
                  <option value="olt2">OLT 2</option>
                  <option value="olt3">OLT 3</option>
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

export default Lco;
