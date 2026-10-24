import { Component } from "react";

import styled from "styled-components";
// import "./employees-add-form.css";

const AppAddForm = styled.div`
  margin-top: 30px;
  padding: 25px;
  background-color: #3d5a80;
  border-radius: 4px;
  box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15);
  color: whitesmoke;

  form {
    margin-top: 20px;
  }

  input {
    width: 350px;
    margin-right: 20px;
  }
`;

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.name.trim().length < 2 ||
      !this.state.salary ||
      this.state.salary <= 0
    ) {
      alert("Введи корректные данные!");
      return;
    }

    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
      name: "",
      salary: "",
    });
  };

  render() {
    const { name, salary } = this.state;
    return (
      <AppAddForm>
        <h3>Добавьте нового сотрудника</h3>
        <form className="d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            name="name"
            placeholder="Как его зовут?"
            value={name}
            onChange={this.onValueChange}
            required
          />
          <input
            type="number"
            className="form-control new-post-label"
            name="salary"
            placeholder="З/П в $?"
            value={salary}
            onChange={this.onValueChange}
            required
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </AppAddForm>
    );
  }
}

export default EmployeesAddForm;
