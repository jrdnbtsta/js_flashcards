import React from 'react';
 
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
 
  render() {
    return (
      <div>
      
      <button>Hard</button> <button> Easy </button>
      </div>
    );
  }
}
export default App;