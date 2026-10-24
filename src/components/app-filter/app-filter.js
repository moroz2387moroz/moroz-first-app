// import "./app-filter.css";
import styled from "styled-components";

const BtsGroup = styled.div`
  margin-top: 20px;
`;

const AppFilter = (props) => {
  const btsData = [
    { name: "all", label: "Все сотрудники" },
    { name: "rise", label: "На повышение" },
    { name: "moreThen1000", label: "З/П больше 1000$" },
  ];

  const bts = btsData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? "btn-light" : "btn-outline-light";
    return (
      <button
        type="button"
        className={`btn ${clazz}`}
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });
  return <BtsGroup>{bts}</BtsGroup>;
};

export default AppFilter;
