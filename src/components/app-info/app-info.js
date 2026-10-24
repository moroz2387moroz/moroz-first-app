// import "./app-info.css";
import styled from "styled-components";

const AppStyleInfo = styled.div`
  padding: 25px;
  background-color: #3d5a80;
  border-radius: 4px;
  box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15);
  color: whitesmoke;
`;

const AppInfo = ({ employees, increased }) => {
  return (
    <AppStyleInfo>
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {employees}</h2>
      <h2>Премию получат: {increased}</h2>
    </AppStyleInfo>
  );
};

export default AppInfo;
