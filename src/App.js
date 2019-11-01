import React from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from "axios";
import { TreeGridComponent, ColumnsDirective, ColumnDirective, Selection, RowDD, Inject } from '@syncfusion/ej2-react-treegrid';
import { dragData } from './Data';
import { SampleBase } from './sampleBase';
class App extends SampleBase {
  constructor(props){
    super(props)
    this.state={
      toDos:[]
    }
  }
  componentDidMount(){
    // Axios.get("https://jsonplaceholder.typicode.com/todos")
    // .then((response)=>{
    //   this.setState({toDos:response.data})
    // })
    // .catch((err)=>{
    //   console.log(err)
    // })
  }
  render(){
  return (
    <div className="App">
      <div>Hello world</div>
      <div className='control-pane'>
        <div className='control-section'>
          <TreeGridComponent dataSource={dragData} treeColumnIndex={1} childMapping='subtasks' height='410' allowRowDragAndDrop='true' selectionSettings={{ type: 'Multiple' }}>
            <ColumnsDirective>
              <ColumnDirective field='taskID' headerText='Task ID' width='70' textAlign='Right' isPrimaryKey={true}></ColumnDirective>
              <ColumnDirective field='taskName' headerText='Task Name' width='200'></ColumnDirective>
              <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right'/>
              <ColumnDirective field='endDate' headerText='End Date' width='90' format='yMd' textAlign='Right'/>
              <ColumnDirective field='duration' headerText='Duration' width='90' textAlign='Right'/>
              <ColumnDirective field='progress' headerText='Progress' width='90' textAlign='Right'/>
              <ColumnDirective field='priority' headerText='Priority' width='90'/>
            </ColumnsDirective>
            <Inject services={[RowDD, Selection]}/>
          </TreeGridComponent>
        </div>
      </div>
     {/* <ul>
     {this.state.toDos.map((todos)=>{
        return <li>{todos.title}</li>
     })}
     </ul> */}
    </div>
  );
}
}

export default App;
