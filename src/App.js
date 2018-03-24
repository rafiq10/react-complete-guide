import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Rafa", age: 34},
      {name: "Vero", age: 32},
      {name: "Bartek", age: 33}
    ],
  }

  switcNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 34},
        {name: "Vero", age: 32},
        {name: "Bartek", age: 25}
      ],
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: "Grzesio", age: 34},
        {name: "Vero", age: 32},
        {name: event.target.value, age: 25}
      ],
    })
  }
   render() {
     const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',

     }

    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <button
          style={style} 
          onClick={this.switcNameHandler.bind(this, 'Grzegorz')}>Switch Name</button>
          <br /><br />

        <button
          style={style} 
          onClick={() => {this.switcNameHandler("Gregorios")} }>Switch Name2</button>
        <Person 
          name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person click={this.switcNameHandler.bind(this, 'Bilu')}
          name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person 
          changed={this.nameChangeHandler}
          name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'I am a react App'));
  }
}

export default App;
