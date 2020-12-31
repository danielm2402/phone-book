import React, { Component } from 'react';

class TodoForm extends Component {
  constructor () {
    super();
    this.state = {
      nombre: '',
      numero1: '',
      numero2: '',
      codigo: '+57'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      nombre: '',
      numero1: '',
      numero2: '',
      codigo: '+57'
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="nombre"
              className="form-control"
              value={this.state.nombre}
              onChange={this.handleInputChange}
              placeholder="Nombre"
              />
          </div>

          <div className="form-group">
            <select
                name="codigo"
                className="form-control"
                value={this.state.codigo}
                onChange={this.handleInputChange}
              >
              <option>+57</option>
              <option>+58</option>
              <option>+56</option>
            </select>
          </div>

          <div className="form-group">
            <input
              type="text"
              name="numero1"
              className="form-control"
              value={this.state.numero1}
              onChange={this.handleInputChange}
              placeholder="Número 1"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="numero2"
              className="form-control"
              value={this.state.numero2}
              onChange={this.handleInputChange}
              placeholder="Número 2"
              />
          </div>
         
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    )
  }

}

export default TodoForm;