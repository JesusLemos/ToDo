import React, { Component, Fragment } from 'react';

import './Main.css'

class Main extends Component{

    constructor(props){
        super(props);
        this.state={
            todoList:[
                {
                    name:'Todo1',
                    date:'2019-12-16',
                    status:'ToDo'
                },
                {
                    name:'Todo2',
                    date:'2019-12-16',
                    status:'ToDo'
                }
            ],
            todo:{}
        }
    }

onChangeTodoName = (ev) => {
    const name = ev.target.value;
 


    const data = {
        name, //tambien puede ser name:name
        date: new Date(Date.now()).toLocaleDateString(),
        status: 'ToDo'

    }
    this.setState({todo:data})
    
  
} 

onClickSaveName = () => {
    this.setState({ 
        todoList:[...this.state.todoList,this.state.todo],
        todo: {}
    })
    
}

    render(){
        return (
        <Fragment>
           <main className="grid">
           <nav>
          
          </nav>
          <section className="todoContent">
                  <input type="text" value={this.state.todo.name} onChange={(ev) => this.onChangeTodoName(ev)}/>
        <button onClick={() =>  this.onClickSaveName()}>Save </button>
                  <table>
                      <thead>
                          <tr>
                              <td>Name</td>
                              <td>Date</td>
                              <td>Status</td>
                          </tr>
                      </thead>
                      <tbody>
                        {this.state.todoList.map(item => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.date}</td>
                                <td>{item.status}</td>
                            </tr>
                        ))}
                      </tbody>
                  </table>
          </section>
          <footer className="">
              <p> 2020 - GeeksHubs</p>
          </footer>
           </main>
       
        </Fragment>
        )
    }
}

export default Main;