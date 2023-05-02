function PlayerPreview({avatar, userName, children}) {
    return (  
        <div className="column">
            <img className="avatar" src={avatar}></img>
            <h2 className="userName">@{userName}</h2>
            {children}
        </div>
    );
}

export default PlayerPreview;