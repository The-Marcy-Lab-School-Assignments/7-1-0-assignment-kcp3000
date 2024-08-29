import PokemonContext from "../context/PokemonContext"
import { useState } from "react"
import handleFetch from "../utils/handleFetch"
import { useContext } from "react"
const PokemonForm = () => {
    const [name, setName] = useState("")
    const [hp, setHP] = useState(0)
    const [front, setFrontImg] = useState("")
    const [back, setBackImg] = useState("")


    const { setAllPokemon } = useContext(PokemonContext)
    const handleSubmit = async () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, hp, front, back }),
        }
        console.log(options)
        const [data, error] = await handleFetch("http://localhost:4000/pokemon", options)
        console.log(data)
        if (data) setAllPokemon((allPokemon) => [...allPokemon, data])
    }

    return (
        <div>
            <h3>Add a Pokemon!</h3>
            <form className="ui form" onSubmit={(e) => {
                e.preventDefault()
                setName(e.target)
                handleSubmit()
            }}>
                <div className="four fields" widths="equal">
                    <div className="field ui fluid">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => {
                            setName(e.target.value)
                        }} />
                    </div>
                    <div className="field ui fluid">
                        <label>HP</label>
                        <input type="text" name="hp" placeholder="HP" value={hp} onChange={(e) => {
                            setHP(e.target.value)
                        }} />
                    </div>
                    <div className="field ui fluid">
                        <label>Front Image URL</label>
                        <input type="text" name="front" placeholder="url" value={front} onChange={(e) => {
                            setFrontImg(e.target.value)
                        }} />
                    </div>
                    <div className="field ui fluid">
                        <label>Back Image URL</label>
                        <input type="text" name="back" placeholder="url" value={back} onChange={(e) => {
                            setBackImg(e.target.value)
                        }} />
                    </div>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PokemonForm