function ContactItem({ contact }) {
    return (
        <>
            <li>
                <h2>{contact.name}</h2>
                <p>{contact.number}</p>
                <button type="button">edit</button>
                <button type="button">delete</button>
            </li>
        </>
    )
}

export default ContactItem