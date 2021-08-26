import React, { Component } from 'react';
import './App.css';
import Table4 from './components/Table4'
import { useTable, useGroupBy, useExpanded } from "react-table";

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
        <Table4 data={data}/>
      </div>
    );
  }
}
 
export default App;