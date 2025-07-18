import React, { useEffect, useState } from "react";
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
} from "./LcoPopUpModal.Styles";
import { ErrorText } from "../Switches/SwitchPopUpModal.Styles";
import Swal from "sweetalert2";
import { addNewLco, EditLco } from "../../services/lcoServices";

const LcoPopUpModal = ({ setShowModal, isEdit, fetchData, selectedLco }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    address: "",
    aadhaar_number: "",
    phone: "",
    email: "",
    olts: [],
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  console.log(selectedLco);
  useEffect(() => {
    if (isEdit && selectedLco) {
      setFormValues({
        name: selectedLco.name || "",
        address: selectedLco.address || "",
        aadhaar_number: selectedLco.aadhaar_number || "",
        phone: selectedLco.phone || "",
        email: selectedLco.user_email || "",
        olts: selectedLco.olt_details?.map((olt) => olt.id) || [],
      });
    } else {
      setFormValues({
        name: "",
        address: "",
        aadhaar_number: "",
        phone: "",
        email: "",
        olts: [],
      });
    }
  }, [isEdit, selectedLco]);

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

    if (!formValues.name.trim()) newErrors.name = "Name is required.";
    if (!formValues.address.trim()) newErrors.address = "Address is required.";
    if (!formValues.aadhaar_number.trim()) {
      newErrors.aadhaar_number = "Aadhar number is required.";
    } else if (!/^[2-9]{1}[0-9]{11}$/.test(formValues.aadhaar_number.trim())) {
      newErrors.aadhaar_number = "Enter a valid 12-digit Aadhaar number.";
    }
    if (!formValues.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formValues.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }
    if (!formValues.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formValues.olts || formValues.olts.length === 0) {
      newErrors.olts = "Please select at least one OLT.";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsLoading(true);
    try {
      if (isEdit) {
        await EditLco(formValues, selectedLco?.id);
      } else {
        await addNewLco(formValues);
      }

      Swal.fire({
        title: `LCO ${isEdit ? "Updated" : "Added"} Successfully`,
        icon: "success",
      });

      setShowModal(false);
    } catch (error) {
      console.error(error);

      //add backend errors

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
        <ModalHeader>{isEdit ? "Edit LCO" : "Add new LCO"}</ModalHeader>
        <FormGrid>
          <div>
            <Label>Name</Label>
            <Input
              name="name"
              required
              value={formValues.name}
              onChange={handleChange}
            />
            {errors.name && <ErrorText>{errors.name}</ErrorText>}
          </div>
          <div>
            <Label>Address</Label>
            <Input
              required
              name="address"
              value={formValues.address}
              onChange={handleChange}
            />
            {errors.address && <ErrorText>{errors.address}</ErrorText>}
          </div>
          <div>
            <Label>Adhar Number</Label>
            <Input
              required
              name="aadhaar_number"
              type="number"
              value={formValues.aadhaar_number}
              onChange={handleChange}
            />
            {errors.aadhaar_number && (
              <ErrorText>{errors.aadhaar_number}</ErrorText>
            )}
          </div>
          <div>
            <Label>Phone Number</Label>
            <Input
              required
              name="phone"
              value={formValues.phone}
              onChange={handleChange}
            />
            {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
          </div>
          <div>
            <Label>Email</Label>
            <Input
              required
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
            />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
          </div>
          <div>
            <Label>OLT</Label>
            <select
              required
              name="olts"
              multiple
              value={formValues.olts}
              //   onChange={handleChange}
              onChange={(e) => {
                const selectedOptions = Array.from(
                  e.target.selectedOptions,
                  (option) => Number(option.value)
                );
                setFormValues((prev) => ({ ...prev, olts: selectedOptions }));
                setErrors((prevErrors) => ({ ...prevErrors, olts: undefined }));
              }}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                backgroundColor: "#f9f9f9",
              }}
            >
              <option value="">Select OLT</option>
              <option value="1">OLT 1</option>
              <option value="2">OLT 2</option>
              <option value="3">OLT 3</option>
            </select>
            {errors.olts && <ErrorText>{errors.olts}</ErrorText>}
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

export default LcoPopUpModal;
