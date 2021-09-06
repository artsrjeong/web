import React, { Component } from 'react';
import List from './List';

class KanbanBoard extends Component {
  render(){
    //ES5
    var numbers=[1,4,9];
    numbers.filter((number,index,source)=>{
      // number : 요소값
      // index : source 에서 요소의 index
      // source : 순회하는 대상
      console.log(number);
      console.log(index);
      console.log(source);
      return number>3;
    });
    var oddArr=numbers.filter(x=>(x%2)!==0);
    console.log(oddArr);

    const guys=[
      {name: 'YD', money:500000},
      {name: 'Bill', money:400000},
      {name: 'Andy', money:300000},
      {name: 'Roky', money:200000}
    ];
    const rich=guys.filter(man=>man.money>300000);
    console.log(rich);
    const richNames=guys.filter(man=>man.money>300000)
                    .map(man=>man.name);
    console.log(richNames);
    return (
      <div className="app">
        {/* <h1>KanbanBoard</h1> */}
        <List id='todo'
              title="To Do"
              cards={this.props.cards.filter((card) => card.status === "todo")} />
        <List id='in-progress'
              title="In Progress"
              cards={this.props.cards.filter((card) => card.status === "in-progress")} />
        <List id='done'
              title='Done'
              cards={this.props.cards.filter((card) => card.status === "done")} />
      </div>
    );
  }
};

export default KanbanBoard;
