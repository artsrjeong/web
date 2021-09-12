import React, { Component } from 'react'
import '../css/scroll.css';
export default class Scroll extends Component {
    render() {
        return (
            <div>
                <h3>Scroll down &darr;</h3>
                <div id="container">
                    <div class="item">1</div>
                    <div class="item">2</div>
                    <div class="item">3</div>
                    <div class="item">4</div>
                    <div class="item">5</div>
                    <div class="item">6</div>
                    <div class="item">7</div>
                    <div class="item">8</div>
                </div>
            </div>
        )
    }
}
