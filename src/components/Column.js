import React from 'react'
import Item from './Item';
function Column({name, column, color, items, moveItem, addItem, changeName, deleteItem, changeItemOrder}) {

  return (
    <div className="column" style={{backgroundColor: color}}>
      <h2 className="columnName">{name}</h2>
      <button type="button" onClick={() => addItem(column)}>Add an item</button>
      <div className="items">
        {items && items.map((item)=>{
          return <Item 
            key={item.id} 
            item={item} 
            moveItem={moveItem} 
            changeName={changeName}
            deleteItem={deleteItem}
            changeItemOrder={changeItemOrder}
            />
        })}
      </div>
    </div>
  )
}


export default Column;