import React from 'react';

export default class extends React.Component {
  handleChange = (event) => {
    event.preventDefault();
    this.props.handleName(event.target.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleCount();
  };

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange}/>
      </form>
    );
  }
}
