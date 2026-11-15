import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const name = this.state.name.trim();
    const salary = Number(this.state.salary);
    if (name.length < 3 || !this.state.salary || !Number.isFinite(salary) || salary < 0) return;
    this.props.onAdd(name, this.state.salary);
    this.setState({
        name: '',
        salary: ''
    })
}

  render() {
    const { name, salary } = this.state;

    return (
      <div className='app-add-form'>
        <h3>Добавьте нового сотрудника</h3>
        <form className='add-form d-flex' onSubmit={this.onSubmit}>
          <input
            type='text'
            className='form-control new-post-label'
            placeholder='Как его зовут?'
            aria-label='Employee name'
            name='name'
            value={name}
            onChange={this.onValueChange}
            minLength="3"
            required
          />
          <input
            type='number'
            className='form-control new-post-label'
            placeholder='З/П в $?'
            aria-label='Employee salary'
            name='salary'
            value={salary}
            onChange={this.onValueChange}
            min="0"
            step="1"
            required
          />

          <button type='submit' className='btn btn-outline-light'>
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
