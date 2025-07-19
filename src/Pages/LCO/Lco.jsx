import React, { useEffect, useState } from "react";
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
} from "./Lco.Styles";
import {
  ModalOverlay,
  ModalContainer,
} from "../../Component/Lco/LcoPopUpModal.Styles";
import { FaCirclePlus } from "react-icons/fa6";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { CiTrash } from "react-icons/ci";
import DeleteBox from "../../Component/DeleteBox";
import LcoPopUpModal from "../../Component/Lco/LcoPopUpModal";
import { deleteLcoById, getAllLcos } from "../../services/lcoServices";
import TableLoader from "../../Component/Spinners/TableLoader";
import Swal from "sweetalert2";

const Lco = () => {
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [lcos, setLcos] = useState([]);
  const [selectedLco, setSelectedLco] = useState(null);

  const [deleteIndex, setDeleteIndex] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await getAllLcos();
      console.log(data);
      setLcos(data?.results);
    } catch (error) {
      console.error("Failed to fetch switches", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenAddModal = () => {
    setIsEdit(false);
    setSelectedLco(null);
    setShowModal(true);
  };

  const handleEditClick = (data) => {
    setIsEdit(true);
    setSelectedLco(data);
    setShowModal(true);
  };

  const handleDeleteClick = async (id) => {
    try {
      const data = await deleteLcoById(id);
      console.log(data);
      Swal.fire({
        title: "Lco deleted successfully",
        icon: "success",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    } finally {
      fetchData();
      setDeleteIndex(null);
    }
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
            {isLoading ? (
              <tr>
                <td
                  colSpan="9"
                  style={{ textAlign: "center", padding: "1rem" }}
                >
                  <TableLoader />
                </td>
              </tr>
            ) : lcos?.length > 0 ? (
              lcos?.map((item, index) => (
                <TableRow key={item?.id} isEven={index % 2 === 0}>
                  <TableCell>{String(index + 1).padStart(3, "0")}</TableCell>
                  <TableCell>{item?.name}</TableCell>
                  <TableCell>{item?.address}</TableCell>
                  <TableCell>{item?.aadhaar_number}</TableCell>
                  <TableCell>{item?.phone}</TableCell>
                  <TableCell>{item?.user_email}</TableCell>
                  <TableCell>
                    {item?.olt_details?.length
                      ? item.olt_details.map((i) => i.switch_name).join(", ")
                      : "—"}
                  </TableCell>
                  <TableCell>
                    <ActionIcon onClick={() => setDeleteIndex(item?.id)}>
                      <CiTrash style={{ color: "red" }} />
                    </ActionIcon>
                  </TableCell>
                  <TableCell>
                    <ActionIcon onClick={() => handleEditClick(item)}>
                      <HiOutlinePencilSquare />
                    </ActionIcon>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <tr>
                <td
                  colSpan="9"
                  style={{
                    textAlign: "center",
                    padding: "1rem",
                    color: "gray",
                  }}
                >
                  No LCOs found.
                </td>
              </tr>
            )}
          </tbody>
        </StyledTable>
      </TableContainer>

      {lcos?.length > 0 && (
  <PaginationContainer>
    <PaginationButton>←</PaginationButton>
    <PaginationButton>1</PaginationButton>
    <ActivePage>2</ActivePage>
    <PaginationButton>3</PaginationButton>
    <PaginationButton>4</PaginationButton>
    <PaginationButton>5</PaginationButton>
    <PaginationButton>→</PaginationButton>
  </PaginationContainer>
)}

      {deleteIndex !== null && (
        <ModalOverlay>
          <ModalContainer>
            <DeleteBox
              onCancel={() => setDeleteIndex(null)}
              onDelete={() => handleDeleteClick(deleteIndex)}
            />
          </ModalContainer>
        </ModalOverlay>
      )}

      {showModal && (
        <LcoPopUpModal
          setShowModal={setShowModal}
          isEdit={isEdit}
          selectedLco={selectedLco}
          fetchData={fetchData}
        />
      )}
    </PageContainer>
  );
};

export default Lco;
