import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import { useSelector } from 'react-redux'
import './App.css'

function App() {
  const state = useSelector((state) => state.contacts)
  console.log(state);
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
