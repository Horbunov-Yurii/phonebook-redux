import { useState } from "react"
import { useDispatch } from "react-redux"
import { addContact } from "../../redux/contactsSlice"

function ContactForm() {
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    const newContact = {
      name,
      number,
    }
    console.log(newContact);

    dispatch(addContact(newContact))
    setName("")
    setNumber("")
  }

  return <div>
    <h2>Додати контакти</h2>
    <form onSubmit={handleSubmit}>
      <input onChange={(evt) => setName(evt.target.value)} value={name} name="name" type="text" placeholder="напиши імя" />
      <input onChange={(evt) => setNumber(evt.target.value)} value={number} name="number" type="tel" placeholder="напиши телефон" />
      <button type="submit">Додати контакт</button>
    </form>
  </div>
}

export default ContactForm