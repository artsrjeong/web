import React from 'react';  
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'

function App() {  
 const students = [  
              {  
                'id': 1,   
                'name': 'Jack',   
                'email': 'jack@gmail.com'  
              },  
              {  
                'id': 2,   
                'name': 'Mary',   
                'email': 'mary@gmail.com'  
              },  
              {  
                'id': 3,   
                'name': 'John',   
                'email': 'john@gmail.com'  
              },  
          ];  
    
  return (  
      <BootstrapTable data={students}>
        <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='email'>Product Price</TableHeaderColumn>
      </BootstrapTable>
  );  
}  
    
export default App;  