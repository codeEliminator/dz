import {useEffect, useState} from 'react'
import { fetchPopularRepos } from '../../Api/api'
import { Link, useSearchParams } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'
const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'HTML']
function Popular() {
    const [repos, setRepos] = useState([])
    const [isUpdating, setUpdating] = useState(false)
    const [searchParams] = useSearchParams();
    
    useEffect(() => {
        let getData = async (language) => {
            setUpdating(true)
            const data = await fetchPopularRepos(language)
            setRepos(data)            
            setUpdating(false)
        }
        searchParams.get('lang') ? getData(searchParams.get('lang')) : getData('All')
    }, [searchParams])
    
    return (
            <div>
                <ul className="languages">
                    {
                        isUpdating ? <li>{searchParams.get('lang')}</li> 
                        : languages.map((language, index) => {
                            return (
                                <Link key={index} to={`/popular?lang=${language}`}>
                                    <li key={index}
                                        style={{color: language === searchParams.get('lang') ? '#d0021b': '#000000', userSelect: 'none'}}
                                    >
                                        {language}
                                    </li>
                                </Link>
                            )})
                    }
                </ul>
                <ul className='popular-list'>
                    {
                        isUpdating ? <RotatingLines></RotatingLines> 
                        : repos.map((repo, index) => {
                            return (
                                <li key={index} className='popular-item'>
                                    <div className='popular-rank'>#{index+1}</div>
                                    <ul>
                                            <li>
                                                <img className='avatar' src={repo.owner.avatar_url} alt='Avatar'></img>
                                            </li>
                                            <li><a href={repo.html_url} target='_blank'>{repo.name}</a></li>
                                            <li>@{repo.owner.login}</li>
                                            <li>{repo.stargazers_count}⭐</li>
                                    </ul>
                                </li>
                            )
                        })
                    }
                    
                </ul>
            </div>
        );
}
export default Popular;