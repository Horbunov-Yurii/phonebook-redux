import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchContacts } from './redux/contactsSlice'
import './App.css'

function App() {
  const state = useSelector((state) => state.contacts)
  // console.log(state);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  return (
    <>
      <div>
        <h1>Книга контактів</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  )
}

export default App
