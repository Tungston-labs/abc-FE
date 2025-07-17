import { useState, useEffect } from "react";
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
} from "./Switches.Styles";

import { FaCirclePlus } from "react-icons/fa6";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { getAllSwitches } from "../../services/switcheService";
import SwitchPopUpModal from "../../Component/Switches/SwitchPopUpModal";
import TableLoader from "../../Component/Spinners/TableLoader";

const Switches = () => {
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedSwitch, setSelectedSwitch] = useState(null);
  const [switches, setSwitches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await getAllSwitches();
      setSwitches(data?.results);
    } catch (error) {
      console.error("Failed to fetch switches", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Fill form when editing

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
            {isLoading ? (
              <tr>
                <td
                  colSpan="8"
                  style={{ textAlign: "center", padding: "1rem" }}
                >
                  <TableLoader/>
                </td>
              </tr>
            ) : switches?.length > 0 ? (
              switches?.map((item, index) => (
                <TableRow key={index} isEven={index % 2 === 0}>
                  <TableCell>{String(index + 1).padStart(3, "0")}</TableCell>
                  <TableCell>{item?.name}</TableCell>
                  <TableCell>{item?.uid}</TableCell>
                  <TableCell>{item?.make}</TableCell>
                  <TableCell>{item?.model_number}</TableCell>
                  <TableCell>{item?.serial_number}</TableCell>
                  <TableCell>{item?.package_date}</TableCell>
                  <TableCell>
                    <ActionIcon onClick={() => handleOpenEditModal(item)}>
                      <HiOutlinePencilSquare />
                    </ActionIcon>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <tr>
                <td
                  colSpan="8"
                  style={{ textAlign: "center", padding: "1rem" }}
                >
                  No switches found.
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

      {showModal && (
        <SwitchPopUpModal
          isEdit={isEdit}
          setShowModal={setShowModal}
          selectedSwitch={selectedSwitch}
          fetchData={fetchData}
        />
      )}
    </PageContainer>
  );
};

export default Switches;
