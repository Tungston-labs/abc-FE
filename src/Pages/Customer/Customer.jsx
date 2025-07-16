import React, { useState } from 'react';
import {
  PageContainer,
  Header,
  AddButton,
  AddButtons,
  TableContainer,
  StyledTable,
  TableRow,
  TableCell,
  ActionIcon,
  PaginationContainer,
  PaginationButton,
  ActivePage,
  ModalOverlay,
  ModalContainer,
  SearchBar,
} from './Customer.Styles';

import { FaCirclePlus } from "react-icons/fa6";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { CiTrash } from "react-icons/ci";
import { IoMdEye } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

import BulkUploadModal from '../../Component/BulkModal';
import DeleteBox from '../../Component/DeleteBox';

const initialData = Array.from({ length: 11 }, (_, i) => ({
  id: i + 1,
  name: 'Name',
  phnumber: '9999999999',
  email: 'dummy@gmail.com',
  lco: '12213332',
  planexp: '11-11-1111',
}));

const Customer = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(initialData);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleConfirmDelete = () => {
    const updated = [...data];
    updated.splice(deleteIndex, 1);
    setData(updated);
    setDeleteIndex(null);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.phnumber.includes(searchTerm)
  );

  return (
    <PageContainer>
      {/* Header */}
      <Header>
        <AddButtons onClick={() => setShowModal(true)}>
          Bulk upload
        </AddButtons>
        <AddButton onClick={() => navigate('/add-customer')}>
          <FaCirclePlus /> Add New Customer
        </AddButton>
      </Header>

      {/* Heading + Search */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '20px' }}>
  <h2 style={{ marginBottom: '8px' }}>Customer</h2>
  <SearchBar
    type="text"
    placeholder="Search by name, phone, or email"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
</div>


      {/* Table */}
      <TableContainer>
        <StyledTable>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Name</th>
              <th>Ph number</th>
              <th>Email ID</th>
              <th>LCO</th>
              <th>Plan Exp</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <TableRow key={item.id} $isEven={index % 2 === 0}>
                <TableCell>{String(item.id).padStart(3, '0')}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.phnumber}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.lco}</TableCell>
                <TableCell>{item.planexp}</TableCell>
                <TableCell>
                  <IoMdEye
                    style={{ color: "#794cfc", fontSize: "15px", cursor: "pointer" }}
                    onClick={() => navigate(`/basic-customer/${item.id}`)}
                  />
                </TableCell>
                <TableCell>
                  <ActionIcon onClick={() => setDeleteIndex(index)}>
                    <CiTrash style={{ color: 'red', fontSize: "15px" }} />
                  </ActionIcon>
                </TableCell>
                <TableCell>
                  <ActionIcon onClick={() => navigate(`/edit-customer/${item.id}`)}>
                    <HiOutlinePencilSquare />
                  </ActionIcon>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>

      {/* Pagination */}
      <PaginationContainer>
        <PaginationButton>←</PaginationButton>
        <PaginationButton>1</PaginationButton>
        <ActivePage>2</ActivePage>
        <PaginationButton>3</PaginationButton>
        <PaginationButton>4</PaginationButton>
        <PaginationButton>5</PaginationButton>
        <PaginationButton>→</PaginationButton>
      </PaginationContainer>

      {/* Delete Modal */}
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

      {/* Bulk Upload Modal */}
      <BulkUploadModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </PageContainer>
  );
};

export default Customer;
