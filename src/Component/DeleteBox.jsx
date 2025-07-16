import React from 'react';
import {
  ConfirmBox,
  IconCircle,
  TrashIcon,
  Title,
  Message,
  ButtonRow,
  CancelButton,
  DeleteButton,
} from './DeleteBox.Styles';

const DeleteBox = ({ onCancel, onDelete }) => {
  return (
    <ConfirmBox>
      <IconCircle>
        <TrashIcon />
      </IconCircle>
      <Title>Confirm Delete ?</Title>
      <Message>
        Are you sure you want to delete ? <br />
        This action cannot be undone
      </Message>
      <ButtonRow>
        <CancelButton onClick={onCancel}>Cancel</CancelButton>
        <DeleteButton onClick={onDelete}>Delete</DeleteButton>
      </ButtonRow>
    </ConfirmBox>
  );
};

export default DeleteBox;
