
export const  fetchPopularRepos = async (language) => {
    const url = `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=star&order=desc&type=Repositories`
    const response = await fetch(url)
    const data = await response.json()
    return data.items
}