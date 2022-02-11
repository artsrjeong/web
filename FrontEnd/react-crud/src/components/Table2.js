import React, { Component } from 'react'
import '../css/Table.css';

export default class Table2 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <table className='table-in-table'>
                    <tr>
                        <td>
                            cell1
                        </td>
                        <td>
                            <table>
                                <tr>
                                    <td>row1</td>
                                </tr>
                                <tr>
                                    <td>row2</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}
