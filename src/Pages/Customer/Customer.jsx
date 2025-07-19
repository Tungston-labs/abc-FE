import React, { useEffect, useState } from 'react';
import {
  PageContainer, Header, AddButton, AddButtons, TableContainer,
  StyledTable, TableRow, TableCell, ActionIcon, PaginationContainer,
  PaginationButton, ActivePage, ModalOverlay, ModalContainer, SearchBar
} from './Customer.Styles';

import { FaCirclePlus } from "react-icons/fa6";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { CiTrash } from "react-icons/ci";
import { IoMdEye } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import BulkUploadModal from '../../Component/BulkModal';
import DeleteBox from '../../Component/DeleteBox';
import { getAllCustomers, deleteCustomer } from '../../services/customerServices';

const Customer = () => {
  const [showModal, setShowModal] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  const fetchCustomers = async () => {
    try {
      const data = await getAllCustomers(searchTerm, page);
      setCustomers(data.results || []);
      setTotalPages(Math.ceil(data.count / 10));
    } catch (err) {
      console.error('Error fetching customers:', err);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, [searchTerm, page]);

  const handleDelete = async () => {
    try {
      await deleteCustomer(deleteId);
      fetchCustomers();
      setDeleteId(null);
    } catch (err) {
      console.error('Error deleting customer:', err);
    }
  };

  return (
    <PageContainer>
      {/* Header */}
      <Header>
        <AddButtons onClick={() => setShowModal(true)}>Bulk upload</AddButtons>
        <AddButton onClick={() => navigate('/app/add-customer')}>
          <FaCirclePlus /> Add New Customer
        </AddButton>
      </Header>

      {/* Title and Search */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '20px' }}>
        <h2 style={{ marginBottom: '8px' }}>Customer</h2>
        <SearchBar
          type="text"
          placeholder="Search by name, phone, or email"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setPage(1); // reset to first page on search
          }}
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
              <th></th><th></th><th></th>
            </tr>
          </thead>
          <tbody>
            {customers.map((item, index) => (
              <TableRow key={item.id} $isEven={index % 2 === 0}>
                <TableCell>{String((page - 1) * 10 + index + 1).padStart(3, '0')}</TableCell>
                <TableCell>{item.full_name}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.lco_ref}</TableCell>
                <TableCell>{item.expiry_date}</TableCell>
                <TableCell>
                  <IoMdEye style={{ color: "black", fontSize: "15px", cursor: "pointer" }}
                    onClick={() => navigate(`/basic-customer/${item.id}`)} />
                </TableCell>
                <TableCell>
                  <ActionIcon onClick={() => navigate(`/edit-customer/${item.id}`)}>
                    <HiOutlinePencilSquare />
                  </ActionIcon>
                </TableCell>
                <TableCell>
                  <ActionIcon onClick={() => setDeleteId(item.id)}>
                    <CiTrash style={{ color: 'red', fontSize: "15px" }} />
                  </ActionIcon>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>

      {/* Pagination */}
      {totalPages > 1 && (
        <PaginationContainer>
          <PaginationButton disabled={page === 1} onClick={() => setPage(page - 1)}>←</PaginationButton>
          {[...Array(totalPages)].map((_, i) => (
            i + 1 === page ? (
              <ActivePage key={i}>{i + 1}</ActivePage>
            ) : (
              <PaginationButton key={i} onClick={() => setPage(i + 1)}>{i + 1}</PaginationButton>
            )
          ))}
          <PaginationButton disabled={page === totalPages} onClick={() => setPage(page + 1)}>→</PaginationButton>
        </PaginationContainer>
      )}

      {/* Delete Modal */}
      {deleteId !== null && (
        <ModalOverlay>
          <ModalContainer>
            <DeleteBox
              onCancel={() => setDeleteId(null)}
              onDelete={handleDelete}
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
