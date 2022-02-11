import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table';
import '../css/Table.css';
import TreeView from 'treeview-react-bootstrap';

var data = [
    {id: 1, name: 'Gob', value: '2'},
    {id: 2, name: 'Buster', value: '5'},
    {id: 3, name: 'George Michael', value: '4'} 
  ];

  function onSelectRow(row, isSelected, e) {
    if (isSelected) {
      alert(`You just selected '${row['name']}'`)
    }
  }

var tree = [
  {
    text: "John Peter",
    nodes: [
      {
        text: "ID: 11111",
        nodes: [
          {
            text: "VIN"
          },
          {
            text: "Policy Effective Date"
          },
          {
            text: "Policy Expiration Date"
          },
          {
            text: "Vehicle Make"
          },
          {
            text: "Vehicle Model"
          }
        ]
      },
      {
        text: "ID: 123456",
        nodes: [
          {
            text: "VIN"
          },
          {
            text: "Policy Effective Date"
          },
          {
            text: "Policy Expiration Date"
          },
          {
            text: "Vehicle Make"
          },
          {
            text: "Vehicle Model"
          }
        ]
      }
    ]
  },
  {
    text: "Scott Brown"
  }
];


  const selectRowProp = {
    mode: 'checkbox',
    clickToSelect: true,
    unselectable: [2],
    selected: [1],
    onSelect: onSelectRow,
    bgColor: 'gold'
  };

  function rowClassNameFormat(row, rowIdx) {
    // row is whole row object
    // rowIdx is index of row
    console.log(row)
    return row['name'] === 'George Michael' ? 
      'GeorgeMichael-Row' : 'Other-Row';
  }  

export default class TableTest extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);
    this.data=data;
    this.state = {
      id: null,
      title: "",
      description: "", 
      published: false,
      submitted: false
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  saveTutorial() {
    var data = {
      title: this.state.title,
      description: this.state.description
    };

    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      title: "",
      description: "",
      published: false,
      submitted: false
    });
  }

  render() {
    return (
      <div class="container no-gutters">
        <div class="row justify-content-start">
          <div class="col-4">
            One of two columns
          </div>
          <div class="col-4">
            One of two columns
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-4">
            One of two columns
          </div>
          <div class="col-4">
            One of two columns
          </div>
        </div>
        <div class="row justify-content-end">
          <div class="col-4">
            One of two columns
          </div>
          <div class="col-4">
            One of two columns
          </div>
        </div>
        <div class="row justify-content-around">
          <div class="col-4">
            One of two columns
          </div>
          <div class="col-4">
            One of two columns
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col-4">
            One of two columns
          </div>
          <div class="col-4">
            One of two columns
          </div>
        </div>

<div>
<TreeView data={tree}/>
</div>

</div>
      //   <div>
      //   <p className="Table-header">Basic Table</p>            
      //   <BootstrapTable data={this.data} selectRow={selectRowProp}>
      //   <TableHeaderColumn isKey dataField='id'
      //     >
      //       ID
      //     </TableHeaderColumn>
      //     <TableHeaderColumn dataField='name'
      //     >
      //       Name
      //     </TableHeaderColumn>
      //     <TableHeaderColumn dataField='value'
      //     >
      //       Value
      //     </TableHeaderColumn>
      //   </BootstrapTable>
      // </div>
    );
  }
}
