const fetchData = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}
const getProfile = async (userName) => {
    try{
        const data = await fetchData(`https://api.github.com/users/${userName}`)
        return data   
    }
    catch(error){
        throw Error(error)
    }
    
}

const getRepos = async (userName) => {
    try{
        const response = await fetchData(`https://api.github.com/users/${userName}/repos`)
        return response
    }
    catch(error){
        throw Error(error)
    }
}

const gerStarsCount = (repos) => {
    return repos.reduce((value, nextValue) => value + nextValue.stargazers_count, 0)
}
const calculateScore = (profile, repos) => {
    const followers = profile.followers
    const totalStars = gerStarsCount(repos)
    return followers + totalStars
}

const getUserData = async (userName) => {
    const [profile, repos] = await Promise.all([
        getProfile(userName),
        getRepos(userName)
    ])
    if(profile && repos){
        return {
            profile,
            score: calculateScore(profile, repos)
        }
    }
}
const sortPlayers = (players) => players.sort((a, b) => b.score - a.score) 

export const battle = async (playerArray) => {
    try{
        const battleResult = await Promise.all(playerArray.map(player => getUserData(player)))
        return sortPlayers(battleResult)
    }  
    catch(error){
        throw Error(error)
    }
    
}
export const  fetchPopularRepos = async (language) => {
    try{
        const data = await fetchData(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=star&order=desc&type=Repositories`)
        return data.items
    }
    catch(error){
        throw Error(error)
    }
    
}