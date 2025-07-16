// src/components/BulkUploadModal.js
import React, { useState } from 'react';
import {
  Overlay,
  ModalContainer,
  Title,
  Label,
  Select,
  FileLabel,
  FileInput,
  FileName,
  ButtonGroup,
  CancelButton,
  UploadButton
} from './Bulkmodal.Styles';

function BulkUploadModal({ isOpen, onClose }) {
  const [selectedFileName, setSelectedFileName] = useState('No file chosen');
  const [selectedIsp, setSelectedIsp] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFileName(file ? file.name : 'No file chosen');
  };

  const handleIspChange = (event) => {
    setSelectedIsp(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('ISP Selected:', selectedIsp);
    console.log('File Selected:', selectedFileName);
    alert('Form submitted!');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <Title>Bulk Customer Upload</Title>
        <form onSubmit={handleSubmit}>
          {/* ISP Selection */}
          <div>
            <Label htmlFor="isp-select">Select ISP</Label>
            <Select id="isp-select" value={selectedIsp} onChange={handleIspChange}>
              <option value="" disabled>Select ISP</option>
              <option value="isp1">ISP 1</option>
              <option value="isp2">ISP 2</option>
              <option value="isp3">ISP 3</option>
            </Select>
          </div>

          {/* File Upload */}
          <div style={{ margin: '20px 0' }}>
            <Label>Upload Excel File</Label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FileLabel htmlFor="file-upload">Choose file</FileLabel>
              <FileInput
                id="file-upload"
                type="file"
                accept=".xls,.xlsx"
                onChange={handleFileChange}
              />
              <FileName>{selectedFileName}</FileName>
            </div>
          </div>

          {/* Buttons */}
          <ButtonGroup>
            <CancelButton type="button" onClick={onClose}>
              Cancel
            </CancelButton>
            <UploadButton type="submit">
              Upload
            </UploadButton>
          </ButtonGroup>
        </form>
      </ModalContainer>
    </Overlay>
  );
}

export default BulkUploadModal;
