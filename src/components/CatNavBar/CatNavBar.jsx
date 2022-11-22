import { Link } from 'react-router-dom'
import './CatNavBar.css'

export default function NavBar({ user, setUser }) {

    return (
        // update links with icons later
        <nav className="CatNavBar">
            <Link to="/categories">Shop All</Link>
            &nbsp; | &nbsp;
            <Link to="/categories/mens">Shop Mens</Link>
            &nbsp; | &nbsp;
            <Link to="/categories/womens">Shop Womens</Link>
        </nav>
    )
}