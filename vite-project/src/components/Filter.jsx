// TODO: Make this a controlled component. On each stroke of the key, it should filter the displayed pokemon

import { useState, useEffect } from "react"

const Filter = ({ names, setNames }) => {

    const [valueName, setValueName] = useState('')

    useEffect(() => {
        const valueNameList = names.filter(pokemon => pokemon.name.toLowerCase().includes(valueName.toLowerCase()))
        setNames(valueNameList)
    }, [valueName, names, setNames])

    console.log(valueName)
    //idk i feel like im rightt there but something is not working 
    return (
        <div className="ui search">
            <div className="ui icon input">
                <input className="prompt" placeholder="Search by Name..." onChange={(e) => setValueName(e.target.value)} value={valueName} />
                <i className="search icon" />
            </div>
        </div>
    )
}

export default Filter