import React from 'react'

function Item({item, moveItem, changeName, deleteItem, changeItemOrder}) {

  const [name, setName] = React.useState(item.name);
  const [isEditing, setIsEditing] = React.useState(false);

  function handleClose() {
    changeName(item.id, name);
    setIsEditing(false);
  }

  React.useEffect(()=>{
    if(item.new) setIsEditing(true);
  },[])

  return (
    <div className="item">
      {!isEditing && <button className="item__delete" type="button" onClick={()=>{deleteItem(item.id)}}>X</button>}
      
      {isEditing ? 
      <form className="item__editForm" onSubmit={() => {handleClose()}}>
        <input className="item__input" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <button className="item__setName" type="submit">Set name</button>
      </form>
      : <h3 onClick={()=>{setIsEditing(true);}}>{item.name}</h3>}
      
      <div className="item__buttons">
        <button type="button" disabled={isEditing} onClick={()=>{moveItem(item.id, -1)}}>←</button>
        <button type="button" disabled={isEditing} onClick={()=>{moveItem(item.id, 1)}}>→</button>
      </div>
      <div className="item__buttons">
        <button type="button" disabled={isEditing} onClick={()=>{changeItemOrder(item.id, -1)}}>↑</button>
        <button type="button" disabled={isEditing} onClick={()=>{changeItemOrder(item.id, 1)}}>↓</button>
      </div>
    </div>
  )
}

export default Item;