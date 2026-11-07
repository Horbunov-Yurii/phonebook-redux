import ContactItem from "../ContactItem/ContactItem"

function ContactList() {
    const contacts = [
        {
            id: 1,
            name: "nazar",
            number: "123745",
        },
        {
            id: 2,
            name: "alex",
            number: "987654",
        },
        {
            id: 3,
            name: "ivan",
            number: "456789",
        },
        {
            id: 4,
            name: "maks",
            number: "321654",
        },
        {
            id: 5,
            name: "dima",
            number: "789123",
        },
    ];
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