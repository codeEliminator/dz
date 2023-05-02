import { useState } from "react";

const PlayerInput = ({id, label, onSubmit}) => {
    const [userName, setUserName] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(userName, id)
    }
    return (
        <form className="column" onSubmit={handleSubmit}>
            <label htmlFor="userName">{label}</label>
            <input id="userName"
                type="text"
                value={userName}
                autoComplete="off"
                placeholder="Github userName"
                onChange={(event) => (setUserName(event.target.value))}
            />
            <button className="button" type='submit' disabled={!userName}>Submit</button>
        </form>
    )
}
export default PlayerInput