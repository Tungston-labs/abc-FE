import { useEffect, useState } from "react";
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
} from "./IspPopUpModal.Styles";
import { ErrorText } from "../Switches/SwitchPopUpModal.Styles";
import { addNewIsp, EditIsp } from "../../services/ispServices";
import Swal from "sweetalert2";

const IspPopUpModal = ({ setShowModal, isEdit, fetchData, selectedIsp }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isEdit && selectedIsp) {
      setFormValues({
        name: selectedIsp.name || "",
        address: selectedIsp.address || "",
      });
    } else {
      setFormValues({
        name: "",
        address: "",
      });
    }
  }, [isEdit, selectedIsp]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));

    if (value.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formValues.name.trim()) newErrors.name = "ISP Name is required.";
    if (!formValues.address.trim()) newErrors.address = "Address is required.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsLoading(true);

    try {
      if (isEdit) {
        await EditIsp(formValues, selectedIsp?.id);
      } else {
        await addNewIsp(formValues);
      }

      Swal.fire({
        title: `ISP ${isEdit ? "Updated" : "Added"} Successfully`,
        icon: "success",
        draggable: true,
      });

      setShowModal(false);
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    } finally {
      setIsLoading(false);
      fetchData();
    }
  };
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>{isEdit ? "Edit ISP" : "Add new ISP"}</ModalHeader>
        <FormGrid>
          <div>
            <Label>ISP Name</Label>
            <Input
              name="name"
              value={formValues.name}
              onChange={handleChange}
            />
            {errors.name && <ErrorText>{errors.name}</ErrorText>}
          </div>
          <div>
            <Label>ISP Address</Label>
            <Input
              name="address"
              value={formValues.address}
              onChange={handleChange}
            />
            {errors.address && <ErrorText>{errors.address}</ErrorText>}
          </div>
        </FormGrid>

        <ButtonRow>
          <CancelButton onClick={() => setShowModal(false)}>
            Cancel
          </CancelButton>
          <SaveButton onClick={handleSave} disabled={isLoading}>
            {isLoading ? "Saving..." : "Save"}
          </SaveButton>
        </ButtonRow>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default IspPopUpModal;
