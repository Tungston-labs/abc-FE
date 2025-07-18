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
  ErrorText,
} from "./SwitchPopUpModal.Styles";
import { addNewSwitch, EditSwitch } from "../../services/switcheService";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
const SwitchPopUpModal = ({
  isEdit,
  setShowModal,
  selectedSwitch,
  fetchData,
}) => {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    uid: "",
    make: "",
    model_number: "",
    serial_number: "",
    package_date: "",
  });

  useEffect(() => {
    if (isEdit && selectedSwitch) {
      setFormData({ ...selectedSwitch });
    } else {
      setFormData({
        name: "",
        uid: "",
        make: "",
        model_number: "",
        serial_number: "",
        package_date: "",
      });
    }
  }, [isEdit, selectedSwitch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (value.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter the switch name.";
    if (!formData.uid.trim()) newErrors.uid = "Unique ID is required.";
    if (!formData.make.trim()) newErrors.make = "Please enter the make.";
    if (!formData.model_number.trim())
      newErrors.model_number = "Model number cannot be empty.";
    if (!formData.serial_number.trim())
      newErrors.serial_number = "Serial number is required.";
    if (!formData.package_date.trim())
      newErrors.package_date = "Please select the package date.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsLoading(true);
    try {
      if (isEdit) {
        await EditSwitch(formData, selectedSwitch?.id);
      } else {
        await addNewSwitch(formData);
      }
      Swal.fire({
        title: `Switch ${isEdit ? "Updated" : "Added"} Successfully`,
        icon: "success",
        draggable: true,
      });
      setFormData({
        name: "",
        uid: "",
        make: "",
        model_number: "",
        serial_number: "",
        package_date: "",
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
        <ModalHeader>{isEdit ? "Edit Switch" : "Add New Switch"}</ModalHeader>
        <FormGrid>
          <div>
            <Label>Name</Label>
            <Input name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <ErrorText>{errors.name}</ErrorText>}
          </div>
          <div>
            <Label>UID</Label>
            <Input name="uid" value={formData.uid} onChange={handleChange} />
            {errors.uid && <ErrorText>{errors.uid}</ErrorText>}
          </div>
          <div>
            <Label>Make</Label>
            <Input name="make" value={formData.make} onChange={handleChange} />
            {errors.make && <ErrorText>{errors.make}</ErrorText>}
          </div>
          <div>
            <Label>Model number</Label>
            <Input
              name="model_number"
              value={formData.model_number}
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
              value={formData.serial_number}
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
              value={formData.package_date}
              onChange={handleChange}
            />
            {errors.package_date && (
              <ErrorText>{errors.package_date}</ErrorText>
            )}
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
          <SaveButton onClick={handleSubmit} disabled={isLoading}>
            {/* {isEdit ? "Save" : "Save"} */}
            {isLoading ? "Saving..." : "Save"}
          </SaveButton>
        </ButtonRow>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default SwitchPopUpModal;
