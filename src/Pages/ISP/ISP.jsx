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
} from './ISP.Styles';
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
// import DeleteBox from '../../Component/DeleteBox';
import { FaCirclePlus } from "react-icons/fa6";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { CiTrash } from "react-icons/ci";
import DeleteBox from '../../Component/DeleteBox';

// Dummy initial data
const initialData = Array.from({ length: 11 }, (_, i) => ({
  id: i + 1,
  name: 'ISP Name',
  address: 'Dummy Address',
}));

const Isp = () => {
  const [data, setData] = useState(initialData);
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [formValues, setFormValues] = useState({
    name: '',
    address: '',
  });

  const handleOpenAddModal = () => {
    setEditIndex(null);
    setFormValues({ name: '', address: '' });
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
          <FaCirclePlus /> Add New ISP
        </AddButton>
      </Header>

      <h2>ISP</h2>

      <TableContainer>
        <StyledTable>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>ISP Name</th>
              <th>ISP Address</th>
              <th></th>
              <th></th>
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
                <TableCell></TableCell>
                <TableCell></TableCell>
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
        onDelete={handleConfirmDelete}  // use "onDelete" not "onConfirm"
      />
    </ModalContainer>
  </ModalOverlay>
)}



      {showModal && (
        <ModalOverlay>
          <ModalContainer>
            <ModalHeader>{editIndex !== null ? 'Edit ISP' : 'Add new ISP'}</ModalHeader>
            <FormGrid>
              <div>
                <Label>ISP Name</Label>
                <Input
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label>ISP Address</Label>
                <Input
                  name="address"
                  value={formValues.address}
                  onChange={handleChange}
                />
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

export default Isp;
