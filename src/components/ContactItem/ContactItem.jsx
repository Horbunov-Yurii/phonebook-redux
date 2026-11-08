import { useDispatch } from "react-redux"
import { deleteContact } from "../../redux/contactsSlice"

function ContactItem({ contact }) {
    const dispatch = useDispatch()
    function handleDelete() {
        dispatch(deleteContact(contact.id))
    }
    return (
        <>
            <li>
                <h2>{contact.name}</h2>
                <p>{contact.number}</p>
                <button type="button">edit</button>
                <button onClick={handleDelete} type="button">delete</button>
            </li>
        </>
    )
}

export default ContactItem