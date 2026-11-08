import ContactItem from "../ContactItem/ContactItem"
import { useSelector } from "react-redux"

function ContactList() {
    const contacts = useSelector((state) => state.contacts.items)
    console.log(contacts);
    
    return <div>
        <h2>Мої контакти</h2>
        <ul>{contacts.map((contact) => {
            return (
                <ContactItem key={contact.id} contact={contact} />
            )
        })}
        </ul>
    </div>
}

export default ContactList