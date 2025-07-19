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
} from "./Olt.Styles";
import { FaCirclePlus } from "react-icons/fa6";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import OltPopUpModal from "../../Component/Olt/OltPopUpModal";
import { getAllOlts } from "../../services/oltServices";
import TableLoader from "../../Component/Spinners/TableLoader";

const Olt = () => {
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [selectedOlt, setSelectedOlt] = useState(null);
  const [olts, setOlts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await getAllOlts();
      console.log(data);
      setOlts(data?.results);
    } catch (error) {
      console.error("Failed to fetch switches", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openAddModal = () => {
    setIsEdit(false);
    setSelectedOlt(null);
    setShowModal(true);
  };

  const openEditModal = (data) => {
    setIsEdit(true);
    setSelectedOlt(data);
    setShowModal(true);
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
            {isLoading ? (
              <tr>
                <td
                  colSpan="9"
                  style={{ textAlign: "center", padding: "1rem" }}
                >
                  <TableLoader />
                </td>
              </tr>
            ) : olts?.length > 0 ? (
              olts?.map((item, index) => (
                <TableRow key={index} isEven={index % 2 === 0}>
                  <TableCell>{String(index + 1).padStart(3, "0")}</TableCell>
                  <TableCell>{item?.name}</TableCell>
                  <TableCell>{item?.uid}</TableCell>
                  <TableCell>{item?.make}</TableCell>
                  <TableCell>{item?.model_number}</TableCell>
                  <TableCell>{item?.serial_number}</TableCell>
                  <TableCell>{item?.package_date}</TableCell>
                  <TableCell>{item?.switch}</TableCell>
                  <TableCell>
                    <ActionIcon onClick={() => openEditModal(item)}>
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
                  No OLTs found.
                </td>
              </tr>
            )}
          </tbody>
        </StyledTable>
      </TableContainer>

      {olts?.length > 0 && (
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


      {showModal && (
        <OltPopUpModal
          setShowModal={setShowModal}
          isEdit={isEdit}
          selectedOlt={selectedOlt}
          fetchData={fetchData}
        />
      )}
    </PageContainer>
  );
};

export default Olt;
