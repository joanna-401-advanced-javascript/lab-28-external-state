import React from 'react';
import Form from './components/Form/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: null,
    };
  }

  handleName = (newName) => {
    this.setState({
      name: newName,
    });
  };

  handleCount = () => {
    this.setState((previousState) => ({
      count: previousState.count + 1,
    }));
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <div>Name: {this.state.name}</div>
          <div># of Updates: {this.state.count}</div>
          <Form handleName={this.handleName} handleCount={this.handleCount}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
