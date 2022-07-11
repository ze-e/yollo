import React from 'react'
import Item from './Item';
function Column({name, column, color, items, moveItem, addItem, changeName, deleteItem, changeItemOrder}) {

  return (
    <div className="column" style={{backgroundColor: color}}>
      <h2 className="column__name">{name}</h2>
      <button type="button" onClick={() => addItem(column)}>Add an item</button>
      <div>
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