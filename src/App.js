import logo from './logo.svg';
import Column from './components/Column';
import './App.css';
import React from 'react';

function App() {

  //columns start at 1, not 0
  const columns = [
    {
      column: 1,
      name: "Backlog",
      color: "#ff0000cc"
    },
    {
      column: 2,
      name: "To do",
      color: "#ffa500cc"
    },
    {
      column: 4,
      name: "Completed",
      color: "rgba(0, 255, 8, 0.8)"
    },
    {
      column: 3,
      name: "In Progress",
      color: "rgba(255, 255, 0, 0.8)"
    }
  ]

  const itemData = [
    {
      id: "400555537681",
      column: 1,
      name: "Hello world!"
    },
    {
      id: "1536048552007",
      column: 3,
      name: "MyTask"
    },
    {
      id: "357068460807",
      column: 3,
      name: "MyTask2"
    }
  ]

  const [data, setData] = React.useState(itemData);

  function createId(){
    return Math.floor(Math.random() * Date.now());
  }

  function addItem(column) {
    const newItem = {
      id: createId(),
      column: column,
      name: "My New Task",
      new: true
    }
    setData([newItem, ...data])
  }

  function deleteItem(id){
    const newVal = data.filter(item => item.id !== id);
    if (window.confirm("Are you sure you want to delete?") == true) setData([...newVal]);
  }

  function moveItem(id, changeBy){
    const newVal = [...data];
    const item = newVal.find(item => item.id === id)
   
    if((item.column + changeBy) <= columns.length  && (item.column + changeBy) > 0){
      item.column += changeBy;
      setData([...newVal]);
    }
  }

  function changeItemOrder(id, changeBy){
    const newVal = [...data];
    const item = newVal.find(e => e.id === id);
    const columnItems = newVal.filter(e => e.column === item.column);
    const nonColumnItems = newVal.filter(e => e.column !== item.column);

    const index = columnItems.findIndex(e => e.id === id);
    if((index + changeBy) <= columnItems.length && (index + changeBy) >= 0){
      columnItems.splice(index, 1);
      columnItems.splice(index + changeBy, 0, item);
      setData([...columnItems, ...nonColumnItems]);
    }
  }

  function changeName(id, newName){
    const newVal = [...data];
    const item = newVal.find(item => item.id === id)
    item.name = newName;
    if(item.new) delete item.new;
    setData([...newVal]);
  }



  return (
    <div className="App">
      <header><img className='App-logo' src={logo} alt="logo" /><h1 className="title">Yollo</h1></header>
      <div className = "columns">
        {columns && columns.sort((column1, column2) => column1.column - column2.column).map((column, index) => {
          return (
          <Column 
            key={index} 
            name={column.name} 
            column={column.column}
            color={column.color} 
            items={data.filter(item => column.column === item.column)} 
            moveItem={moveItem}
            addItem={addItem}
            changeName={changeName}
            deleteItem={deleteItem}
            changeItemOrder={changeItemOrder}
            />)
        })}
      </div>
    </div>
  );
}

export default App;
