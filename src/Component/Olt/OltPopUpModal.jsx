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
} from "./OltPopUpModal.Styles";
import { addNewOlt, EditOlt } from "../../services/oltServices";
import { ErrorText } from "../Switches/SwitchPopUpModal.Styles";
import Swal from "sweetalert2";

const OltPopUpModal = ({ setShowModal, isEdit, selectedOlt, fetchData }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    uid: "",
    make: "",
    model_number: "",
    serial_number: "",
    package_date: "",
    switch: "",
  });
  console.log(formValues);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isEdit && selectedOlt) {
      setFormValues({ ...selectedOlt });
    } else {
      setFormValues({
        name: "",
        uid: "",
        make: "",
        model_number: "",
        serial_number: "",
        package_date: "",
        switch: "",
      });
    }
  }, [isEdit, selectedOlt]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));

    if (value.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formValues.name.trim()) newErrors.name = "Please enter the OLT name.";
    if (!formValues.uid.trim()) newErrors.uid = "Unique ID is required.";
    if (!formValues.make.trim()) newErrors.make = "Please enter the make.";
    if (!formValues.model_number.trim())
      newErrors.model_number = "Model number is required.";
    if (!formValues.serial_number.trim())
      newErrors.serial_number = "Serial number is required.";
    if (!formValues.package_date.trim())
      newErrors.package_date = "Please select the package date.";
    if (!String(formValues.switch).trim())
      newErrors.switch = "Please select a switch.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setIsLoading(true);

    try {
      if (isEdit) {
        await EditOlt(formValues, selectedOlt?.id);
      } else {
        await addNewOlt(formValues);
      }
      Swal.fire({
        title: `OLT ${isEdit ? "Updated" : "Added"} Successfully`,
        icon: "success",
        draggable: true,
      });
      setFormValues({
        name: "",
        uid: "",
        make: "",
        model_number: "",
        serial_number: "",
        package_date: "",
        switch: "",
      });
      setShowModal(false);
    } catch (error) {
      console.log(error);
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
        <ModalHeader>{isEdit ? "Edit OLT" : "Add New OLT"}</ModalHeader>
        <FormGrid>
          <div>
            <Label>Name</Label>
            <Input
              name="name"
              value={formValues.name}
              onChange={handleChange}
            />
            {errors.name && <ErrorText>{errors.name}</ErrorText>}
          </div>
          <div>
            <Label>UID</Label>
            <Input name="uid" value={formValues.uid} onChange={handleChange} />
            {errors.uid && <ErrorText>{errors.uid}</ErrorText>}
          </div>
          <div>
            <Label>Make</Label>
            <Input
              name="make"
              value={formValues.make}
              onChange={handleChange}
            />
            {errors.make && <ErrorText>{errors.make}</ErrorText>}
          </div>
          <div>
            <Label>Model number</Label>
            <Input
              name="model_number"
              value={formValues.model_number}
              onChange={handleChange}
            />
            {errors.model_number && (
              <ErrorText>{errors.model_number}</ErrorText>
            )}
          </div>
          <div>
            <Label>Serial number</Label>
            <Input
              name="serial_number"
              value={formValues.serial_number}
              onChange={handleChange}
            />
            {errors.serial_number && (
              <ErrorText>{errors.serial_number}</ErrorText>
            )}
          </div>
          <div>
            <Label>Package Date</Label>
            <Input
              type="date"
              name="package_date"
              value={formValues.package_date}
              onChange={handleChange}
            />
            {errors.package_date && (
              <ErrorText>{errors.package_date}</ErrorText>
            )}
          </div>
          <div>
            <Label>Switch</Label>
            <select
              name="switch"
              value={formValues.switch}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                backgroundColor: "#f9f9f9",
              }}
            >
              <option value="">Select Option</option>
              <option value="1">Switch 1</option>
              <option value="2">Switch 2</option>
              <option value="3">Switch 3</option>
            </select>
            {errors.switch && <ErrorText>{errors.switch}</ErrorText>}
          </div>
        </FormGrid>
        <ButtonRow>
          <CancelButton
            onClick={() => {
              setShowModal(false);
              setErrors({});
            }}
          >
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

export default OltPopUpModal;
