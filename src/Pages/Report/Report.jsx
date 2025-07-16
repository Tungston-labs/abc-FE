// src/Pages/Report/Report.jsx
import React, { useState } from 'react';
import {
  PageWrapper, SearchWrapper,
  SearchContainer,
  SearchInput,
  ButtonGroup,
  ClearButton,
  SearchButton,
  FilterButton,
  EmptyStateContainer,
  Illustration,
  Message,
  InputWrapper, SettingButton,
} from './Report.Styles';
import { RiSettingsLine } from "react-icons/ri";
import { FiFilter } from "react-icons/fi";
import Information from '../../Component/Information'; // ✅ Correct import

const SearchUI = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <PageWrapper>
      <SearchWrapper>
        <SearchContainer>
          <InputWrapper>
            <SearchInput placeholder="Search using customer Details" />
            <ButtonGroup>
              <ClearButton>Clear</ClearButton>
              <SearchButton>Search</SearchButton>
            </ButtonGroup>
          </InputWrapper>
        </SearchContainer>

        <SettingButton onClick={() => setShowModal(true)}>
          <RiSettingsLine />
        </SettingButton>

        <FilterButton><FiFilter /> Filter</FilterButton>
      </SearchWrapper>

      <EmptyStateContainer>
        <Illustration src="/images/report.png" alt="Search Illustration" />
        <Message>Search for Data !</Message>
      </EmptyStateContainer>

      {/* ✅ Modal with working close handler */}
      {showModal && (
        <Information
          isOpen={showModal}
          onClose={() => setShowModal(false)} // ✅ Closes modal
        />
      )}
    </PageWrapper>
  );
};

export default SearchUI;
