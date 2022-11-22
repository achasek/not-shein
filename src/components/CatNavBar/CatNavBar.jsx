import { Link } from 'react-router-dom'
import './CatNavBar.css'

export default function NavBar({ user, setUser }) {

    return (
        // update links with icons later
        <nav className="CatNavBar">
            <Link to="/favorites">Favorites2</Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new">New Order2</Link>
        </nav>
    )
}