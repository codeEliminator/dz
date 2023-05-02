import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import { battle } from "../../Api/api"
import PlayerPreview from "../PlayerInput/PlayerPreview"

function Results() {
    const location = useLocation()
    const [players, setPlayers] = useState([])
    useEffect(() => {
        const params = new URLSearchParams(location.search)   
        const battlePlayer = async () => {
            const players = await battle([params.get('playerOneName'), params.get('playerTwoName')])
            if(players)
                setPlayers(players)
        }
        battlePlayer()
        
    })
    return ( 
        <div className="row">
            {
                players.map((player, iteration) => (
                    <PlayerPreview
                        avatar={`https://github.com/${player.profile.login}.png?size=200`}
                        userName={player.profile.login}
                    >
                        <div className="column">
                            {iteration === 0 ? <span style={{color: 'green'}}>Winner</span> : <span style={{color: 'red'}}>Loser</span>}
                            <div className="followers">Followers: {player.profile.followers}</div>
                            <div className="company">Company: {player.profile.company !== null ? player.profile.company : 'No company'}</div>
                            <div className="following">Following: {player.profile.following}</div>
                            <div className="public-repos">Following: {player.profile.public_repos}</div>
                            <div className="blog">Following: {player.profile.blog}</div>
                        </div>
                        
                    </PlayerPreview>
                    )
                )
            }
        </div>
    )
}
export default Results
