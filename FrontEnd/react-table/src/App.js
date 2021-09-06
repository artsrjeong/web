import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar'

var data = [
  {id: 1, name: 'Gob', value: '2'},
  {id: 2, name: 'Buster', value: '5'},
  {id: 3, name: 'George Michael', value: '4'}
];
 
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="Table-header">Basic Table</p>
        <Sidebar/>
      </div>
    );
  }
}
 
export default App;