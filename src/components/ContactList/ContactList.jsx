import ContactItem from '../ContactItem/ContactItem'
import { useSelector } from 'react-redux'
import { selectIsLoading, selectError, selectFilteredContact } from '../../redux/selectors'

function ContactList({ setEditing }) {
	const contacts = useSelector(selectFilteredContact)
	const isLoading = useSelector(selectIsLoading)
    const error = useSelector(selectError)
    

	return (
		<div>
			<h2>Мої контакти</h2>
			{isLoading && <p>loading contacts......</p>}

            {error && <p>{error}</p>}
			{!isLoading && (
				<ul>
					{contacts.map(contact => {
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
