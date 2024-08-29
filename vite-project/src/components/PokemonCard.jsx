import { useState } from "react"

// TODO: This component should render a single pokemon's stats and image.
const PokemonCard = ({ pokemon }) => {

    const { name, hp, front, back } = pokemon
    const [clicked, setClicked] = useState(false)

    const clicking = () => {
        setClicked(!clicked)
    }

    return (
        <div className="ui card" onClick={clicking}>
            <div>
                <div className="image">
                    <img alt={name} src={clicked ? back : front} />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                </div>
                <div className="extra content">
                    <span>
                        <i className="icon heartbeat red" />
                        {hp}
                    </span>
                </div>
            </div>
        </div >
    )
}

export default PokemonCard