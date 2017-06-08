import React from 'react';
import Card from './card';
 
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: {
        
      }
    };
  }
 
handleCardClick = function() {

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