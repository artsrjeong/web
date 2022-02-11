import React, { Component } from 'react'
import '../css/scroll.css';
import ComboBox from 'react-responsive-combo-box'
import 'react-responsive-combo-box/dist/index.css'

export default class OptionTest extends Component {
    render() {
        const data = [
            'America',
            'India',
            'Australia',
            'Argentina',
            'Ireland',
            'Indonesia',
            'Iceland',
            'Japan'
          ]        
        return (
            <div>
                <h3>Scroll down &darr;</h3>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                <ComboBox options={data} enableAutocomplete />
            </div>
        )
    }
}
