import React from 'react';

export default class extends React.Component {
  constructor(props){
    super(props);
  }

  handleChange = (event) => {
    // this.setState({ name: event.target.value });
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
