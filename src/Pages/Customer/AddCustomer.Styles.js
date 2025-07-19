import styled from 'styled-components';

export const Container = styled.div`
padding: 30px;
background: white;
`;

export const TopBar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

export const BackButton = styled.button`
background: white;
border: 1px solid #ccc;
padding: 10px 14px;
border-radius: 8px;
font-size: 14px;
display: flex;
align-items: center;
gap: 6px;
`;

export const AddButton = styled.button`
background: #83B1C9;
border: none;
padding: 12px 18px;
border-radius: 10px;
font-weight: 600;
color: #222;
`;

export const Content = styled.div`
margin-top: 30px;

h2 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 6px;
}

p {
  color: #444;
  margin-bottom: 24px;
}
`;

export const ImageSection = styled.div`
display: flex;
align-items: center;
gap: 20px;
margin-bottom: 30px;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
position: relative;
width: 110px;
height: 110px;
`;

export const ProfileImage = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 50%;
border: 4px solid #83B1C9;
`;

export const CameraIcon = styled.div`
position: absolute;
bottom: 0;
right: 0;
background: white;
border: 2px solid #83B1C9;
color: #83B1C9;
padding: 5px;
border-radius: 50%;
`;

export const UploadButtons = styled.div`
display: flex;
gap: 10px;
`;

export const UploadBtn = styled.button`
padding: 10px 14px;
border: 1px solid #83B1C9;
color: #83B1C9;
background: white;
border-radius: 8px;
`;

export const DeleteBtn = styled.button`
padding: 10px 14px;
background: white;
border: 1px solid #ccc;
border-radius: 8px;
`;

// export const FormGrid = styled.div`
// display: flex;
// gap: 60px;
// flex-wrap: wrap;
// `;

// export const Section = styled.div`
// flex: 1;  
// min-width: 300px;

// `;

// export const Field = styled.div`
// margin-bottom: 20px;

// label {
//   font-size: 14px;
//   font-weight: 500;
//   display: block;
//   margin-bottom: 6px;
// }

// input {
//   width: 100%;
//   padding: 10px 12px;
//   border: 1px solid #eee;
//   border-radius: 8px;
//   background: #f5f5f5;
// }
// `;

export const Spacer = styled.div`
height: 30px;
`;
export const FormGrid = styled.div`
width: 100%;
`;

export const Section = styled.div`
width: 100%;
`;

export const FieldRow = styled.div`
display: flex;
gap: 20px;
margin-bottom: 20px;
flex-wrap: wrap;
margin-top:10px;
`;

export const Field = styled.div`
flex: 1;
min-width: 250px;

label {
  font-size: 14px;
  font-weight: 500;
  display: block;
  margin-bottom: 6px;
}

input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #eee;
  border-radius: 8px;
  background: #f5f5f5;
}
`;