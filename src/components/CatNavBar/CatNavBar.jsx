import { Link } from 'react-router-dom'
import './CatNavBar.css'

export default function NavBar({ user, setUser }) {

    return (
        // update links with icons later
        <nav className="CatNavBar">
            <Link to="/categories" className='linkOne'>Shop All</Link>
            &nbsp; | &nbsp;
            <Link to="/categories/mens" className='linkTwo'>Shop Mens</Link>
            &nbsp; | &nbsp;
            <Link to="/categories/womens" className='linkThree'>Shop Womens</Link>
        </nav>
    )
}