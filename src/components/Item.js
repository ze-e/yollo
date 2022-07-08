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
      {!isEditing && <button className="delete" type="button" onClick={()=>{deleteItem(item.id)}}>X</button>}
      
      {isEditing ? 
      <form className="editForm" onSubmit={() => {handleClose()}}>
        <input className="input" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <button className="setName" type="submit">Set name</button>
      </form>
      : <h3 onClick={()=>{setIsEditing(true);}}>{item.name}</h3>}
      
      <div className="buttons">
        <button type="button" className="button-left" disabled={isEditing} onClick={()=>{moveItem(item.id, -1)}}>←</button>
        <button type="button" className="button-right" disabled={isEditing} onClick={()=>{moveItem(item.id, 1)}}>→</button>
      </div>
      <div className="buttons">
        <button type="button" className="button-up" disabled={isEditing} onClick={()=>{changeItemOrder(item.id, -1)}}>↑</button>
        <button type="button" className="button-down" disabled={isEditing} onClick={()=>{changeItemOrder(item.id, 1)}}>↓</button>
      </div>
    </div>
  )
}

export default Item;