import ContactItem from '../ContactItem/ContactItem'
import { useSelector } from 'react-redux'

function ContactList({ setEditing }) {
	const contacts = useSelector(state => state.contacts.items)
	const filter = useSelector(state => state.filter)
	const isLoading = useSelector(state => state.contacts.isLoading)
    const error = useSelector(state => state.contacts.error)
    
    
	const filteredContactsName = contacts.filter(contact =>
		contact.name.toLowerCase().includes(filter.toLowerCase()),
	)

	return (
		<div>
			<h2>Мої контакти</h2>
			{isLoading && <p>loading contacts......</p>}

            {error && <p>{error}</p>}
			{!isLoading && (
				<ul>
					{filteredContactsName.map(contact => {
						return (
							<ContactItem
								key={contact.id}
								contact={contact}
								setEditing={setEditing}
							/>
						)
					})}
				</ul>
			)}
		</div>
	)
}

export default ContactList
