import styled from "styled-components";

export const Container = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
//   max-width: 1000px;
  margin: auto;
  font-family: 'Segoe UI', sans-serif;
`;

export const BackButton = styled.button`
  background: none;
  // border: none;
  color: #333;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;
  margin-bottom: 1rem;
height:40px;
width:8%;
border-radius:8px;
  svg {
    font-size: 1.2rem;
  }
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

export const TabSection = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  justify-content:center;

`;

export const Tab = styled.button`
  background: ${({ active }) => (active ? "#6b22d6" : "#eee")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  width:20%;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  position: relative;
`;

export const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid #6b22d6;
`;

export const UploadIcon = styled.div`
  position: absolute;
  bottom: 5px;
  right: calc(50% - 40px);
  background: #6b22d6;
  border-radius: 50%;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;

  svg {
    font-size: 1rem;
  }
`;

export const SubTitle = styled.h3`
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 500;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Always 2 columns */
  gap: 1.2rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* Stack vertically on small screens */
  }
`;


export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 0.3rem;
  font-size: 0.9rem;
  color: #444;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: white;
  outline: none;

  &:read-only {
    background: #eee;
    color: #555;
  }
`;