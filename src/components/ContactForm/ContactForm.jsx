import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { addContact,editContact } from "../../redux/contactsSlice"

function ContactForm({editing, setEditing}) {
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")

useEffect(()=>{
  if(editing){
    setName(editing.name)
    setNumber(editing.number)
  }
},[editing])

  function handleSubmit(event) {
    event.preventDefault()
    if(!name.trim() || !number.trim()){
      return
    }
    const newContact = {
      name,
      number,
    }
    
  if (editing){
    dispatch(editContact({
      id: editing.id, 
      name:name.trim(),
      number:number.trim(),

    }))
  }else{
  dispatch(addContact(newContact))
  }

    
    setName("")
    setNumber("")

    setEditing(null)
  }

  return <div>
    <h2>Додати контакти</h2>
    <form onSubmit={handleSubmit}>
      <input onChange={(evt) => setName(evt.target.value)} value={name} name="name" type="text" placeholder="напиши імя" required/>
      <input onChange={(evt) => setNumber(evt.target.value)} value={number} name="number" type="tel" placeholder="напиши телефон" required/>
      <button type="submit">{editing?"зберегти змини": "додати контакт"}</button>
    </form>
  </div>
}

export default ContactForm