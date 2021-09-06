import React, { Component } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import '../../node_modules/react-pro-sidebar/dist/css/styles.css';


class Sidebar extends Component {
    render(){
        return(
            <ProSidebar>
                <Menu iconShape="square">
                    <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
                    <SubMenu title="Components" icon={<FaHeart />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>
        )
    }   
}

export default Sidebar 