import { useDispatch , useSelector} from "react-redux"
import { changeFilter } from "../../redux/filterSlice"


function SearchBox() {

const dispatch = useDispatch()
const filter = useSelector(state => state.filter)
function handleChange(e){
    dispatch(changeFilter(e.target.value))
}
    return <div>
        <h2>Пошук контактів</h2>
        <input type="text" placeholder="пошук контакта" value={filter} onChange={handleChange}/>
    </div>
}

export default SearchBox