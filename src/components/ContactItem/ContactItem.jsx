import { useDispatch } from "react-redux"
import { deleteContact } from "../../redux/contactsSlice"

function ContactItem({ contact, setEditing }) {
    const dispatch = useDispatch()
    function handleDelete() {
        dispatch(deleteContact(contact.id))
    }

    function handleEdit(){
        setEditing(contact)
    }
    return (
        <>
            <li>
                <h2>{contact.name}</h2>
                <p>{contact.number}</p>
                <button type="button" onClick={handleEdit}>edit</button>
                <button onClick={handleDelete} type="button">delete</button>
            </li>
        </>
    )
}

export default ContactItem