import React , {useState} from "react";
import { useNavigate } from "react-router-dom";


const HeaderForm = () => {
    const [id, setId] = useState("")
    const [category, setCategory] = useState("")
    const navigate = useNavigate();

    const handleSubmit =(e) => {
        e.preventDefault()
        navigate(`/${category}/${id}`)
        clearForm()
    }

    const clearForm = () => {
        setId("")
        setCategory("")
    }

    return (
        <fieldset>
            <legend> HeaderForm.jsx</legend>
            <form onSubmit={handleSubmit}>
                <h4>Search For : 
                <select name="category" onChange={e=>setCategory(e.target.value)} value={category}>
                    <option hidden>Character or Planet?</option>
                    <option value="people">Character</option>
                    <option value="planet">Planet</option>
                </select>
                <input type="text" name="id" value={id} onChange={e=>setId(e.target.value)} />
                <button type="submit"> Search </button>
                </h4>
            </form>

        </fieldset>
    )
}

export default HeaderForm