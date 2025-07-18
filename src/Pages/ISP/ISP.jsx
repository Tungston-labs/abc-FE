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
} from "./ISP.Styles";
import {
  ModalOverlay,
  ModalContainer,
} from "../../Component/Isp/IspPopUpModal.Styles";
// import DeleteBox from '../../Component/DeleteBox';
import { FaCirclePlus } from "react-icons/fa6";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { CiTrash } from "react-icons/ci";
import DeleteBox from "../../Component/DeleteBox";
import IspPopUpModal from "../../Component/Isp/IspPopUpModal";
import { getAllIsp } from "../../services/ispServices";
import TableLoader from "../../Component/Spinners/TableLoader";

const Isp = () => {
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [isps, setIsps] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIsp, setSelectedIsp] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await getAllIsp();
      console.log(data);
      setIsps(data?.results);
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
    setSelectedIsp(null);
    setShowModal(true);
  };

  const handleEditClick = (data) => {
    setIsEdit(true);
    setSelectedIsp(data);
    setShowModal(true);
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
            {isLoading ? (
              <tr>
                <td
                  colSpan="7"
                  style={{ textAlign: "center", padding: "1rem" }}
                >
                  <TableLoader />
                </td>
              </tr>
            ) : isps?.length > 0 ? (
              isps?.map((item, index) => (
                <TableRow key={index} isEven={index % 2 === 0}>
                  <TableCell>{String(index + 1).padStart(3, "0")}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.address}</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <ActionIcon onClick={() => setDeleteIndex(index)}>
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
                  colSpan="7"
                  style={{
                    textAlign: "center",
                    padding: "1rem",
                    color: "gray",
                  }}
                >
                  No ISPs found.
                </td>
              </tr>
            )}
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
              onDelete={handleConfirmDelete} // use "onDelete" not "onConfirm"
            />
          </ModalContainer>
        </ModalOverlay>
      )}

      {showModal && (
        <IspPopUpModal
          setShowModal={setShowModal}
          isEdit={isEdit}
          fetchData={fetchData}
          selectedIsp={selectedIsp}
        />
      )}
    </PageContainer>
  );
};

export default Isp;
