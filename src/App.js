import React, { Component } from 'react';
import myCSS from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: "1", name: "Rafa", age: 34},
      {id: "2",name: "Vero", age: 32},
      {id: "3",name: "Bartek", age: 33}
    ],
    showPersons: false,
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  } 

   render() {

     let persons = null;
     let btnClass = '';

     if(this.state.showPersons){
       persons = (
          <div>
            {this.state.persons.map((person,index) => {
              return <Person 
                        click={() => this.deletePersonHandler(index)}
                        name={person.name} 
                        age={person.age} 
                        key={person.id}
                        changed={(event) => this.nameChangedHandler(event, person.id)} />
            })}
          </div> 
       );
       btnClass=myCSS.Red;
     }

     let classes = [];
     if (this.state.persons.length<=2){
       classes.push(myCSS.red);
     }
     if (this.state.persons.length<=1){
       classes.push(myCSS.bold);
     }
     

    return (
      <div className={myCSS.App}>
        <h1>Hi, I am a react App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          className={btnClass} 
          onClick={this.togglePersonsHandler}>
          Toggle Persons</button>
          <br /><br />
          {persons}
      </div>

    );
  }
}

export default App;
