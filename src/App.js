import React from 'react';
 
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
 
  render() {
	  console.log('IS THIS WORKING');
    return (
      <button
        onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}
      >
        Count: {this.state.count}
      </button>
    );
  }
}
export default App;