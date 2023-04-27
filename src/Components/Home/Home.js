import {Link} from 'react-router-dom'
function Home() {
    return (
            <div className="home-container">
                <h2>Github Battle</h2>
                <Link to='/battle'><button>Battle</button></Link>
            </div>
        );
}
export default Home;